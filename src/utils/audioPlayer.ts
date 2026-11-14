// Singleton Audio Player for Background Wedding Music
// Supports both HTML5 Audio (/assets/music/wedding-song.mp3) and a procedural
// Web Audio API Indian Classical Shehnai / Sitar / Tanpura synthesizer fallback.

type AudioStateListener = (state: {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  trackName: string;
}) => void;

class WeddingAudioManager {
  private static instance: WeddingAudioManager;
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private volume: number = 0.7;
  private listeners: Set<AudioStateListener> = new Set();
  private trackSrc: string = "/Sanjay_wedding_invite/assets/music/wedding-song.mp3";
  private trackTitle: string = "Mangalam Mangal Dhwani";

  // Web Audio Fallback Synthesizer
  private audioCtx: AudioContext | null = null;
  private isUsingSynthFallback: boolean = false;
  private synthGainNode: GainNode | null = null;
  private synthInterval: number | null = null;

  private constructor() {
    this.initAudioElement();
  }

  public static getInstance(): WeddingAudioManager {
    if (!WeddingAudioManager.instance) {
      WeddingAudioManager.instance = new WeddingAudioManager();
    }
    return WeddingAudioManager.instance;
  }

  private initAudioElement() {
    if (typeof window === "undefined") return;

    this.audio = new Audio();
    this.audio.src = this.trackSrc;
    this.audio.loop = true;
    this.audio.volume = this.volume;
    this.audio.preload = "auto";

    this.audio.addEventListener("playing", () => {
      this.isPlaying = true;
      this.notifyListeners();
    });

    this.audio.addEventListener("pause", () => {
      this.isPlaying = false;
      this.notifyListeners();
    });

    this.audio.addEventListener("error", (e) => {
      console.warn("External MP3 audio file not found or failed to load. Activating procedural Indian Wedding Shehnai music synthesizer fallback.", e);
      // Fallback seamlessly to Web Audio synthesizer
      this.activateSynthFallback();
    });
  }

  public subscribe(listener: AudioStateListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners() {
    const state = this.getState();
    this.listeners.forEach((cb) => cb(state));
  }

  public getState() {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      volume: this.volume,
      trackName: this.trackTitle,
    };
  }

  public async play(): Promise<boolean> {
    if (this.isPlaying) return true;

    try {
      if (!this.isUsingSynthFallback && this.audio) {
        await this.audio.play();
        this.isPlaying = true;
        this.notifyListeners();
        return true;
      } else {
        this.startSynthMelody();
        this.isPlaying = true;
        this.notifyListeners();
        return true;
      }
    } catch (err) {
      console.warn("HTML5 audio play blocked or failed. Starting Web Audio synthesizer fallback.", err);
      this.activateSynthFallback();
      this.startSynthMelody();
      this.isPlaying = true;
      this.notifyListeners();
      return true;
    }
  }

  public pause() {
    if (this.audio && !this.isUsingSynthFallback) {
      this.audio.pause();
    }
    if (this.isUsingSynthFallback) {
      this.stopSynthMelody();
    }
    this.isPlaying = false;
    this.notifyListeners();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.audio) {
      this.audio.muted = this.isMuted;
    }
    if (this.synthGainNode) {
      this.synthGainNode.gain.value = this.isMuted ? 0 : this.volume * 0.25;
    }
    this.notifyListeners();
    return this.isMuted;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audio) {
      this.audio.volume = this.volume;
    }
    if (this.synthGainNode && !this.isMuted) {
      this.synthGainNode.gain.value = this.volume * 0.25;
    }
    this.notifyListeners();
  }

  /* --- Web Audio API Indian Shehnai & Tanpura Raga Synthesizer --- */
  private activateSynthFallback() {
    this.isUsingSynthFallback = true;
    this.trackTitle = "Auspicious Shehnai Raga (Live Synth)";
  }

  private startSynthMelody() {
    if (typeof window === "undefined") return;

    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) return;

      if (!this.audioCtx) {
        this.audioCtx = new AudioCtxClass();
      }

      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }

      if (!this.synthGainNode) {
        this.synthGainNode = this.audioCtx.createGain();
        this.synthGainNode.gain.value = this.isMuted ? 0 : this.volume * 0.25;
        this.synthGainNode.connect(this.audioCtx.destination);
      }

      // Start Tanpura continuous drone (Sa and Pa: C#4 = 277.18Hz and G#3 = 207.65Hz)
      this.startTanpuraDrone();

      // Play sacred Shehnai wedding raga notes sequence
      // Raag Yaman / Bilawal notes frequencies
      const notes = [
        { f: 277.18, d: 1.2 }, // Sa
        { f: 311.13, d: 0.8 }, // Re
        { f: 349.23, d: 1.4 }, // Ga
        { f: 415.30, d: 1.0 }, // Pa
        { f: 466.16, d: 1.6 }, // Dha
        { f: 523.25, d: 0.9 }, // Ni
        { f: 554.37, d: 2.0 }, // Tar Sa
        { f: 523.25, d: 1.0 }, // Ni
        { f: 466.16, d: 1.2 }, // Dha
        { f: 415.30, d: 1.8 }, // Pa
        { f: 349.23, d: 1.4 }, // Ga
        { f: 311.13, d: 1.0 }, // Re
        { f: 277.18, d: 2.5 }, // Sa
      ];

      let noteIndex = 0;
      const playNext = () => {
        if (!this.isPlaying || !this.audioCtx || !this.synthGainNode) return;
        const currentNote = notes[noteIndex];
        this.playShehnaiTone(currentNote.f, currentNote.d);
        noteIndex = (noteIndex + 1) % notes.length;
      };

      playNext();
      // Schedule subsequent notes
      this.synthInterval = window.setInterval(playNext, 1800);
    } catch (e) {
      console.warn("Could not start Web Audio synth", e);
    }
  }

  private playShehnaiTone(freq: number, durationSec: number) {
    if (!this.audioCtx || !this.synthGainNode) return;

    const osc = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    const noteGain = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    // Shehnai reedy timbre: Sawtooth with slight vibrato and bandpass filter
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

    // Warm sub-harmonic
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(freq * 0.5, this.audioCtx.currentTime);

    // Vibrato LFO
    const lfo = this.audioCtx.createOscillator();
    const lfoGain = this.audioCtx.createGain();
    lfo.frequency.value = 5.2; // 5Hz vibrato
    lfoGain.gain.value = freq * 0.015; // gentle pitch modulation
    lfo.connect(osc.frequency);
    lfo.start();

    // Filter to simulate reedy shehnai acoustic resonance
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq * 1.8, this.audioCtx.currentTime);
    filter.Q.value = 3.5;

    // Envelope: slow swell and smooth release
    const now = this.audioCtx.currentTime;
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.linearRampToValueAtTime(0.35, now + 0.3);
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + durationSec);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.synthGainNode);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + durationSec);
    osc2.stop(now + durationSec);
    lfo.stop(now + durationSec);
  }

  private startTanpuraDrone() {
    if (!this.audioCtx || !this.synthGainNode) return;
    try {
      const droneOsc = this.audioCtx.createOscillator();
      const droneGain = this.audioCtx.createGain();
      droneOsc.type = "sine";
      droneOsc.frequency.setValueAtTime(138.59, this.audioCtx.currentTime); // C#3 root drone
      droneGain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);

      droneOsc.connect(droneGain);
      droneGain.connect(this.synthGainNode);
      droneOsc.start();
    } catch {
      // Ignore drone errors
    }
  }

  private stopSynthMelody() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }
}

export const audioManager = WeddingAudioManager.getInstance();
