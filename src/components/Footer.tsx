import React, { useState } from 'react';
import { weddingConfig } from '../data/weddingConfig';
import { Heart, ArrowUp, Share2, Copy, Check, MapPin, Calendar } from 'lucide-react';
import { GaneshaIcon } from './CulturalIcons';

interface FooterProps {
  onShareWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onShareWhatsApp }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#4A152B] via-[#350E1F] to-[#250915] text-ivory py-16 border-t-4 border-gold relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Lord Ganesha Invocation */}
        <div className="flex justify-center mb-4">
          <div className="p-3.5 rounded-full bg-gold/20 border-2 border-gold/40 shadow-md">
            <GaneshaIcon className="w-12 h-12 text-gold-light drop-shadow-sm" />
          </div>
        </div>

        <p className="font-hindi text-gold-light text-lg sm:text-xl tracking-widest font-bold drop-shadow-sm">
          ॥ शुभ विवाह ॥
        </p>

        {/* Couple Monogram & Names */}
        <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold-light tracking-wider my-3 drop-shadow-md">
          SANJAY &amp; SIMRAN
        </h3>

        <div className="flex items-center justify-center gap-3 my-2 text-gold-light text-xs sm:text-sm font-display tracking-widest uppercase font-semibold">
          <Calendar className="w-4 h-4 text-saffron drop-shadow" />
          <span>3 &amp; 4 January 2027</span>
          <span className="text-gold">•</span>
          <MapPin className="w-4 h-4 text-saffron drop-shadow" />
          <span>Ahmedabad, Gujarat</span>
        </div>

        <p className="font-serif italic text-ivory text-base sm:text-lg max-w-xl mx-auto my-4 font-medium drop-shadow-sm">
          &ldquo;Two Hearts. Two Families. One Beautiful Beginning.&rdquo;
        </p>

        <p className="text-xs sm:text-sm text-gold-light font-sans font-semibold tracking-wider uppercase mb-8 drop-shadow-sm">
          Officially Invited with Love &amp; Blessings from the Groom&apos;s Family
        </p>

        {/* Quick Social & Link Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {/* <button
            onClick={onShareWhatsApp}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald hover:bg-emerald-dark text-white text-xs font-bold tracking-wider transition-all shadow-md hover:shadow-lg"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Invitation via WhatsApp</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5A1C36] hover:bg-[#6D2241] border-2 border-gold text-gold-light text-xs font-bold tracking-wider transition-all shadow-md hover:border-gold-light"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-light" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-saffron" />
                <span>Copy Invitation Link</span>
              </>
            )}
          </button> */}

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gold hover:bg-gold-light text-burgundy text-xs font-display font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Bottom Credits & Hashtag */}
        <div className="pt-8 border-t-2 border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-sm sm:text-base font-bold text-gold-light tracking-wider drop-shadow-sm">
            {weddingConfig.couple.hashtag}
          </p>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-sans text-ivory font-medium">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-rani fill-rani mx-0.5 animate-pulse" />
            <span>for Sanjay &amp; Simran Wedding Celebrations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
