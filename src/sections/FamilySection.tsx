import React from 'react';
import { weddingConfig } from '../data/weddingConfig';
import { KalashIcon, ToranBorder } from '../components/CulturalIcons';
import { Heart, Star, Users } from 'lucide-react';

export const FamilySection: React.FC = () => {
  const { families } = weddingConfig;
  const { groomFamily, brideFamily } = families;

  return (
    <section id="families" className="py-20 bg-gradient-to-b from-ivory via-ivory-light to-ivory relative overflow-hidden">
      {/* Background Indian Textile Motif Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-maroon/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-maroon tracking-wider drop-shadow-sm">
            {families.heading}
          </h2>

          <div className="flex items-center justify-center gap-4 my-4">
            <span className="h-0.5 w-16 bg-gold" />
            <KalashIcon className="w-8 h-8 text-gold drop-shadow-sm" />
            <span className="h-0.5 w-16 bg-gold" />
          </div>

          <p className="font-serif italic text-base sm:text-lg text-burgundy/90">
            A sacred confluence of two loving heritages, rooted in reverence, warmth and timeless cultural traditions.
          </p>
        </div>

        {/* PROMINENT SPECIAL FEATURE: Groom&apos;s Grandparents (Mandatory Highlight) */}
        <div className="mb-14">
          <div className="relative rounded-3xl bg-gradient-to-r from-maroon/10 via-gold/15 to-maroon/10 p-1 border-2 border-gold/60 shadow-royal">
            <div className="rounded-[22px] bg-card-gradient p-6 sm:p-10 text-center relative overflow-hidden">
              {/* Corner Traditional Flourishes */}
              <div className="absolute top-2 left-3 text-gold/40 text-lg">❖</div>
              <div className="absolute top-2 right-3 text-gold/40 text-lg">❖</div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-maroon text-gold-light text-xs font-display font-bold tracking-widest uppercase mb-4 shadow-sm">
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                Special Blessings from the Groom&apos;s Grandparents
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-maroon mb-2">
                Revered Grandparents of Sanjay
              </h3>

              <p className="font-serif italic text-burgundy text-sm sm:text-base max-w-2xl mx-auto mb-6">
                &ldquo;{groomFamily.grandparents.highlightText}&rdquo;
              </p>

              {/* Grandparents Portrait Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {/* Grandfather */}
                <div className="p-6 rounded-2xl bg-ivory border-2 border-gold/40 shadow-md flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-maroon to-burgundy border-2 border-gold flex items-center justify-center text-gold-light font-display text-2xl font-bold mb-3 shadow-inner">
                    दादा
                  </div>
                  <span className="text-xs font-display uppercase tracking-widest text-burgundy/70 font-semibold">
                    Beloved Grandfather
                  </span>
                  <h4 className="font-display text-lg sm:text-xl font-extrabold text-maroon mt-1">
                    {groomFamily.grandparents.grandfather}
                  </h4>
                  
                </div>

                {/* Grandmother */}
                <div className="p-6 rounded-2xl bg-ivory border-2 border-gold/40 shadow-md flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rani to-maroon border-2 border-gold flex items-center justify-center text-gold-light font-display text-2xl font-bold mb-3 shadow-inner">
                    दादी
                  </div>
                  <span className="text-xs font-display uppercase tracking-widest text-burgundy/70 font-semibold">
                    Beloved Grandmother
                  </span>
                  <h4 className="font-display text-lg sm:text-xl font-extrabold text-maroon mt-1">
                    {groomFamily.grandparents.grandmother}
                  </h4>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Families Grid (Groom's Family & Bride's Family) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* GROOM'S FAMILY (Sanjay) */}
          <div className="rounded-3xl bg-card-gradient border-2 border-gold/40 p-6 sm:p-10 shadow-royal relative">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold/30">
              <div className="w-12 h-12 rounded-2xl bg-maroon text-gold-light flex items-center justify-center font-display text-lg font-bold shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-display tracking-widest uppercase text-burgundy/70 font-bold block">
                  {groomFamily.title}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-maroon">
                  {groomFamily.familyName}
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {/* Parents of Sanjay */}
              <div className="p-5 rounded-2xl bg-ivory border border-gold/30 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-maroon">
                  <Heart className="w-4 h-4 text-rani fill-rani" />
                  <span className="text-xs font-display font-bold uppercase tracking-wider">
                    Loving Parents
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <div>
                    <span className="text-[11px] text-burgundy/60 uppercase font-semibold block">
                      Mother
                    </span>
                    <p className="font-display text-base sm:text-lg font-bold text-burgundy">
                      {groomFamily.parents.mother}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] text-burgundy/60 uppercase font-semibold block">
                      Father
                    </span>
                    <p className="font-display text-base sm:text-lg font-bold text-burgundy">
                      {groomFamily.parents.father}
                    </p>
                  </div>
                </div>
              </div>

              {/* Groom Profile */}
              <div className="p-5 rounded-2xl bg-ivory border border-gold/30 shadow-sm">
                <span className="text-xs font-display font-bold uppercase tracking-wider text-maroon block mb-1">
                  The Groom
                </span>
                <p className="font-display text-xl font-extrabold text-maroon">
                  Sanjay
                </p>
                <p className="font-serif italic text-xs sm:text-sm text-burgundy/80 mt-1">
                  {weddingConfig.couple.groom.bio}
                </p>
              </div>

              {/* Blessing Quote */}
              <div className="pt-2">
                <p className="font-serif italic text-center text-sm sm:text-base text-maroon/90 font-medium">
                  {groomFamily.blessingQuote}
                </p>
              </div>
            </div>
          </div>

          {/* BRIDE'S FAMILY (Simran) */}
          <div className="rounded-3xl bg-card-gradient border-2 border-gold/40 p-6 sm:p-10 shadow-royal relative">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold/30">
              <div className="w-12 h-12 rounded-2xl bg-rani-dark text-white flex items-center justify-center font-display text-lg font-bold shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-display tracking-widest uppercase text-burgundy/70 font-bold block">
                  {brideFamily.title}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-maroon">
                  {brideFamily.familyName}
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {/* Parents of Simran */}
              <div className="p-5 rounded-2xl bg-ivory border border-gold/30 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-rani-dark">
                  <Heart className="w-4 h-4 text-rani fill-rani" />
                  <span className="text-xs font-display font-bold uppercase tracking-wider">
                    Loving Parents
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  
                  <div>
                    <span className="text-[11px] text-burgundy/60 uppercase font-semibold block">
                      Mother
                    </span>
                    <p className="font-display text-base sm:text-lg font-bold text-burgundy">
                      {brideFamily.parents.mother}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] text-burgundy/60 uppercase font-semibold block">
                      Father
                    </span>
                    <p className="font-display text-base sm:text-lg font-bold text-burgundy">
                      {brideFamily.parents.father}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bride Profile */}
              <div className="p-5 rounded-2xl bg-ivory border border-gold/30 shadow-sm">
                <span className="text-xs font-display font-bold uppercase tracking-wider text-rani-dark block mb-1">
                  The Bride
                </span>
                <p className="font-display text-xl font-extrabold text-maroon">
                  Simran
                </p>
                <p className="font-serif italic text-xs sm:text-sm text-burgundy/80 mt-1">
                  {weddingConfig.couple.bride.bio}
                </p>
              </div>

              {/* Blessing Quote */}
              <div className="pt-2">
                <p className="font-serif italic text-center text-sm sm:text-base text-maroon/90 font-medium">
                  {brideFamily.blessingQuote}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Divider */}
        <div className="mt-14 flex justify-center">
          <ToranBorder className="w-full max-w-xl h-6 text-gold/60" />
        </div>
      </div>
    </section>
  );
};
