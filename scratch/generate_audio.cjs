const fs = require('fs');
const path = require('path');

// Generate a valid 44100Hz 16-bit mono PCM WAV file containing an auspicious Indian wedding chime/melody
const sampleRate = 44100;
const durationSec = 12; // 12-second loop
const numSamples = sampleRate * durationSec;
const bytesPerSample = 2;
const blockAlign = bytesPerSample;
const byteRate = sampleRate * blockAlign;
const dataSize = numSamples * blockAlign;
const buffer = Buffer.alloc(44 + dataSize);

// RIFF header
buffer.write('RIFF', 0);
buffer.writeUInt32LE(36 + dataSize, 4);
buffer.write('WAVE', 8);

// fmt chunk
buffer.write('fmt ', 12);
buffer.writeUInt32LE(16, 16); // subchunk size
buffer.writeUInt16LE(1, 20); // PCM
buffer.writeUInt16LE(1, 22); // Mono
buffer.writeUInt32LE(sampleRate, 24);
buffer.writeUInt32LE(byteRate, 28);
buffer.writeUInt16LE(blockAlign, 32);
buffer.writeUInt16LE(16, 34); // 16-bit

// data chunk
buffer.write('data', 36);
buffer.writeUInt32LE(dataSize, 40);

// Auspicious notes frequencies (Raag Bilawal / Yaman notes: Sa, Re, Ga, Pa, Dha, Sa)
const notes = [
  277.18, 311.13, 349.23, 415.30, 466.16, 554.37, 466.16, 415.30, 349.23, 311.13, 277.18
];
const noteDuration = durationSec / notes.length;

let offset = 44;
for (let i = 0; i < numSamples; i++) {
  const t = i / sampleRate;
  const noteIdx = Math.floor(t / noteDuration) % notes.length;
  const freq = notes[noteIdx];
  const noteTime = t % noteDuration;

  // Envelope: smooth attack & decay
  const envelope = Math.sin((noteTime / noteDuration) * Math.PI);

  // Shehnai-like reed harmonics (fundamental + 2nd + 3rd harmonic with subtle vibrato)
  const vibrato = 1 + 0.015 * Math.sin(2 * Math.PI * 5 * t);
  const phase = 2 * Math.PI * freq * vibrato * t;
  const dronePhase = 2 * Math.PI * 138.59 * t; // Tanpura root drone

  const shehnai = 0.5 * Math.sin(phase) + 0.25 * Math.sin(2 * phase) + 0.15 * Math.sin(3 * phase);
  const drone = 0.15 * Math.sin(dronePhase);

  const sampleVal = (shehnai * envelope + drone) * 0.35;
  const intVal = Math.max(-32767, Math.min(32767, Math.floor(sampleVal * 32767)));
  buffer.writeInt16LE(intVal, offset);
  offset += 2;
}

const outDir = path.join(__dirname, '..', 'public', 'assets', 'music');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
const outPath = path.join(outDir, 'wedding-song.mp3');
fs.writeFileSync(outPath, buffer);
console.log('Audio file generated successfully at:', outPath);
