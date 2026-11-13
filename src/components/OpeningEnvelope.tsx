import React, { useState } from 'react';
import { GaneshaIcon, ToranBorder } from './CulturalIcons';
import { audioManager } from '../utils/audioPlayer';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OpeningEnvelopeProps {
  onOpenComplete: () => void;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({ onOpenComplete }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenInvitation = async () => {
    if (isOpening || isOpened) return;
    setIsOpening(true);

    // 1. Play background wedding music upon user click (browser safe)
    try {
      await audioManager.play();
    } catch (e) {
      console.warn("Could not start audio on envelope open", e);
    }

    // 2. Confetti celebratory burst
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#D8B56D', '#801F3D', '#E85D8F', '#F4A340', '#FFF6E9'],
      });
    } catch {
      // Confetti fallback
    }

    // 3. Complete opening transition
    setTimeout(() => {
      setIsOpened(true);
      setTimeout(() => {
        onOpenComplete();
      }, 700);
    }, 1200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-burgundy via-maroon to-plum transition-all duration-700 ${
        isOpened ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background Subtle Floating Mandalas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border-8 border-gold" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border-8 border-gold" />
      </div>

      {/* Main Royal Envelope / Invitation Card Container */}
      <div className="relative w-full max-w-lg mx-auto">
        {/* Decorative Toran on Top */}
        <div className="absolute -top-6 left-0 right-0 z-20 flex justify-center">
          <ToranBorder className="w-full max-w-md h-8 text-gold drop-shadow-md" />
        </div>

        {/* Envelope Outer Shell */}
        <div
          className={`relative rounded-3xl bg-ivory border-4 border-gold shadow-2xl p-6 sm:p-10 text-center transform transition-all duration-1000 ${
            isOpening ? 'scale-95 shadow-gold-lg' : 'scale-100 hover:shadow-gold'
          }`}
        >
          {/* Top Auspicious Invocation */}
          <div className="mb-4">
            <p className="font-hindi text-lg sm:text-2xl text-maroon font-bold tracking-widest drop-shadow-sm">
              ॥ श्री गणेशाय नमः ॥
            </p>
            <div className="flex justify-center my-3">
              <div className="p-3.5 rounded-full bg-gradient-to-br from-ivory to-gold/20 border-2 border-gold/40 shadow-inner">
                <GaneshaIcon className="w-16 h-16 sm:w-20 sm:h-20 text-maroon animate-pulse-glow" />
              </div>
            </div>
            <p className="font-serif italic text-burgundy text-sm sm:text-base font-semibold">
              With the blessings of Lord Ganesha
            </p>
          </div>

          {/* Invitation Text */}
          <div className="my-6 space-y-2">
            <p className="font-serif text-sm sm:text-base text-burgundy/90 uppercase tracking-widest font-semibold">
              Together with our families,
              <br />
              we invite you to celebrate the wedding of
            </p>

            <div className="py-3">
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-maroon tracking-wider drop-shadow-sm">
                SANJAY
              </h1>
              <div className="flex items-center justify-center gap-3 my-1">
                <span className="h-0.5 w-12 bg-gold" />
                <span className="font-script text-3xl text-rani">&amp;</span>
                <span className="h-0.5 w-12 bg-gold" />
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-maroon tracking-wider drop-shadow-sm">
                SIMRAN
              </h1>
            </div>

            <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-maroon via-burgundy to-maroon text-gold-light border border-gold/40 shadow-md">
              <p className="font-display text-xs sm:text-sm font-bold tracking-widest uppercase">
                 4 JANUARY 2027
              </p>
            </div>

            <p className="text-xs text-burgundy/80 font-medium tracking-wider pt-2">
              An Auspicious Union from the Groom&apos;s Family
            </p>
          </div>

          {/* Opening Envelope Wax Seal / Button */}
          <div className="mt-8 pt-4 border-t border-gold/30">
            <button
              onClick={handleOpenInvitation}
              disabled={isOpening}
              className={`group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-maroon via-rani-dark to-maroon text-gold-light font-display text-sm sm:text-base font-bold tracking-widest uppercase shadow-gold hover:shadow-gold-lg border border-gold/50 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                isOpening ? 'opacity-80 cursor-wait' : ''
              }`}
            >
              {/* Wax Seal Icon / Heart Pulse */}
              <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center border border-gold/40">
                <Heart className="w-3.5 h-3.5 text-gold-light fill-gold-light group-hover:scale-110 transition-transform" />
              </div>

              <span>{isOpening ? 'Opening Invitation...' : 'OPEN WEDDING INVITATION'}</span>

              <Sparkles className="w-4 h-4 text-gold-light animate-spin-slow" />
            </button>

            {/* Music Hint
            <div className="mt-3 flex items-center justify-center gap-2 text-burgundy/70 text-[11px] font-sans">
              <Volume2 className="w-3.5 h-3.5 text-saffron" />
              <Music className="w-3.5 h-3.5 text-rani animate-bounce" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
