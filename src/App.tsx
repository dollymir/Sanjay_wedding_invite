import React, { useState, useEffect } from 'react';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { Navbar } from './components/Navbar';
import { ScratchCard } from './components/ScratchCard';
import { HeroSection } from './sections/HeroSection';
import { FamilySection } from './sections/FamilySection';
import { CountdownSection } from './sections/CountdownSection';
import { EventsTimelineSection } from './sections/EventsTimelineSection';
//import { GallerySection } from './sections/GallerySection';
//import { GuestbookSection } from './sections/GuestbookSection';
import { CousinsSection } from './sections/CousinsSection';
import { Footer } from './components/Footer';
import { FloatingMusicControl } from './components/FloatingMusicControl';
import { FloatingPetals } from './components/FloatingPetals';
import { downloadWeddingCalendar } from './utils/calendar';

export const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track window scroll progress for top progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `॥ श्री गणेशाय नमः ॥\n\n` +
      `Together with our families, we warmly invite you to celebrate the wedding ceremonies of\n\n` +
      `✨ SANJAY & SIMRAN ✨\n\n` +
      `📅 3 & 4 January 2027\n\n` +
      `Please open our interactive digital wedding invitation:\n` +
      `${window.location.origin}\n\n` +
      `With love & blessings from the Groom's Family ❤️`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-ivory text-burgundy selection:bg-gold-light selection:text-maroon">
      {/* 1. Opening Full-Screen Lord Ganpati & Envelope Experience */}
      {!isOpened && (
        <OpeningEnvelope onOpenComplete={() => setIsOpened(true)} />
      )}

      {/* 2. Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-saffron via-rani to-gold z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 3. Sticky Navigation Bar */}
      <Navbar onShareWhatsApp={handleShareWhatsApp} />

      {/* 4. Floating Audio Equalizer & Controls */}
      <FloatingMusicControl />

      {/* 5. Subtle Floating Petals Animation (Toggleable) */}
      <FloatingPetals />

      {/* 6. Main Website Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection onSaveToCalendar={downloadWeddingCalendar} />

        {/* Interactive Scratch-to-Reveal Card */}
        <section className="bg-gradient-to-b from-transparent via-gold/10 to-transparent py-4">
          <ScratchCard />
        </section>

        {/* Family Introduction Section */}
        <FamilySection />

        {/* Live Wedding & Celebration Countdown */}
        <CountdownSection />

        {/* Complete Wedding Function Timeline (All 9 Events) */}
        <EventsTimelineSection />

        {/* Independent Event Photo Galleries
        <GallerySection onOpenLightbox={handleOpenLightbox} /> */}

        {/* Digital Guestbook: A Note for Sanjay
        <GuestbookSection /> */}

        {/* Cousins' Special Invitation (Final Major Section) */}
        <CousinsSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
};
