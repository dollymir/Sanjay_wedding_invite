import React from 'react';
import { weddingConfig } from '../data/weddingConfig';
import { ToranBorder, DiyaIcon } from '../components/CulturalIcons';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Calendar, MapPin, /* MessageSquareHeart, */ Heart, Sparkles, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onSaveToCalendar: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSaveToCalendar }) => {
  const { couple } = weddingConfig;

  return (
    <section id="hero" className="relative pt-24 pb-16 sm:pt-28 sm:pb-24 overflow-hidden">
      {/* Top Auspicious Toran Garland */}
      <div className="w-full flex justify-center mb-6 px-4">
        <ToranBorder className="w-full max-w-4xl h-8 text-gold drop-shadow-sm" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Sanskrit Inscription with Diya Accents */}
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <DiyaIcon className="w-6 h-6 text-saffron hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="font-hindi text-base sm:text-xl text-maroon font-bold tracking-widest drop-shadow-sm">
              ॥ श्री गणेशाय नमः ॥
            </span>
            <span className="text-[11px] sm:text-xs font-serif italic text-burgundy/80 font-medium tracking-wide">
              शुभ विवाह आमंत्रण • Groom&apos;s Family Invitation
            </span>
          </div>
          <DiyaIcon className="w-6 h-6 text-saffron hidden sm:block" />
        </div>

        {/* Main Title & Couple Names */}
        <div className="my-4">
          <p className="text-xs sm:text-sm font-display tracking-[0.25em] text-burgundy uppercase font-semibold mb-2">
            WE INVITE YOU TO CELEBRATE THE WEDDING OF
          </p>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-maroon tracking-wider drop-shadow-sm flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
            <span>SANJAY</span>
            <span className="font-script text-4xl sm:text-6xl text-rani my-[-10px] sm:my-0 flex items-center justify-center">
              &amp;
            </span>
            <span>SIMRAN</span>
          </h1>

          <div className="flex items-center justify-center gap-4 my-4">
            <span className="h-0.5 w-16 sm:w-28 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="p-1 rounded-full bg-gold/20 border border-gold/40">
              <Heart className="w-4 h-4 text-rani fill-rani animate-pulse" />
            </div>
            <span className="h-0.5 w-16 sm:w-28 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <h2 className="font-serif italic text-lg sm:text-2xl md:text-3xl text-burgundy font-semibold max-w-2xl mx-auto leading-relaxed">
            &ldquo;{couple.tagline}&rdquo;
          </h2>

          <p className="font-sans text-xs sm:text-base text-burgundy/80 max-w-2xl mx-auto mt-3 leading-relaxed">
            {couple.welcomeMessage}
          </p>
        </div>

        {/* Prominent Dates & Venue Summary Banner */}
        <div className="my-8 inline-block">
          <div className="px-6 sm:px-10 py-3.5 rounded-2xl bg-gradient-to-r from-maroon via-burgundy to-maroon text-gold-light border-2 border-gold/60 shadow-royal">
            
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-ivory/90 mt-1 font-sans">
              <MapPin className="w-3.5 h-3.5 text-saffron" />
              <span>Ahmedabad , Gujarat</span>
            </div>
          </div>
        </div>

        {/* Couple Portraits Display */}
        <div className="my-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Sanjay (Groom) Photo Card */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[280px]">
                {/* Decorative Arch Ribbon */}
                
                <ImagePlaceholder
                  src={couple.groom.photo}
                  alt="Sanjay - The Groom"
                  caption="Sanjay"
                  personType="sanjay"
                  aspectRatio="portrait"
                  className="arch-card shadow-royal border-4 border-gold"
                />
              </div>
              <p className="font-display text-base font-bold text-maroon mt-3 tracking-wider">
                SANJAY
              </p>
              <p className="text-xs font-serif italic text-burgundy/80 max-w-xs px-2 mt-1">
                {couple.groom.bio}
              </p>
            </div>

            {/* Simran (Bride) Photo Card */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[280px]">
                {/* Decorative Arch Ribbon */}
                
                <ImagePlaceholder
                  src={couple.bride.photo}
                  alt="Simran - The Bride"
                  caption="Simran"
                  personType="simran"
                  aspectRatio="portrait"
                  className="arch-card shadow-royal border-4 border-gold"
                />
              </div>
              <p className="font-display text-base font-bold text-maroon mt-3 tracking-wider">
                SIMRAN
              </p>
              <p className="text-xs font-serif italic text-burgundy/80 max-w-xs px-2 mt-1">
                {couple.bride.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onSaveToCalendar}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-maroon hover:bg-maroon-dark text-gold-light text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-gold hover:shadow-gold-lg transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-saffron" />
            <span>Save to Calendar (.ics)</span>
          </button>

          <a
            href="#events"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ivory-light hover:bg-ivory border border-gold/60 text-burgundy text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-sm transition-all hover:border-gold"
          >
            <Sparkles className="w-4 h-4 text-rani" />
            <span>Explore 9 Events</span>
          </a>

          {/* <a
            href="#guestbook"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rani hover:bg-rani-dark text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquareHeart className="w-4 h-4" />
            <span>A Note for Sanjay</span>
          </a> */}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center justify-center text-burgundy/60 animate-bounce">
          <span className="text-[10px] uppercase font-display tracking-widest font-semibold mb-1">
            Scroll to Explore
          </span>
          <ChevronDown className="w-4 h-4 text-gold-dark" />
        </div>
      </div>
    </section>
  );
};
