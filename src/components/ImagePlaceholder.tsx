import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { GaneshaIcon, JhulelalIcon, MandapIcon, RingsIcon, ShehnaiDholIcon } from './CulturalIcons';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  personType?: 'sanjay' | 'simran' | 'couple' | 'cousins';
  iconType?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  caption,
  className = '',
  aspectRatio = 'portrait',
  personType = 'sanjay',
  iconType,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Aspect ratio classes
  const aspectClass =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'landscape'
      ? 'aspect-[16/10]'
      : 'aspect-[3/4] sm:aspect-[4/5]';

  // Determine silhouette icon & styling based on personType & event
  const renderPlaceholderGraphic = () => {
    if (iconType === 'baharan') {
      return <JhulelalIcon className="w-16 h-16 text-gold drop-shadow-md animate-pulse-glow" />;
    }
    if (iconType === 'ring') {
      return <RingsIcon className="w-16 h-16 text-gold drop-shadow-md" />;
    }
    if (iconType === 'wedding') {
      return <MandapIcon className="w-16 h-16 text-gold drop-shadow-md" />;
    }
    if (iconType === 'carnival' || iconType === 'bharat') {
      return <ShehnaiDholIcon className="w-16 h-16 text-gold drop-shadow-md" />;
    }

    if (personType === 'sanjay') {
      return (
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-gold/80" fill="currentColor">
          {/* Groom with royal Safa/Turban & Kalgi */}
          <path d="M42 16 Q50 6 58 16 Q68 22 66 32 Q50 28 34 32 Q32 22 42 16 Z" fill="#801F3D" />
          <path d="M50 8 L52 14 L48 14 Z" fill="#D8B56D" />
          {/* Face */}
          <ellipse cx="50" cy="40" rx="14" ry="16" fill="#D8B56D" opacity="0.3" />
          {/* Sherwani Royal Collar */}
          <path d="M30 68 L42 54 L58 54 L70 68 L76 94 L24 94 Z" fill="#801F3D" opacity="0.8" />
          <path d="M50 54 L50 94" stroke="#D8B56D" strokeWidth="2" />
        </svg>
      );
    }

    if (personType === 'simran') {
      return (
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-gold/80" fill="currentColor">
          {/* Bride with Maang Tikka & Bridal Chunri Veil */}
          <path d="M30 28 Q50 14 70 28 C76 44 74 74 68 88 L32 88 C26 74 24 44 30 28 Z" fill="#E85D8F" opacity="0.4" />
          <ellipse cx="50" cy="42" rx="13" ry="15" fill="#D8B56D" opacity="0.3" />
          {/* Maang Tikka */}
          <path d="M50 24 L50 34" stroke="#D8B56D" strokeWidth="2" />
          <circle cx="50" cy="36" r="2.5" fill="#801F3D" />
          {/* Bridal Lehenga Blouse & Dupatta drape */}
          <path d="M32 68 L44 56 L56 56 L68 68 L74 94 L26 94 Z" fill="#801F3D" opacity="0.8" />
        </svg>
      );
    }

    return <GaneshaIcon className="w-16 h-16 text-gold drop-shadow-md" />;
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border-2 border-gold/40 bg-gradient-to-br from-ivory via-ivory-dark to-gold/15 shadow-md transition-all duration-300 ${aspectClass} ${className}`}
    >
      {/* Real Image (if exists and loads) */}
      {!imageError && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover object-center transition-all duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      )}

      {/* Luxury Artistic Indian Portrait Placeholder when image is missing/not loaded */}
      {(imageError || !isLoaded) && (
        <div className="absolute inset-0 flex flex-col items-center justify-between p-6 text-center bg-gradient-to-b from-ivory-light via-ivory to-gold/20 select-none">
          {/* Ornate Indian Arch Frame on Placeholder */}
          <div className="w-full flex justify-between items-center text-gold/40 text-xs">
            <span>❖</span>
            <span className="font-hindi text-[11px] text-maroon/60">॥ शुभ विवाह ॥</span>
            <span>❖</span>
          </div>

          <div className="my-auto flex flex-col items-center">
            <div className="p-4 rounded-full bg-gradient-to-br from-ivory to-gold/20 border border-gold/40 shadow-inner mb-3 group-hover:scale-110 transition-transform">
              {renderPlaceholderGraphic()}
            </div>

            <p className="font-display font-bold text-sm sm:text-base text-maroon tracking-wider">
              {personType === 'sanjay'
                ? 'SANJAY'
                : personType === 'simran'
                ? 'SIMRAN'
                : personType === 'couple'
                ? 'SANJAY & SIMRAN'
                : 'COUSINS BRIGADE'}
            </p>

            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-[10px] sm:text-xs text-burgundy font-medium">
              <Camera className="w-3 h-3 text-maroon" />
              <span className="truncate max-w-[150px]">{src.split('/').pop()}</span>
            </div>
          </div>

          {/* Caption / Label at bottom */}
          {caption && (
            <p className="text-[11px] text-burgundy/80 font-serif italic line-clamp-2">
              {caption}
            </p>
          )}
        </div>
      )}

      {/* Ornate Gold Border Corners */}
      <div className="pointer-events-none absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-gold" />
      <div className="pointer-events-none absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-gold" />
      <div className="pointer-events-none absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-gold" />
      <div className="pointer-events-none absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-gold" />
    </div>
  );
};
