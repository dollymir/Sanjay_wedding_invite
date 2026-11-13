import React, { useState, useEffect } from 'react';
import { Menu, X, Share2, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { audioManager } from '../utils/audioPlayer';

interface NavbarProps {
  onShareWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onShareWhatsApp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = audioManager.subscribe((state) => {
      setIsPlaying(state.isPlaying);
      setIsMuted(state.isMuted);
    });
    return unsubscribe;
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'OUR FAMILIES', href: '#families' },
    { label: 'COUNTDOWN', href: '#countdown' },
    { label: 'EVENTS', href: '#events' },
    // { label: 'GALLERY', href: '#gallery' },
    // { label: 'GUESTBOOK', href: '#guestbook' },
    { label: 'COUSINS', href: '#cousins' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-md py-2.5 border-b border-gold/30'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
          className="group flex items-center gap-2 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-maroon to-burgundy border-2 border-gold flex items-center justify-center text-gold-light font-display font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            S&amp;S
          </div>
          <div className="hidden sm:block text-left">
            <span className="font-display font-bold text-sm tracking-wider text-maroon block leading-tight">
              SANJAY &amp; SIMRAN
            </span>
            <span className="text-[10px] text-burgundy/80 tracking-widest uppercase font-semibold block">
               4 January 2027
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="font-display text-xs tracking-widest text-burgundy font-semibold hover:text-maroon relative py-1 transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-rani group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Action Controls: Music Toggle + WhatsApp Share + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Music Mute/Play toggle */}
          <button
            onClick={() => audioManager.toggle()}
            title={isPlaying ? 'Pause Music' : 'Play Music'}
            className="p-2 rounded-full bg-ivory-light border border-gold/40 hover:border-gold text-maroon hover:text-burgundy transition-all shadow-sm"
          >
            {isPlaying ? (
              isMuted ? (
                <VolumeX className="w-4 h-4 text-burgundy/60" />
              ) : (
                <div className="flex items-center gap-0.5 h-4">
                  <span className="w-0.5 bg-maroon h-3 animate-pulse" />
                  <span className="w-0.5 bg-rani h-4 animate-bounce" />
                  <span className="w-0.5 bg-gold h-2 animate-pulse" />
                </div>
              )
            ) : (
              <Volume2 className="w-4 h-4 text-burgundy/60" />
            )}
          </button>

          {/* WhatsApp Share Button */}
          <button
            onClick={onShareWhatsApp}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald hover:bg-emerald-dark text-white text-xs font-semibold tracking-wider transition-colors shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Invitation</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-lg text-burgundy hover:text-maroon hover:bg-gold/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="xl:hidden bg-ivory/98 border-b border-gold/30 backdrop-blur-lg px-6 pt-4 pb-6 shadow-xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-display text-sm tracking-wider font-semibold text-burgundy hover:text-maroon py-2 border-b border-gold/15 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <Sparkles className="w-3 h-3 text-gold/60" />
              </a>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onShareWhatsApp();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-emerald text-white text-xs font-semibold tracking-wider uppercase shadow-md"
              >
                <Share2 className="w-4 h-4" />
                <span>Share via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
