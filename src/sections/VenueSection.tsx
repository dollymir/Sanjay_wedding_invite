import React, { useState } from 'react';
import { weddingConfig } from '../data/weddingConfig';
import { MapPin, Navigation, Copy, Check, Car, Sparkles, Phone, ExternalLink } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const { mainVenue, contact } = weddingConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(mainVenue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="py-20 bg-ivory relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-burgundy font-medium text-xs tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-maroon" />
            Celebration Destination
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-maroon tracking-wider drop-shadow-sm">
            WEDDING VENUE &amp; LOCATION
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-burgundy/90 mt-2">
            Where moments turn into milestones and two blessed families celebrate under one starlit roof.
          </p>
        </div>

        {/* Main Venue Card */}
        <div className="rounded-3xl bg-card-gradient border-2 border-gold/50 shadow-royal overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Col: Venue Details & Directions (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-maroon/10 border border-maroon/20 text-maroon text-xs font-display font-bold tracking-wider uppercase mb-3">
                  Grand Wedding Destination
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-maroon mb-2">
                  {mainVenue.name}
                </h3>

                <p className="text-sm sm:text-base text-burgundy/80 font-sans flex items-start gap-2 mb-6">
                  <MapPin className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                  <span>{mainVenue.fullAddress}</span>
                </p>

                {/* Amenities / Information Points */}
                <div className="space-y-4 my-6">
                  <div className="p-4 rounded-2xl bg-ivory border border-gold/30 flex items-start gap-3">
                    <Car className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider text-burgundy">
                        Parking &amp; Valet Service
                      </h4>
                      <p className="text-xs text-burgundy/80 mt-0.5">
                        {mainVenue.parkingInfo}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-ivory border border-gold/30 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-rani shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider text-burgundy">
                        Prominent Landmark
                      </h4>
                      <p className="text-xs text-burgundy/80 mt-0.5">
                        {mainVenue.landmark}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-gold/30 flex flex-wrap items-center gap-3">
                <a
                  href={mainVenue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-maroon hover:bg-maroon-dark text-gold-light text-xs sm:text-sm font-display font-bold tracking-wider uppercase shadow-gold hover:shadow-gold-lg transition-all transform hover:-translate-y-0.5"
                >
                  <Navigation className="w-4 h-4 text-saffron" />
                  <span>Get Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ivory hover:bg-ivory-dark border border-gold/50 text-burgundy text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald" />
                      <span className="text-emerald font-semibold">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-maroon" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Col: Interactive Visual Map Preview Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-ivory-dark to-gold/20 p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold/40">
              <div className="rounded-2xl border-2 border-gold/50 overflow-hidden shadow-lg bg-ivory relative group">
                {/* Visual Map Header */}
                <div className="p-4 bg-maroon text-gold-light flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-saffron" />
                    <span className="font-display font-bold text-xs uppercase tracking-wider">
                      Google Maps Preview
                    </span>
                  </div>
                  <span className="text-[10px] text-ivory/80 font-mono">Live Navigation</span>
                </div>

                {/* Map Graphic Preview with Interactive Pin */}
                <a
                  href={mainVenue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[4/3] bg-gradient-to-b from-[#e8ece9] to-[#d6ded8] overflow-hidden"
                >
                  {/* Grid lines simulating map streets */}
                  <svg className="w-full h-full opacity-40" viewBox="0 0 400 300">
                    <path d="M0 60 Q200 80 400 60 M0 150 Q200 130 400 150 M0 240 Q200 250 400 240" stroke="#a3b899" strokeWidth="6" fill="none" />
                    <path d="M80 0 Q100 150 80 300 M200 0 Q220 150 200 300 M320 0 Q300 150 320 300" stroke="#ffffff" strokeWidth="8" fill="none" />
                    <circle cx="200" cy="150" r="45" fill="#38A180" opacity="0.15" />
                  </svg>

                  {/* Pulsing Pin in Center */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="p-3 rounded-full bg-maroon text-gold-light shadow-xl border-2 border-gold animate-bounce">
                      <MapPin className="w-6 h-6 fill-saffron text-maroon" />
                    </div>
                    <div className="mt-2 px-3 py-1 rounded-full bg-burgundy/90 text-gold-light text-xs font-display font-bold shadow-md">
                      Ringing Bells
                    </div>
                  </div>

                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-white/90 text-[10px] text-burgundy font-medium shadow-sm">
                    Click to Open Maps
                  </div>
                </a>
              </div>

              {/* Groom's Family Hospitality Contacts */}
              <div className="mt-6 pt-6 border-t border-gold/30">
                <span className="text-[11px] font-display font-bold uppercase tracking-widest text-burgundy/70 block mb-2">
                  Hospitality &amp; Guest Coordination
                </span>
                <div className="space-y-2">
                  {contact.groomFamilyRsvp.map((rsvp, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-ivory/80 border border-gold/20"
                    >
                      <div>
                        <p className="font-display font-semibold text-burgundy">{rsvp.name}</p>
                        <p className="text-[10px] text-maroon/70 font-serif italic">{rsvp.relation}</p>
                      </div>
                      <a
                        href={`tel:${rsvp.phone}`}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold/20 text-burgundy hover:bg-maroon hover:text-gold-light transition-colors font-mono font-medium"
                      >
                        <Phone className="w-3 h-3 text-saffron" />
                        <span>{rsvp.phone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
