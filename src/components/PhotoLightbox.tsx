import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

export interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
  title?: string;
  personType?: 'sanjay' | 'simran' | 'couple' | 'cousins';
  iconType?: string;
}

interface PhotoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: LightboxItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && items.length > 1) {
        onNavigate((currentIndex + 1) % items.length);
      }
      if (e.key === 'ArrowLeft' && items.length > 1) {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-burgundy-dark/95 backdrop-blur-md p-4 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-ivory/10 hover:bg-ivory/20 text-gold-light transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      {items.length > 1 && (
        <button
          onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-ivory/10 hover:bg-ivory/20 text-gold-light transition-colors"
          aria-label="Previous Photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Button */}
      {items.length > 1 && (
        <button
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-ivory/10 hover:bg-ivory/20 text-gold-light transition-colors"
          aria-label="Next Photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Display */}
      <div className="max-w-2xl w-full flex flex-col items-center">
        <div className="w-full max-h-[75vh] flex justify-center">
          <div className="w-full max-w-md">
            <ImagePlaceholder
              src={currentItem.src}
              alt={currentItem.alt}
              caption={currentItem.caption}
              personType={currentItem.personType}
              iconType={currentItem.iconType}
              aspectRatio="portrait"
              className="max-h-[65vh] shadow-2xl border-4 border-gold"
            />
          </div>
        </div>

        {/* Caption & Title */}
        <div className="mt-4 text-center text-ivory max-w-lg">
          {currentItem.title && (
            <h4 className="font-display text-lg font-bold text-gold-light">
              {currentItem.title}
            </h4>
          )}
          {currentItem.caption && (
            <p className="font-serif italic text-sm text-ivory/90 mt-1">
              {currentItem.caption}
            </p>
          )}
          <p className="text-xs text-gold/70 mt-2 font-mono">
            {currentIndex + 1} of {items.length} • {currentItem.src.split('/').pop()}
          </p>
        </div>
      </div>
    </div>
  );
};
