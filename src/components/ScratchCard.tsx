import React, { useRef, useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Eye, CheckCircle2, Heart } from 'lucide-react';
import { GaneshaIcon } from './CulturalIcons';

interface ScratchCardProps {
  onRevealComplete?: () => void;
}

export const ScratchCard: React.FC<ScratchCardProps> = ({ onRevealComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [percentScratched, setPercentScratched] = useState(0);
  const [isScratching, setIsScratching] = useState(false);
  const isRevealedRef = useRef(false);

  // Initialize Canvas with Gold Foil & Floral Indian Motif
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    // Luxury Royal Maroon to Gold Gradient Foil
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#571C35'); // Deep Burgundy
    grad.addColorStop(0.35, '#801F3D'); // Royal Maroon
    grad.addColorStop(0.7, '#9F7E39'); // Gold Dark
    grad.addColorStop(1, '#D8B56D'); // Champagne Gold

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Draw ornate decorative border on canvas
    ctx.strokeStyle = '#F4E3B5';
    ctx.lineWidth = 3;
    ctx.strokeRect(12, 12, width - 24, height - 24);

    ctx.strokeStyle = '#D8B56D';
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 4]);
    ctx.strokeRect(18, 18, width - 36, height - 36);
    ctx.setLineDash([]);

    // Draw Subtle Gold Floral / Mandala Circles
    ctx.fillStyle = 'rgba(216, 181, 109, 0.12)';
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.45, 0, Math.PI * 2);
    ctx.fill();

    // Corner decorative flourishes
    const drawCorner = (x: number, y: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.strokeStyle = '#F4E3B5';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI / 2);
      ctx.stroke();
      ctx.restore();
    };
    drawCorner(20, 20, 0);
    drawCorner(width - 20, 20, Math.PI / 2);
    drawCorner(width - 20, height - 20, Math.PI);
    drawCorner(20, height - 20, (Math.PI * 3) / 2);

    // Text on Scratch Surface
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const maxWidth = width - 48;

    const fillFittedText = (
      text: string,
      targetY: number,
      maxAllowedWidth: number,
      initialFontSize: number,
      fontDeclaration: (size: number) => string,
      color: string,
      minFontSize = 10
    ) => {
      let size = initialFontSize;
      ctx.font = fontDeclaration(size);
      while (ctx.measureText(text).width > maxAllowedWidth && size > minFontSize) {
        size -= 1;
        ctx.font = fontDeclaration(size);
      }
      ctx.fillStyle = color;
      ctx.fillText(text, width / 2, targetY);
    };

    // Sanskrit Shloka snippet
    fillFittedText(
      '॥ शुभ लग्न मुहूर्त ॥',
      height * 0.20,
      maxWidth,
      width < 400 ? 13 : 15,
      (s) => `600 ${s}px "Rozha One", serif`,
      '#F4E3B5'
    );

    // Headline (Responsive: split onto 2 lines if mobile, or single line if wide enough)
    const isMobile = width < 480;

    if (isMobile) {
      fillFittedText(
        'SOMETHING BEAUTIFUL',
        height * 0.38,
        maxWidth,
        18,
        (s) => `bold ${s}px "Cinzel", serif`,
        '#FFF6E9'
      );
      fillFittedText(
        'AWAITS...',
        height * 0.45,
        maxWidth,
        18,
        (s) => `bold ${s}px "Cinzel", serif`,
        '#FFF6E9'
      );
    } else {
      fillFittedText(
        'SOMETHING BEAUTIFUL AWAITS...',
        height * 0.42,
        maxWidth,
        22,
        (s) => `bold ${s}px "Cinzel", serif`,
        '#FFF6E9'
      );
    }

    // Call to action
    if (isMobile) {
      fillFittedText(
        'Scratch here to reveal',
        height * 0.59,
        maxWidth,
        13,
        (s) => `600 ${s}px "Montserrat", sans-serif`,
        '#F4E3B5'
      );
      fillFittedText(
        'our wedding dates!',
        height * 0.65,
        maxWidth,
        13,
        (s) => `600 ${s}px "Montserrat", sans-serif`,
        '#F4E3B5'
      );
    } else {
      fillFittedText(
        '✨ Scratch here to reveal our wedding dates! ✨',
        height * 0.60,
        maxWidth,
        15,
        (s) => `500 ${s}px "Montserrat", sans-serif`,
        '#F4E3B5'
      );
    }

    // Little finger/sparkle indicator
    fillFittedText(
      '(Swipe with finger or drag with mouse)',
      height * 0.77,
      maxWidth,
      isMobile ? 11 : 13,
      (s) => `${s}px "Montserrat", sans-serif`,
      '#D8B56D'
    );
  }, []);

  useEffect(() => {
    initCanvas();

    if (document.fonts) {
      document.fonts.ready.then(() => {
        if (!isRevealedRef.current) {
          initCanvas();
        }
      });
    }

    const handleResize = () => {
      if (!isRevealedRef.current) {
        initCanvas();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  const triggerCelebration = useCallback(() => {
    if (isRevealedRef.current) return;
    isRevealedRef.current = true;
    setIsRevealed(true);
    setPercentScratched(100);

    // Clear entire canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    // Confetti explosion
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D8B56D', '#801F3D', '#E85D8F', '#F4A340', '#24765B'],
      });
    } catch {
      // Confetti fallback
    }

    if (onRevealComplete) {
      onRevealComplete();
    }
  }, [onRevealComplete]);

  // Check how much is scratched
  const calculateScratchedPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealedRef.current) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      // Sample a scaled down grid for high performance
      const w = canvas.width;
      const h = canvas.height;
      const step = 16;
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      let transparentPixels = 0;
      let totalSampled = 0;

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const index = (y * w + x) * 4;
          const alpha = data[index + 3];
          totalSampled++;
          if (alpha < 128) {
            transparentPixels++;
          }
        }
      }

      const percent = Math.round((transparentPixels / totalSampled) * 100);
      setPercentScratched(percent);

      // Auto reveal at >= 65%
      if (percent >= 65 && !isRevealedRef.current) {
        triggerCelebration();
      }
    } catch (e) {
      console.warn("Scratch calculation error", e);
    }
  }, [triggerCelebration]);

  // Scratch action at (x, y)
  const scratch = useCallback(
    (clientX: number, clientY: number) => {
      const canvas = canvasRef.current;
      if (!canvas || isRevealedRef.current) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const dpr = window.devicePixelRatio || 1;

      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      // Erase circle around brush
      ctx.arc(x * dpr, y * dpr, 28 * dpr, 0, Math.PI * 2);
      ctx.fill();

      // Additional soft feathering
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'black';
      ctx.fill();
      ctx.restore();

      calculateScratchedPercentage();
    },
    [calculateScratchedPercentage]
  );

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsScratching(true);
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isScratching) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsScratching(false);
  };

  // Touch Handlers for Mobile (with event.preventDefault to stop page scrolling while scratching)
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length > 0) {
      setIsScratching(true);
      const touch = e.touches[0];
      scratch(touch.clientX, touch.clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      scratch(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsScratching(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      {/* Scratch Header & Progress */}
      <div className="text-center mb-5">
        
        <h3 className="font-display text-xl sm:text-3xl text-maroon font-bold">
          Scratch to Reveal Our Wedding Dates
        </h3>
        <p className="text-xs sm:text-sm text-burgundy/80 font-sans mt-1">
          Rub across the card below or click &quot;Reveal Invitation&quot;
        </p>

        {/* Scratch Progress Bar */}
        {!isRevealed && (
          <div className="mt-3 max-w-xs mx-auto flex items-center gap-2">
            <div className="flex-1 bg-ivory-dark rounded-full h-2 overflow-hidden border border-gold/30">
              <div
                className="bg-gradient-to-r from-saffron to-rani h-full transition-all duration-150"
                style={{ width: `${percentScratched}%` }}
              />
            </div>
            <span className="text-[11px] font-semibold text-burgundy/70 w-8 text-right">
              {percentScratched}%
            </span>
          </div>
        )}
      </div>

      {/* Interactive Card Canvas & Revealed Card Container */}
      <div
        ref={containerRef}
        className="relative w-full min-h-[460px] sm:min-h-[490px] rounded-3xl shadow-royal overflow-hidden border-2 border-gold/60 bg-card-gradient select-none"
      >
        {/* UNDERNEATH LAYER: The Revealed Wedding Dates Card */}
        <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-between items-center text-center bg-gradient-to-b from-ivory-light via-ivory to-gold/15">
          {/* Top Sanskrit & Ganesha */}
          <div className="flex flex-col items-center">
            <GaneshaIcon className="w-10 h-10 sm:w-12 sm:h-12 text-maroon mb-1 drop-shadow-sm" />
            <p className="font-hindi text-maroon text-xs sm:text-sm tracking-wide font-bold">
              ॥ श्री गणेशाय नमः ॥
            </p>
            <div className="inline-block mt-1.5 sm:mt-2 px-3 sm:px-4 py-0.5 rounded-full bg-maroon/10 border border-maroon/25 text-maroon text-[10px] sm:text-[11px] font-bold tracking-widest uppercase">
              Save The Date
            </div>
          </div>

          {/* Couple Names */}
          <div className="my-auto py-2">
            <h2 className="font-display text-xl sm:text-4xl lg:text-5xl font-extrabold text-maroon tracking-wider flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
              <span>SANJAY</span>
              <span className="text-rani inline-block animate-pulse text-xl sm:text-4xl">❤️</span>
              <span>SIMRAN</span>
            </h2>
            <div className="flex items-center justify-center gap-3 my-2 sm:my-2.5">
              <span className="h-px w-8 sm:w-20 bg-gold" />
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rani fill-rani" />
              <span className="h-px w-8 sm:w-20 bg-gold" />
            </div>
            <p className="font-serif italic text-xs sm:text-xl text-burgundy font-semibold max-w-md mx-auto px-2">
              Two families, one celebration, a lifetime of togetherness.
            </p>
          </div>

          {/* Wedding Dates (Prominently displayed with generous padding and large typography) */}
          <div className="w-full pt-2.5 sm:pt-3 pb-2 border-t border-gold/40 flex justify-center">
            <div className="inline-block w-full max-w-md px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl bg-gradient-to-r from-maroon via-burgundy to-maroon text-gold-light shadow-royal border border-gold/50">
              <p className="font-display text-base sm:text-2xl font-black tracking-widest uppercase">
                 4 JANUARY 2027
              </p>
            </div>
          </div>
        </div>

        {/* TOP LAYER: HTML5 Canvas Scratch Overlay */}
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`absolute inset-0 w-full h-full cursor-pointer touch-none transition-opacity duration-700 ${
            isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />

        {/* Revealed Ribbon Badge when completed */}
        {isRevealed && (
          <div className="absolute top-3 right-3 animate-bounce">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald text-white text-xs font-semibold shadow-lg">
              <CheckCircle2 className="w-4 h-4" />
              <span>Revealed!</span>
            </div>
          </div>
        )}
      </div>

      {/* Alternative Reveal Button */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        {!isRevealed ? (
          <button
            onClick={triggerCelebration}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-maroon to-burgundy hover:from-burgundy hover:to-maroon text-gold-light font-display text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-gold hover:shadow-gold-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Eye className="w-4 h-4" />
            Reveal Invitation
          </button>
        ) : (
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-serif italic text-emerald font-semibold">
            <Sparkles className="w-4 h-4 text-saffron" />
            Wedding Dates revealed! Continue exploring our celebratory events below.
          </div>
        )}
      </div>
    </div>
  );
};
