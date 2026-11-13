# Sanjay ❤️ Simran – Interactive Hindu Wedding Invitation Website
**Official Invitation from the Groom's Family | 3 & 4 January 2027**

A luxurious, modern, vibrant, and interactive Hindu & Sindhi wedding invitation website crafted for **Sanjay & Simran**.

---

## 🌟 Key Features

1. **॥ श्री गणेशाय नमः ॥ Opening Experience**:
   - Sacred Lord Ganpati illustration & Vedic invocation.
   - Wax-sealed digital envelope opening transition.
   - Auto-plays auspicious background wedding music on user interaction.
2. **Interactive Scratch-to-Reveal Card**:
   - HTML5 Canvas with realistic finger (mobile) and mouse (desktop) scratching.
   - Auto-reveals at ~70% with celebratory confetti explosion.
   - Alternative "Reveal Invitation" button for accessibility.
3. **Couple Hero Section**:
   - Regal Indian arch framing, couple portraits, Sanskrit shlokas, and floating rose petals.
   - One-click "Save to Calendar (.ics)" & "Explore 9 Events".
4. **Familial Lineage & Blessings**:
   - **Groom's Grandparents prominently showcased** with paternal grandparent titles & blessings.
   - Parents of Sanjay & Parents of Simran with fully editable placeholders.
5. **Real-time Live Muhurat Countdown**:
   - Main Wedding Countdown: **4 January 2027 at 6:00 PM IST (Asia/Kolkata)**.
   - Celebrations Commencement Countdown: **3 January 2027 at 11:00 AM IST**.
   - Live second-by-second ticking in Indian Standard Time (IST).
   - Instant "Add to Google Calendar" and `.ics` file download.
6. **All 9 Wedding Functions in Exact Chronological Order**:
   - **Day 1 – 3 January 2027 ("THE CELEBRATIONS BEGIN")**:
     1. Janau Ceremony (11:00 AM)
     2. The Carnival (2:00 PM)
     3. Pujya Baharan Saheb (6:30 PM) – Lord Sai Jhulelal Sindhi ritual
     4. Ring Ceremony (8:30 PM)
   - **Day 2 – 4 January 2027 ("THE WEDDING DAY")**:
     5. Sathsod (10:00 AM)
     6. Dikh (2:00 PM)
     7. Bharat (4:00 PM)
     8. Wedding Ceremony (6:00 PM)
     9. Reception (8:30 PM)
   - Independent photo galleries, cultural illustrations, dress codes, independent venue entries, and "Get Directions" buttons for every function.
7. **Continuous Background Wedding Music**:
   - Local audio asset `/assets/music/wedding-song.mp3`.
   - Floating equalizer button with Play/Pause, Mute/Unmute, and live track details.
   - Built-in Web Audio API Indian Classical Shehnai & Tanpura synthesizer fallback ensuring zero audio playback failures.
8. **Independent Google Maps Venues**:
   - Initial venue: `Ringing Bells, Near Ring Road`.
   - Independent configuration for all 9 functions.
9. **A Little Note for Sanjay ❤️ (Digital Guestbook)**:
   - Private wish submission form with Name, Message, and Custom Relationship fields.
   - Supabase cloud integration with transparent local fallback.
   - Private Groom's Family Vault (passcode: `sanjay2027`) to read, search, and export wishes to CSV.
10. **The Cousins' Special Invitation**:
    - Final major section with official invitation letter from the cousins of Sanjay.
    - Cousin squad portraits and interactive celebratory confetti explosion.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- Node.js (v18 or newer)
- npm (v9 or newer)

### 2. Installation
```bash
# Clone or navigate to the project directory
cd sanjuwedssimran

# Install dependencies
npm install
```

### 3. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production output will be in the `/dist` directory.

---

## 📸 Customization Guide

### 1. Replacing Photographs
All image placeholders are located in `/public/assets/images/`. Replace any file with your actual photographs (JPEG/PNG):
- `couple-sanjay.jpg` – Sanjay's main hero portrait
- `couple-simran.jpg` – Simran's main hero portrait
- `janau-sanjay.jpg` – Sanjay at the Janau Ceremony
- `carnival-sanjay.jpg` / `carnival-simran.jpg` – The Carnival
- `baharan-sanjay.jpg` / `baharan-simran.jpg` – Pujya Baharan Saheb
- `ring-sanjay.jpg` / `ring-simran.jpg` – Ring Ceremony
- `sathsod-sanjay.jpg` / `sathsod-simran.jpg` – Sathsod
- `dikh-sanjay.jpg` / `dikh-simran.jpg` – Dikh
- `bharat-sanjay.jpg` / `bharat-simran.jpg` – Bharat
- `wedding-sanjay.jpg` / `wedding-simran.jpg` – Wedding Ceremony
- `reception-sanjay.jpg` / `reception-simran.jpg` – Reception
- `cousins-1.jpg` to `cousins-6.jpg` – Cousins Squad

*Note: The website features high-end artistic vector fallbacks with royal Indian arches, so even if a photo is not yet replaced, it displays an exquisite portrait card rather than a broken image.*

### 2. Updating Family Names & Event Details
Open `src/data/weddingConfig.ts` to edit:
- Groom's Grandfather & Grandmother names
- Groom's Father & Mother names
- Bride's Father & Mother names
- Descriptions, dress codes, or timings for any of the 9 events
- Venue names and addresses

### 3. Replacing the Wedding Music
Place your favorite royalty-free wedding shehnai / sitar instrumental MP3 at:
`/public/assets/music/wedding-song.mp3`

---

## 💌 Guestbook Backend (Supabase Setup)

The guestbook operates out of the box in Local Storage mode. To synchronize guest wishes across devices to a private cloud database:

1. Create a free account at [Supabase](https://supabase.com).
2. Create a new project.
3. Open the **SQL Editor** in your Supabase dashboard and run this script:
```sql
create table guest_wishes (
  id uuid primary key default gen_random_uuid(),
  guest_name text not null,
  message text not null,
  relationship text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table guest_wishes enable row level security;

-- Allow anonymous visitors to submit wishes
create policy "Allow anonymous inserts"
on guest_wishes for insert
to anon
with check (true);

-- Allow only authenticated users / service role to view wishes
create policy "Allow authenticated reads"
on guest_wishes for select
to authenticated;
```
4. Copy your **Project URL** and **Anon Key** from `Project Settings > API`.
5. Add them to your `.env` file (or Vercel / Netlify environment variables):
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```
6. To view submitted messages in the app, click **"Groom's Family Portal"** at the bottom of the Guestbook section and enter passcode: `sanjay2027`. You can export all messages to CSV with one click.

---

## 🌐 Deployment to Vercel or Netlify

### Deploying to Vercel (Recommended)
1. Push your project to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. Your wedding invitation website will be live with a free SSL certificate!

---

## 📱 WhatsApp Sharing
Guests can share the invitation with one tap via the floating WhatsApp button, which sends a pre-formatted invitation message:
> *॥ श्री गणेशाय नमः ॥ Together with our families, we warmly invite you to celebrate the wedding ceremonies of SANJAY & SIMRAN on 3 & 4 January 2027 at Ringing Bells, Near Ring Road...*

---

*With blessings & warm regards from the Groom's Family ❤️*
