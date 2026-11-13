import React, { useState } from 'react';
import { weddingConfig, WeddingEvent } from '../data/weddingConfig';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  Sparkles,
  Info,
} from 'lucide-react';
import {
  DiyaIcon,
  GaneshaIcon,
  JhulelalIcon,
  MandapIcon,
  RingsIcon,
  ShehnaiDholIcon,
  ToranBorder,
} from '../components/CulturalIcons';

export const EventsTimelineSection: React.FC = () => {
  const [activeDayFilter, setActiveDayFilter] = useState<'all' | 'day1' | 'day2'>('all');

  const { events } = weddingConfig;

  const filteredEvents =
    activeDayFilter === 'all'
      ? events
      : events.filter((e) => e.day === activeDayFilter);

  const renderEventIcon = (iconType: WeddingEvent['iconType']) => {
    switch (iconType) {
      case 'janau':
        return <DiyaIcon className="w-8 h-8 text-saffron" />;
      case 'carnival':
        return <ShehnaiDholIcon className="w-8 h-8 text-rani" />;
      case 'baharan':
        return <JhulelalIcon className="w-8 h-8 text-gold" />;
      case 'ring':
        return <RingsIcon className="w-8 h-8 text-gold" />;
      case 'sathsod':
        return <DiyaIcon className="w-8 h-8 text-emerald" />;
      case 'dikh':
        return <DiyaIcon className="w-8 h-8 text-saffron" />;
      case 'bharat':
        return <ShehnaiDholIcon className="w-8 h-8 text-maroon" />;
      case 'wedding':
        return <MandapIcon className="w-8 h-8 text-burgundy" />;
      case 'reception':
        return <Sparkles className="w-8 h-8 text-plum" />;
      default:
        return <GaneshaIcon className="w-8 h-8 text-gold" />;
    }
  };

  return (
    <section id="events" className="py-20 bg-ivory relative overflow-hidden">
      {/* Decorative Floral Borders */}
      <div className="w-full flex justify-center mb-8 px-4">
        <ToranBorder className="w-full max-w-5xl h-8 text-gold/70" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-burgundy font-medium text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-saffron" />
            Complete Wedding Itinerary
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-maroon tracking-wider drop-shadow-sm">
            THE WEDDING CELEBRATIONS
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-burgundy/90 mt-2">
            Nine sacred, joyous and memorable ceremonies woven into two unforgettable days.
          </p>

          {/* Day Filter Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-ivory-dark border border-gold/40 shadow-sm">
            <button
              onClick={() => setActiveDayFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-display font-bold tracking-wider uppercase transition-all ${
                activeDayFilter === 'all'
                  ? 'bg-maroon text-gold-light shadow-md'
                  : 'text-burgundy hover:text-maroon'
              }`}
            >
              All 9 Events
            </button>
            <button
              onClick={() => setActiveDayFilter('day1')}
              className={`px-5 py-2 rounded-full text-xs font-display font-bold tracking-wider uppercase transition-all ${
                activeDayFilter === 'day1'
                  ? 'bg-maroon text-gold-light shadow-md'
                  : 'text-burgundy hover:text-maroon'
              }`}
            >
              Day 1 – 3 Jan
            </button>
            <button
              onClick={() => setActiveDayFilter('day2')}
              className={`px-5 py-2 rounded-full text-xs font-display font-bold tracking-wider uppercase transition-all ${
                activeDayFilter === 'day2'
                  ? 'bg-maroon text-gold-light shadow-md'
                  : 'text-burgundy hover:text-maroon'
              }`}
            >
              Day 2 – 4 Jan
            </button>
          </div>
        </div>

        {/* Day 1 Section Heading Banner (if Day 1 or All is shown) */}
        {(activeDayFilter === 'all' || activeDayFilter === 'day1') && (
          <div className="my-10 text-center">
            <div className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-saffron via-maroon to-saffron text-gold-light shadow-md">
              <span className="text-xs uppercase font-display tracking-widest text-gold-light/80 block">
                DAY 1 – 3 JANUARY 2027
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-black tracking-wider">
                THE CELEBRATIONS BEGIN
              </h3>
              <p className="text-xs font-serif italic text-ivory/90 mt-0.5">
                &ldquo;One day filled with rituals, traditions, music and happiness.&rdquo;
              </p>
            </div>
          </div>
        )}

        {/* Event Cards Flow */}
        <div className="space-y-12">
          {filteredEvents.map((evt) => {
            // Show Day 2 banner transition when viewing all events
            const showDay2Divider =
              activeDayFilter === 'all' &&
              evt.id === 'sathsod';

            return (
              <React.Fragment key={evt.id}>
                {showDay2Divider && (
                  <div className="my-14 text-center pt-8 border-t-2 border-gold/40">
                    <div className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-burgundy via-maroon to-burgundy text-gold-light shadow-md">
                      <span className="text-xs uppercase font-display tracking-widest text-gold-light/80 block">
                        DAY 2 – 4 JANUARY 2027
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-black tracking-wider">
                        THE WEDDING DAY
                      </h3>
                      <p className="text-xs font-serif italic text-ivory/90 mt-0.5">
                        &ldquo;A beautiful beginning to a lifetime of togetherness.&rdquo;
                      </p>
                    </div>
                  </div>
                )}

                {/* Individual Event Card */}
                <div className="relative rounded-3xl bg-card-gradient border-2 border-gold/40 shadow-royal overflow-hidden hover:border-gold transition-all duration-300">
                  {/* Top Color Accent Line */}
                  <div
                    className="h-2 w-full"
                    style={{ backgroundColor: evt.themeColor }}
                  />

                  <div className="p-6 sm:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left Side: Name, Time, Cultural Details (7 cols) */}
                      <div className="lg:col-span-7 flex flex-col justify-between h-full">
                        <div>
                          {/* Function Name & Cultural Icon */}
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2.5 rounded-2xl bg-ivory border border-gold/30 shadow-sm">
                              {renderEventIcon(evt.iconType)}
                            </div>
                            <div>
                              <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-maroon">
                                {evt.name}
                              </h4>
                              <p className="font-serif italic text-sm text-burgundy/80">
                                {evt.slogan}
                              </p>
                            </div>
                          </div>

                          {/* Date & Time Highlights */}
                          <div className="flex flex-wrap items-center gap-4 my-4 p-3.5 rounded-2xl bg-ivory border border-gold/25">
                            <div className="flex items-center gap-2 text-burgundy font-medium text-xs sm:text-sm">
                              <Calendar className="w-4 h-4 text-maroon" />
                              <span className="font-semibold">{evt.dateFormatted}</span>
                            </div>
                            <span className="text-gold/60">•</span>
                            <div className="flex items-center gap-2 text-burgundy font-medium text-xs sm:text-sm">
                              <Clock className="w-4 h-4 text-saffron" />
                              <span className="font-bold">{evt.time}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="font-sans text-sm text-burgundy/85 leading-relaxed mb-4">
                            {evt.description}
                          </p>

                          {/* Cultural Significance Box */}
                          <div className="p-3.5 rounded-xl bg-gold/10 border-l-4 border-gold text-xs text-burgundy mb-4">
                            <div className="flex items-center gap-1.5 font-display font-bold text-maroon mb-1">
                              <Info className="w-3.5 h-3.5" />
                              <span>Cultural Significance</span>
                            </div>
                            <p className="font-serif italic leading-relaxed">
                              {evt.culturalSignificance}
                            </p>
                          </div>
                        </div>

                        {/* Venue & Google Maps Section (Independent for this event) */}
                        <div className="p-4 rounded-2xl bg-ivory border border-gold/30 mt-auto">
                          <div className="flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">
                            <div className="flex items-start gap-2.5">
                              <MapPin className="w-4 h-4 text-maroon shrink-0 mt-1" />
                              <div>
                                <span className="text-[11px] font-display font-bold uppercase tracking-wider text-burgundy/70 block">
                                  Ceremony Venue
                                </span>
                                <h5 className="font-display font-bold text-sm text-maroon">
                                  {evt.venueName}
                                </h5>
                                <p className="text-xs text-burgundy/70 mt-0.5">
                                  {evt.address}
                                </p>
                              </div>
                            </div>

                            <a
                              href={evt.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-maroon hover:bg-maroon-dark text-gold-light text-xs font-semibold tracking-wider uppercase shadow-sm transition-all hover:shadow"
                            >
                              <Navigation className="w-3.5 h-3.5 text-saffron" />
                              <span>Get Directions</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Photo for this Event (5 cols) */}
                      <div className="lg:col-span-5 flex items-center justify-center">
                        <div className="w-full max-w-[280px] sm:max-w-[320px]">
                          <ImagePlaceholder
                            src={evt.images.couple || evt.images.sanjay || `/assets/images/${evt.id}-couple.jpg`}
                            alt={`${evt.name} Ceremony`}
                            personType="couple"
                            iconType={evt.iconType}
                            aspectRatio="portrait"
                            className="w-full shadow-md border-2 border-gold/40"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
