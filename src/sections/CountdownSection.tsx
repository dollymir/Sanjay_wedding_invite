import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../data/weddingConfig';
import { downloadWeddingCalendar, getGoogleCalendarLink } from '../utils/calendar';
import { Calendar, Clock, Sparkles, PartyPopper } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownSection: React.FC = () => {
  const { countdown } = weddingConfig;

  const calculateTimeLeft = (targetIso: string): TimeLeft => {
    const target = new Date(targetIso).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, isPast: false };
  };

  const [mainWeddingTime, setMainWeddingTime] = useState<TimeLeft>(() =>
    calculateTimeLeft(countdown.mainWeddingDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setMainWeddingTime(calculateTimeLeft(countdown.mainWeddingDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown.mainWeddingDate]);

  const padZero = (n: number) => n.toString().padStart(2, '0');

  return (
    <section id="countdown" className="py-20 bg-gradient-to-b from-maroon via-burgundy to-plum text-ivory relative overflow-hidden">
      {/* Background Mandala Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border-[16px] border-gold animate-spin-slow" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold-light text-xs font-display tracking-widest uppercase mb-3">
          <Clock className="w-3.5 h-3.5 text-saffron" />
          Auspicious Muhurat Countdown
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-black text-gold-light tracking-wider drop-shadow-md">
          THE BIG DAY IS APPROACHING!
        </h2>

        <p className="font-serif italic text-base sm:text-xl text-ivory/90 max-w-2xl mx-auto mt-2">
          Counting every blessed moment until Sanjay &amp; Simran unite for eternity.
        </p>

        {/* MAIN WEDDING COUNTDOWN CARDS: 4 January 2027 at 6:00 PM IST */}
        <div className="my-10">
          <div className="inline-block mb-6 px-4 py-1 rounded-full bg-ivory/10 border border-gold/30 text-xs text-gold-light font-display tracking-wider uppercase">
            Main Wedding Ceremony: 4 January 2027 
          </div>

          {mainWeddingTime.isPast ? (
            <div className="p-8 rounded-3xl bg-ivory/10 border-2 border-gold/60 max-w-xl mx-auto animate-bounce">
              <PartyPopper className="w-12 h-12 text-gold mx-auto mb-2" />
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-gold-light">
                THE CELEBRATIONS HAVE BEGUN!
              </h3>
              <p className="text-sm text-ivory/90 mt-2 font-serif italic">
                Blessings, joy and love are pouring in for Sanjay &amp; Simran!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
              {/* DAYS */}
              <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-ivory/15 to-ivory/5 border-2 border-gold/40 backdrop-blur-sm shadow-gold flex flex-col items-center">
                <span className="font-display text-4xl sm:text-6xl font-black text-gold-light drop-shadow">
                  {padZero(mainWeddingTime.days)}
                </span>
                <span className="text-[11px] sm:text-xs font-display tracking-widest uppercase text-ivory/80 mt-1 font-semibold">
                  Days
                </span>
              </div>

              {/* HOURS */}
              <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-ivory/15 to-ivory/5 border-2 border-gold/40 backdrop-blur-sm shadow-gold flex flex-col items-center">
                <span className="font-display text-4xl sm:text-6xl font-black text-gold-light drop-shadow">
                  {padZero(mainWeddingTime.hours)}
                </span>
                <span className="text-[11px] sm:text-xs font-display tracking-widest uppercase text-ivory/80 mt-1 font-semibold">
                  Hours
                </span>
              </div>

              {/* MINUTES */}
              <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-ivory/15 to-ivory/5 border-2 border-gold/40 backdrop-blur-sm shadow-gold flex flex-col items-center">
                <span className="font-display text-4xl sm:text-6xl font-black text-gold-light drop-shadow">
                  {padZero(mainWeddingTime.minutes)}
                </span>
                <span className="text-[11px] sm:text-xs font-display tracking-widest uppercase text-ivory/80 mt-1 font-semibold">
                  Minutes
                </span>
              </div>

              {/* SECONDS */}
              <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-ivory/15 to-ivory/5 border-2 border-gold/40 backdrop-blur-sm shadow-gold flex flex-col items-center">
                <span className="font-display text-4xl sm:text-6xl font-black text-saffron drop-shadow animate-pulse">
                  {padZero(mainWeddingTime.seconds)}
                </span>
                <span className="text-[11px] sm:text-xs font-display tracking-widest uppercase text-ivory/80 mt-1 font-semibold">
                  Seconds
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ADDITIONAL CELEBRATION COUNTDOWN: 3 January 2027 at 11:00 AM IST */}
        {/* <div className="my-8 max-w-xl mx-auto p-4 rounded-2xl bg-ivory/10 border border-gold/30">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gold-light font-display tracking-wider uppercase mb-2">
            <DiyaIcon className="w-4 h-4 text-saffron" />
            <span>Celebrations Commencement (Janau Ceremony)</span>
          </div>

          <p className="text-xs text-ivory/80 mb-3">
            3 January 2027 at 11:00 AM IST
          </p>

          {celebrationStartTime.isPast ? (
            <p className="text-xs font-serif italic text-gold-light font-semibold">
              Celebration events have commenced!
            </p>
          ) : (
            <div className="flex items-center justify-center gap-4 text-sm sm:text-base font-display font-bold text-gold-light">
              <div>
                <span className="text-xl sm:text-2xl font-black">{celebrationStartTime.days}</span>d
              </div>
              <span>:</span>
              <div>
                <span className="text-xl sm:text-2xl font-black">{padZero(celebrationStartTime.hours)}</span>h
              </div>
              <span>:</span>
              <div>
                <span className="text-xl sm:text-2xl font-black">{padZero(celebrationStartTime.minutes)}</span>m
              </div>
              <span>:</span>
              <div>
                <span className="text-xl sm:text-2xl font-black text-saffron">{padZero(celebrationStartTime.seconds)}</span>s
              </div>
            </div>
          )}
        </div> */}

        {/* Add To Calendar Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={downloadWeddingCalendar}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold hover:bg-gold-light text-burgundy text-xs sm:text-sm font-display font-bold tracking-wider uppercase shadow-gold hover:shadow-gold-lg transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-maroon" />
            <span>Download Calendar Event (.ics)</span>
          </button>

          <a
            href={getGoogleCalendarLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ivory/15 hover:bg-ivory/25 border border-gold/40 text-gold-light text-xs sm:text-sm font-display font-bold tracking-wider uppercase transition-all"
          >
            <Sparkles className="w-4 h-4 text-saffron" />
            <span>Add to Google Calendar</span>
          </a>
        </div>
      </div>
    </section>
  );
};
