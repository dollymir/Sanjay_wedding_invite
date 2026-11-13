// import React, { useState } from 'react';
// import { weddingConfig } from '../data/weddingConfig';
// import { ImagePlaceholder } from '../components/ImagePlaceholder';
// import { LightboxItem } from '../components/PhotoLightbox';
// import { Camera, Info, Check, Sparkles } from 'lucide-react';

// interface GallerySectionProps {
//   onOpenLightbox: (item: LightboxItem) => void;
// }

// export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');
//   const [copiedPath, setCopiedPath] = useState<string | null>(null);

//   // Compile all gallery items across the wedding
//   const allGalleryItems: (LightboxItem & { category: string; id: string })[] = [
//     {
//       id: 'couple-sanjay',
//       category: 'couple',
//       src: weddingConfig.couple.groom.photo,
//       alt: 'Sanjay - Groom Portrait',
//       title: 'Sanjay — The Groom',
//       caption: weddingConfig.couple.groom.bio,
//       personType: 'sanjay',
//     },
//     {
//       id: 'couple-simran',
//       category: 'couple',
//       src: weddingConfig.couple.bride.photo,
//       alt: 'Simran - Bride Portrait',
//       title: 'Simran — The Bride',
//       caption: weddingConfig.couple.bride.bio,
//       personType: 'simran',
//     },
//     ...weddingConfig.events.flatMap((evt) => {
//       const items: (LightboxItem & { category: string; id: string })[] = [
//         {
//           id: `${evt.id}-sanjay`,
//           category: evt.id,
//           src: evt.images.sanjay,
//           alt: `Sanjay - ${evt.name}`,
//           title: `${evt.name} — Sanjay`,
//           caption: evt.images.captionSanjay,
//           personType: 'sanjay',
//           iconType: evt.iconType,
//         },
//       ];
//       if (evt.images.simran) {
//         items.push({
//           id: `${evt.id}-simran`,
//           category: evt.id,
//           src: evt.images.simran,
//           alt: `Simran - ${evt.name}`,
//           title: `${evt.name} — Simran`,
//           caption: evt.images.captionSimran,
//           personType: 'simran',
//           iconType: evt.iconType,
//         });
//       }
//       return items;
//     }),
//   ];

//   const filteredItems =
//     selectedCategory === 'all'
//       ? allGalleryItems
//       : allGalleryItems.filter((item) => item.category === selectedCategory);

//   const handleCopyPath = (src: string) => {
//     navigator.clipboard.writeText(src);
//     setCopiedPath(src);
//     setTimeout(() => setCopiedPath(null), 2500);
//   };

//   return (
//     <section id="gallery" className="py-20 bg-gradient-to-b from-ivory to-ivory-light relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-burgundy font-medium text-xs tracking-widest uppercase mb-3">
//             <Camera className="w-3.5 h-3.5 text-rani" />
//             Celebration Memories &amp; Visuals
//           </div>

//           <h2 className="font-display text-3xl sm:text-5xl font-black text-maroon tracking-wider drop-shadow-sm">
//             WEDDING PHOTO GALLERY
//           </h2>

//           <p className="font-serif italic text-base sm:text-lg text-burgundy/90 mt-2">
//             Independent portrait galleries dedicated to every ceremony and the couple.
//           </p>

//           {/* Category Filter Pills */}
//           <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
//             <button
//               onClick={() => setSelectedCategory('all')}
//               className={`px-4 py-1.5 rounded-full text-xs font-display font-bold tracking-wider uppercase transition-all ${
//                 selectedCategory === 'all'
//                   ? 'bg-maroon text-gold-light shadow-md'
//                   : 'bg-ivory border border-gold/30 text-burgundy hover:border-gold'
//               }`}
//             >
//               All Celebrations
//             </button>
//             <button
//               onClick={() => setSelectedCategory('couple')}
//               className={`px-4 py-1.5 rounded-full text-xs font-display font-bold tracking-wider uppercase transition-all ${
//                 selectedCategory === 'couple'
//                   ? 'bg-maroon text-gold-light shadow-md'
//                   : 'bg-ivory border border-gold/30 text-burgundy hover:border-gold'
//               }`}
//             >
//               Couple Portraits
//             </button>
//             {weddingConfig.events.map((evt) => (
//               <button
//                 key={evt.id}
//                 onClick={() => setSelectedCategory(evt.id)}
//                 className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold tracking-wider uppercase transition-all ${
//                   selectedCategory === evt.id
//                     ? 'bg-maroon text-gold-light shadow-md'
//                     : 'bg-ivory border border-gold/30 text-burgundy hover:border-gold'
//                 }`}
//               >
//                 {evt.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
//           {filteredItems.map((item) => (
//             <div key={item.id} className="flex flex-col">
//               <ImagePlaceholder
//                 src={item.src}
//                 alt={item.alt}
//                 caption={item.caption}
//                 personType={item.personType}
//                 iconType={item.iconType}
//                 aspectRatio="portrait"
//                 className="shadow-md hover:shadow-royal"
//                 onClick={() => onOpenLightbox(item)}
//               />
//               <div className="mt-2 text-center">
//                 <p className="font-display text-xs font-bold text-maroon truncate">
//                   {item.title}
//                 </p>
//                 <button
//                   onClick={() => handleCopyPath(item.src)}
//                   className="mt-1 inline-flex items-center gap-1 text-[10px] text-burgundy/60 hover:text-maroon font-mono transition-colors"
//                   title="Click to copy file replacement path"
//                 >
//                   {copiedPath === item.src ? (
//                     <>
//                       <Check className="w-3 h-3 text-emerald" />
//                       <span className="text-emerald font-semibold">Copied!</span>
//                     </>
//                   ) : (
//                     <span>{item.src.split('/').pop()}</span>
//                   )}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* User Guide Card: How to replace placeholders with real photos */}
//         <div className="mt-16 max-w-3xl mx-auto rounded-3xl bg-card-gradient border-2 border-gold/40 p-6 sm:p-8 shadow-royal">
//           <div className="flex items-center gap-2 mb-3 text-maroon">
//             <Info className="w-5 h-5 text-saffron" />
//             <h4 className="font-display font-bold text-base sm:text-lg">
//               Instructions for Uploading &amp; Replacing Photographs
//             </h4>
//           </div>

//           <p className="font-sans text-xs sm:text-sm text-burgundy/85 leading-relaxed">
//             All photographs are linked to the <code className="px-1.5 py-0.5 rounded bg-gold/20 text-maroon font-mono text-xs">/public/assets/images/</code> folder. To display your actual wedding photos, simply save your JPEG/PNG files with the corresponding filenames:
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-xs font-mono bg-ivory p-4 rounded-xl border border-gold/30 text-burgundy/80">
//             <div>• <strong className="text-maroon">couple-sanjay.jpg</strong> (Hero Groom)</div>
//             <div>• <strong className="text-maroon">couple-simran.jpg</strong> (Hero Bride)</div>
//             <div>• <strong className="text-maroon">janau-sanjay.jpg</strong> (Janau Sanjay)</div>
//             <div>• <strong className="text-maroon">carnival-sanjay.jpg</strong> / simran</div>
//             <div>• <strong className="text-maroon">baharan-sanjay.jpg</strong> / simran</div>
//             <div>• <strong className="text-maroon">ring-sanjay.jpg</strong> / simran</div>
//             <div>• <strong className="text-maroon">sathsod-sanjay.jpg</strong> / simran</div>
//             <div>• <strong className="text-maroon">dikh-sanjay.jpg</strong> / simran</div>
//             <div>• <strong className="text-maroon">bharat-sanjay.jpg</strong> / simran</div>
//             <div>• <strong className="text-maroon">wedding-sanjay.jpg</strong> / simran</div>
//             <div>• <strong className="text-maroon">reception-sanjay.jpg</strong> / simran</div>
//             <div>• <strong className="text-maroon">cousins-1.jpg</strong> to 6 (Cousins)</div>
//           </div>

//           <div className="mt-4 flex items-center gap-2 text-xs text-burgundy/70 font-serif italic">
//             <Sparkles className="w-4 h-4 text-saffron shrink-0" />
//             <span>High-resolution images will be automatically cropped with royal gold frames without face distortion.</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
