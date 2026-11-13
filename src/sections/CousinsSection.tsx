import React from 'react';
import { weddingConfig } from '../data/weddingConfig';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PartyPopper, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ToranBorder } from '../components/CulturalIcons';

export const CousinsSection: React.FC = () => {
  const { cousinsInvitation } = weddingConfig;

  const triggerCelebrationConfetti = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#E85D8F', '#F4A340', '#D8B56D', '#801F3D', '#24765B'],
      });
    } catch {
      // Fallback
    }
  };

  return (
    <section id="cousins" className="py-20 bg-gradient-to-b from-ivory via-gold/10 to-ivory relative overflow-hidden">
      {/* Top Auspicious Floral Toran */}
      <div className="w-full flex justify-center mb-8 px-4">
        <ToranBorder className="w-full max-w-4xl h-8 text-gold drop-shadow-sm" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/15 border border-saffron/40 text-burgundy font-medium text-xs tracking-widest uppercase mb-3">
          <PartyPopper className="w-4 h-4 text-saffron" />
          The Groom&apos;s Cousin Brigade
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-black text-maroon tracking-wider drop-shadow-sm">
          {cousinsInvitation.heading}
        </h2>

        <p className="font-serif italic text-base sm:text-lg text-burgundy/90 mt-2 max-w-xl mx-auto">
          {cousinsInvitation.subheading}
        </p>

        {/* Central Cousins Letter Card */}
        <div className="my-12 max-w-3xl mx-auto rounded-3xl bg-card-gradient border-4 border-gold shadow-royal p-8 sm:p-12 relative text-left">
          {/* Decorative Corner Stars */}
          <div className="absolute top-3 left-4 text-gold text-lg">✦</div>
          <div className="absolute top-3 right-4 text-gold text-lg">✦</div>
          <div className="absolute bottom-3 left-4 text-gold text-lg">✦</div>
          <div className="absolute bottom-3 right-4 text-gold text-lg">✦</div>

          <div className="space-y-4 font-serif text-base sm:text-lg text-burgundy leading-relaxed">
            <p className="font-bold text-maroon text-lg sm:text-xl font-display">
              Dear Family &amp; Friends,
            </p>

            <p className="italic">
              The celebrations are incomplete without your presence!
            </p>

            <p>
              With excitement in our hearts and smiles on our faces, we, the cousins of Sanjay, warmly invite you to join us in celebrating this beautiful new beginning.
            </p>

            <p>
              Come bless the couple, enjoy every celebration, dance with us, laugh with us and make memories that will last forever.
            </p>

            <p className="italic font-semibold text-maroon">
              Your presence will make our celebrations even more special!
            </p>

            <div className="pt-4 flex flex-col items-end">
              <span className="font-script text-2xl sm:text-3xl text-maroon font-bold">
                With lots of love,
              </span>
              <span className="font-display text-base sm:text-lg font-black text-maroon tracking-wider mt-1 flex items-center gap-2">
                <span>{cousinsInvitation.signOff}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Cousins Group & Individual Portraits Grid */}
        <div className="my-10 max-w-5xl mx-auto">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs font-display uppercase tracking-widest text-burgundy/70 font-bold">
              Meet the Cousin Squad
            </span>
            <span className="h-px w-12 bg-gold" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {cousinsInvitation.cousinsList.map((cousin, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <ImagePlaceholder
                  src={cousin.photo}
                  alt={cousin.name}
                  caption={cousin.nickname}
                  personType="cousins"
                  aspectRatio="square"
                  className="rounded-2xl border-2 border-gold/40 shadow-md"
                />
                <h4 className="font-display text-sm font-bold text-maroon mt-2">
                  {cousin.name}
                </h4>
                <p className="text-[11px] text-burgundy/70 font-serif italic">
                  {cousin.nickname}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Grand Final Callout: "SEE YOU AT THE WEDDING!" with Confetti Trigger */}
        <div className="my-12">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-saffron via-rani to-maroon shadow-gold">
            <div className="px-8 sm:px-14 py-4 rounded-full bg-ivory text-maroon flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-saffron animate-spin-slow" />
              <h3 className="font-display text-xl sm:text-3xl font-black tracking-widest uppercase">
                {cousinsInvitation.seeYouText}
              </h3>
              <Sparkles className="w-5 h-5 text-rani animate-spin-slow" />
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={triggerCelebrationConfetti}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-rani to-maroon text-white text-xs font-display font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <PartyPopper className="w-4 h-4" />
              <span>Celebrate With Confetti! 🎊</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
