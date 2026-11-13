import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music2 } from 'lucide-react';
import { audioManager } from '../utils/audioPlayer';

export const FloatingMusicControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [trackName, setTrackName] = useState('Mangalam Mangal Dhwani');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const unsubscribe = audioManager.subscribe((state) => {
      setIsPlaying(state.isPlaying);
      setIsMuted(state.isMuted);
      setTrackName(state.trackName);
    });
    return unsubscribe;
  }, []);

  return (
    <aside aria-label="Audio Controls" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Track Info & Controls Card */}
      {isExpanded && (
        <div className="mb-2 p-3 rounded-2xl bg-ivory/95 border border-gold/40 shadow-royal backdrop-blur-md w-64 text-left transition-all animate-fadeIn">
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gold/20">
            <div className="w-7 h-7 rounded-full bg-maroon text-gold-light flex items-center justify-center">
              <Music2 className="w-4 h-4 animate-spin-slow" />
            </div>
            <div className="overflow-hidden">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-burgundy truncate">
                {trackName}
              </p>
              <p className="text-[10px] text-maroon/70 italic font-serif">
                Auspicious Wedding Music
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <button
              onClick={() => audioManager.toggle()}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon text-gold-light text-xs font-medium hover:bg-maroon-dark transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>

            <button
              onClick={() => audioManager.toggleMute()}
              className="p-1.5 rounded-full hover:bg-gold/20 text-burgundy transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-burgundy/60" />
              ) : (
                <Volume2 className="w-4 h-4 text-emerald" />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Floating Main Equalizer Button */}
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
        className="group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-gradient-to-r from-maroon via-burgundy to-maroon text-gold-light border-2 border-gold shadow-gold hover:shadow-gold-lg transition-all transform hover:scale-105 active:scale-95"
        title="Background Wedding Music"
      >
        {/* Equalizer Waveform Bars */}
        <div className="flex items-end gap-0.5 h-4 w-4">
          <span
            className={`w-1 bg-gold-light rounded-full transition-all ${
              isPlaying && !isMuted ? 'h-3 animate-pulse' : 'h-1.5'
            }`}
          />
          <span
            className={`w-1 bg-rani-light rounded-full transition-all ${
              isPlaying && !isMuted ? 'h-4 animate-bounce' : 'h-2'
            }`}
          />
          <span
            className={`w-1 bg-saffron rounded-full transition-all ${
              isPlaying && !isMuted ? 'h-2.5 animate-pulse' : 'h-1.5'
            }`}
          />
        </div>

        <span className="text-xs font-display font-semibold tracking-wider hidden sm:inline">
          {isPlaying ? (isMuted ? 'MUTED' : 'MUSIC ON') : 'MUSIC OFF'}
        </span>

        {/* Quick Play/Pause trigger */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            audioManager.toggle();
          }}
          className="p-1 rounded-full bg-gold/20 hover:bg-gold/40 text-gold-light transition-colors"
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </div>
      </button>
    </aside>
  );
};
