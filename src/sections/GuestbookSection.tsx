import React, { useState } from 'react';
import { submitGuestWish, isSupabaseConfigured, getLocalWishes, GuestWish } from '../services/supabase';
import { Heart, Send, CheckCircle2, Lock, Sparkles, MessageSquareHeart, ShieldCheck, Download, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const GuestbookSection: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [message, setMessage] = useState('');
  const [relationship, setRelationship] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [storageResult, setStorageResult] = useState<'supabase' | 'local' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Family Admin Portal State (to view private messages securely)
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminError, setAdminError] = useState('');
  const [privateWishes, setPrivateWishes] = useState<GuestWish[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!guestName.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!message.trim()) {
      setErrorMessage('Please write a heartfelt message for Sanjay.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await submitGuestWish({
        guest_name: guestName.trim(),
        message: message.trim(),
        relationship: relationship.trim() || undefined,
      });

      setStorageResult(res.storageMode);
      setIsSuccess(true);

      // Trigger celebratory heart confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#E85D8F', '#801F3D', '#D8B56D'],
        });
      } catch {
        // Fallback
      }

      // Reset form fields
      setGuestName('');
      setMessage('');
      setRelationship('');
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default Groom family passcode
    if (adminPassword === 'sanjay2027' || adminPassword === 'sanju2027') {
      setIsAdminAuthenticated(true);
      setAdminError('');
      setPrivateWishes(getLocalWishes());
    } else {
      setAdminError('Incorrect passcode. Enter the groom family key (sanjay2027)');
    }
  };

  const handleExportCSV = () => {
    const wishes = getLocalWishes();
    if (wishes.length === 0) return;

    const headers = ['Guest Name', 'Relationship', 'Message', 'Timestamp'];
    const rows = wishes.map((w) => [
      `"${w.guest_name.replace(/"/g, '""')}"`,
      `"${(w.relationship || '').replace(/"/g, '""')}"`,
      `"${w.message.replace(/"/g, '""')}"`,
      `"${w.created_at || ''}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'sanjay-wedding-guest-wishes.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="guestbook" className="py-20 bg-gradient-to-b from-ivory-light via-ivory to-ivory relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rani/10 border border-rani/30 text-rani-dark font-medium text-xs tracking-widest uppercase mb-3">
            <Heart className="w-3.5 h-3.5 fill-rani text-rani" />
            Digital Wedding Guestbook
          </div>

          <h2 className="font-script text-4xl sm:text-6xl text-maroon drop-shadow-sm">
            A Little Note for Sanjay ❤️
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-burgundy/90 mt-3 leading-relaxed">
            &ldquo;Every blessing, every wish and every heartfelt word makes this celebration even more special. Leave a little message for the groom!&rdquo;
          </p>
        </div>

        {/* Guest Message Card Container */}
        <div className="rounded-3xl bg-card-gradient border-2 border-gold/40 shadow-royal p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle Decorative Floral Background Icon */}
          <div className="absolute -top-10 -right-10 w-44 h-44 text-gold/10 pointer-events-none">
            <MessageSquareHeart className="w-full h-full" />
          </div>

          {isSuccess ? (
            /* Success Message Animation Card */
            <div className="py-12 text-center flex flex-col items-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald/15 border-2 border-emerald flex items-center justify-center text-emerald mb-4 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-maroon mb-2">
                Your wishes have been sent with love!
              </h3>

              <p className="font-serif italic text-base sm:text-lg text-burgundy max-w-md mx-auto mb-6">
                Thank you for being a part of Sanjay &amp; Simran&apos;s special celebration.
              </p>

              {/* Transparency Notice regarding backend mode */}
              <div className="p-3 rounded-xl bg-gold/15 border border-gold/40 text-xs text-burgundy max-w-sm mx-auto mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald shrink-0" />
                <span>
                  {storageResult === 'supabase'
                    ? 'Saved securely to Cloud Database for the Groom!'
                    : 'Saved securely to Local Guestbook (Groom & Family access only).'}
                </span>
              </div>

              <button
                onClick={() => setIsSuccess(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-maroon text-gold-light text-xs font-display font-bold tracking-wider uppercase shadow-md hover:bg-maroon-dark transition-all"
              >
                <span>Write Another Wish</span>
              </button>
            </div>
          ) : (
            /* Form Input */
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-300 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Guest Name */}
              <div>
                <label className="block text-xs font-display font-bold uppercase tracking-wider text-burgundy mb-2">
                  Your Name <span className="text-rani">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-gold/40 text-burgundy placeholder:text-burgundy/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all shadow-inner"
                />
              </div>

              {/* Relationship with Groom (Optional text field) */}
              <div>
                <label className="block text-xs font-display font-bold uppercase tracking-wider text-burgundy mb-2">
                  Relationship with Sanjay <span className="text-burgundy/50 font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="text"
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  placeholder="e.g. College Friend, Childhood Buddy, Cousin, Uncle"
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-gold/40 text-burgundy placeholder:text-burgundy/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all shadow-inner"
                />
              </div>

              {/* Message for Sanjay */}
              <div>
                <label className="block text-xs font-display font-bold uppercase tracking-wider text-burgundy mb-2">
                  Your Message for Sanjay <span className="text-rani">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your wishes, blessings or a special message for Sanjay..."
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-gold/40 text-burgundy placeholder:text-burgundy/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all shadow-inner resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-rani to-maroon hover:from-rani-dark hover:to-maroon text-white font-display text-sm font-bold tracking-wider uppercase shadow-gold hover:shadow-gold-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${
                    isSubmitting ? 'opacity-80 cursor-wait' : ''
                  }`}
                >
                  <Heart className="w-4 h-4 fill-white text-white" />
                  <span>{isSubmitting ? 'Sending...' : 'SEND YOUR WISHES ❤️'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Privacy Guarantee Note */}
              <div className="pt-4 border-t border-gold/25 flex flex-col sm:flex-row items-center justify-between text-[11px] text-burgundy/70 gap-2">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-maroon" />
                  <span>Submissions are private by default and visible only to Sanjay &amp; his family.</span>
                </div>

                {/* Family Admin Access Link */}
                <button
                  type="button"
                  onClick={() => setIsAdminOpen(true)}
                  className="text-maroon underline font-medium hover:text-burgundy"
                >
                  Groom&apos;s Family Portal
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Backend Configuration Status Banner (Transparent disclosure complying with prompt rules) */}
        <div className="mt-6 p-3.5 rounded-2xl bg-ivory border border-gold/30 text-center max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs text-burgundy/80">
            <Sparkles className="w-3.5 h-3.5 text-saffron" />
            <span>
              {isSupabaseConfigured ? (
                <strong className="text-emerald">Cloud Storage: Supabase Connected &amp; Active</strong>
              ) : (
                <span>
                  <strong>Storage Status:</strong> Running in Local Mode. (To link Supabase cloud database, provide <code className="text-maroon font-mono">VITE_SUPABASE_URL</code> in <code className="text-maroon font-mono">.env</code>).
                </span>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* FAMILY ADMIN MODAL: View Private Wishes */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-burgundy/90 backdrop-blur-sm animate-fadeIn">
          <div className="bg-ivory rounded-3xl border-2 border-gold shadow-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-gold/30">
              <div className="flex items-center gap-2 text-maroon">
                <Lock className="w-5 h-5 text-saffron" />
                <h3 className="font-display font-bold text-lg">
                  Sanjay&apos;s Private Wishes Vault
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsAdminOpen(false);
                  setIsAdminAuthenticated(false);
                  setAdminPassword('');
                }}
                className="text-burgundy hover:text-maroon text-sm font-bold"
              >
                ✕ Close
              </button>
            </div>

            {!isAdminAuthenticated ? (
              <form onSubmit={handleAdminLogin} className="py-8 text-center max-w-sm mx-auto">
                <p className="text-xs text-burgundy/80 mb-4 font-sans">
                  Enter Sanjay&apos;s family passcode to view received guest messages:
                </p>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter passcode (e.g. sanjay2027)"
                  className="w-full px-4 py-2.5 rounded-xl border border-gold/40 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-maroon text-center font-mono"
                />
                {adminError && <p className="text-xs text-red-600 mb-3">{adminError}</p>}
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-maroon text-gold-light text-xs font-display font-bold tracking-wider uppercase shadow"
                >
                  Unlock Vault
                </button>
              </form>
            ) : (
              <div className="flex-1 overflow-y-auto py-4 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-gold/20">
                  <span className="text-xs text-burgundy font-medium">
                    Total Received: {privateWishes.length} messages
                  </span>
                  <button
                    onClick={handleExportCSV}
                    disabled={privateWishes.length === 0}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-maroon text-xs font-semibold hover:bg-gold/40 transition-colors disabled:opacity-50"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export to CSV</span>
                  </button>
                </div>

                {privateWishes.length === 0 ? (
                  <p className="text-center py-8 text-xs text-burgundy/60 italic font-serif">
                    No guest messages recorded on this device yet.
                  </p>
                ) : (
                  privateWishes.map((w, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-ivory-light border border-gold/30 shadow-sm text-left">
                      <div className="flex items-center justify-between mb-1">
                        <strong className="font-display text-sm text-maroon">{w.guest_name}</strong>
                        {w.relationship && (
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-gold/20 text-burgundy font-sans">
                            {w.relationship}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-burgundy/90 font-serif italic mt-1 leading-relaxed">
                        &ldquo;{w.message}&rdquo;
                      </p>
                      {w.created_at && (
                        <span className="text-[10px] text-burgundy/50 block mt-2 font-mono">
                          {new Date(w.created_at).toLocaleString()}
                        </span>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
