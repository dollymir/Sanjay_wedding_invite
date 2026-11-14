export interface WeddingEvent {
  id: string;
  number: string;
  name: string;
  day: 'day1' | 'day2';
  dayLabel: string;
  date: string; // e.g., '2027-01-03'
  dateFormatted: string; // '3 January 2027'
  time: string; // e.g., '11:00 AM'
  time24: string; // '11:00'
  venueName: string;
  address: string;
  mapUrl: string;
  themeColor: string; // hex or tailwind class
  badgeColor: string;
  slogan: string;
  description: string;
  culturalSignificance: string;
  iconType: 'janau' | 'carnival' | 'baharan' | 'ring' | 'sathsod' | 'dikh' | 'bharat' | 'wedding' | 'reception';
  images: {
    couple?: string;
    caption?: string;
    sanjay?: string;
    simran?: string;
    captionSanjay?: string;
    captionSimran?: string;
  };
}

export interface FamilyMember {
  role: string;
  name: string;
  relationType: 'parents' | 'grandparents';
  note?: string;
}

export interface WeddingConfig {
  couple: {
    groom: {
      name: string;
      fullName: string;
      title: string;
      photo: string;
      bio: string;
    };
    bride: {
      name: string;
      fullName: string;
      title: string;
      photo: string;
      bio: string;
    };
    hashtag: string;
    dateSummary: string;
    tagline: string;
    welcomeMessage: string;
  };
  families: {
    heading: string;
    groomFamily: {
      title: string;
      familyName: string;
      grandparents: {
        grandfather: string;
        grandmother: string;
        highlightText: string;
      };
      parents: {
        father: string;
        mother: string;
      };
      residence: string;
      blessingQuote: string;
    };
    brideFamily: {
      title: string;
      familyName: string;
      parents: {
        father: string;
        mother: string;
      };
      residence: string;
      blessingQuote: string;
    };
  };
  countdown: {
    mainWeddingDate: string; // ISO string in IST: '2027-01-04T18:00:00+05:30'
    celebrationStartDate: string; // ISO string in IST: '2027-01-03T11:00:00+05:30'
    timezone: string;
  };
  mainVenue: {
    name: string;
    address: string;
    cityStatePlaceholder: string;
    fullAddress: string;
    mapUrl: string;
    embeddedMapQuery: string;
    landmark: string;
    parkingInfo: string;
    valetAvailable: boolean;
  };
  events: WeddingEvent[];
  cousinsInvitation: {
    heading: string;
    subheading: string;
    message: string;
    signOff: string;
    seeYouText: string;
    cousinsList: {
      name: string;
      nickname?: string;
      photo: string;
    }[];
  };
  music: {
    audioPath: string;
    title: string;
    artist: string;
  };
  contact: {
    groomFamilyRsvp: {
      name: string;
      phone: string;
      relation: string;
    }[];
    supportEmail: string;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      name: "Sanjay",
      fullName: "Sanjay",
      title: "Groom",
      photo: "/Sanjay_wedding_invite/assets/images/sanjay.jpeg",
      bio: "Cherishing every step of life's journey, stepping forward with love, gratitude and excitement to begin this sacred union.",
    },
    bride: {
      name: "Simran",
      fullName: "Simran",
      title: "Bride",
      photo: "/Sanjay_wedding_invite/assets/images/simran.jpeg",
      bio: "Bringing grace, laughter and boundless dreams as two souls and two blessed families unite in divine companionship.",
    },
    hashtag: "#SanjuWedsSimran",
    dateSummary: "4 JANUARY 2027",
    tagline: "Two Hearts. Two Families. One Beautiful Beginning.",
    welcomeMessage:
      "With immense joy and the blessings of our families, we invite you to be a part of our wedding celebrations.",
  },

  families: {
    heading: "With the blessings and love of our families",
    groomFamily: {
      title: "Groom's Family",
      familyName: "The Family of Sanjay",
      grandparents: {
        grandfather: "Late Kisanchand Mirchandani",
        grandmother: "Late Radhaben Mirchandani",
        highlightText:
          "With the revered blessings of our beloved Grandparents, whose timeless guidance and unconditional affection illuminate our paths.",
      },
      parents: {
        mother: "Soniya Mirchandani",
        father: "Lalit Mirchandani",
      },
      residence: "[CITY, STATE – EDITABLE PLACEHOLDER]",
      blessingQuote: "“May your companionship be blessed with love, prosperity and timeless happiness.”",
    },
    brideFamily: {
      title: "Bride's Family",
      familyName: "The Family of Simran",
      parents: {
        father: "Vijay Bhagtani",
        mother: "Hemlata Bhagtani",
      },
      residence: "[CITY, STATE – EDITABLE PLACEHOLDER]",
      blessingQuote: "“Two families bonded by respect, warmth and a lifelong celebration of togetherness.”",
    },
  },

  countdown: {
    // 4 January 2027 at 6:00 PM IST (Asia/Kolkata +05:30)
    mainWeddingDate: "2027-01-04T18:00:00+05:30",
    // 3 January 2027 at 11:00 AM IST
    celebrationStartDate: "2027-01-03T11:00:00+05:30",
    timezone: "Asia/Kolkata",
  },

  mainVenue: {
    name: "Ringing Bells, Near Ring Road",
    address: "Ringing Bells, Near Ring Road",
    cityStatePlaceholder: "[CITY, STATE – EDITABLE PLACEHOLDER]",
    fullAddress: "Ringing Bells, Near Ring Road,Ahmedabad , Gujarat",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ringing+Bells+Near+Ring+Road",
    embeddedMapQuery: "Ringing Bells, Near Ring Road",
    landmark: "Prominently located along Ring Road with dedicated arrival entrances",
    parkingInfo: "Complimentary Valet Parking and dedicated guest vehicle bays available at venue premises",
    valetAvailable: true,
  },

  // ALL 9 WEDDING EVENTS IN EXACT SPECIFIED ORDER
  events: [
    // DAY 1 – 3 JANUARY 2027
    {
      id: "janau",
      number: "01",
      name: "Janau Ceremony",
      day: "day1",
      dayLabel: "D",
      date: "2027-01-03",
      dateFormatted: "3 January 2027",
      time: "11:00 AM",
      time24: "11:00",
      venueName: "Ringing Bells, Near Ring Road",
      address: "Ringing Bells, Near Ring Road,Ahmedabad , Gujarat",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ringing+Bells+Near+Ring+Road",
      themeColor: "#F4A340",
      badgeColor: "bg-saffron text-burgundy",
      slogan: "Sacred Yagnopavita & Auspicious Vedic Rites",
      description:
        "The sacred thread ceremony marking spiritual awakening, purity of intention and invoking divine blessings from the almighty before the marital journey begins.",
      culturalSignificance:
        "A sacred Vedic rite of passage where the groom receives the consecrated Yagnopavita amidst Vedic mantras, havan fire, and the blessings of elders.",
      iconType: "janau",
      images: {
        couple: "/Sanjay_wedding_invite/assets/images/janeu.jpeg",
        caption: "Sanjay & Simran at the sacred Janau ritual",
        sanjay: "/Sanjay_wedding_invite/assets/images/janeu.jpeg",
        captionSanjay: "Sanjay during the sacred Janau ritual",
      },
    },
    {
      id: "carnival",
      number: "02",
      name: "The Carnival",
      day: "day1",
      dayLabel: "Day 1 – 3 January 2027",
      date: "2027-01-03",
      dateFormatted: "3 January 2027",
      time: "2:00 PM",
      time24: "14:00",
      venueName: "Ringing Bells, Near Ring Road",
      address: "Ringing Bells, Near Ring Road,Ahmedabad , Gujarat",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ringing+Bells+Near+Ring+Road",
      themeColor: "#E85D8F",
      badgeColor: "bg-rani text-white",
      slogan: "Vibrant Beats, Joyful Games & Festive Cheer",
      description:
        "A vibrant Indian wedding afternoon carnival brimming with lively dhol beats, festive canopy lounges, refreshing mocktails, interactive games and boundless family joy.",
      culturalSignificance:
        "A contemporary celebration bringing both families together in high spirits, dance, laughter, and camaraderie ahead of the evening rituals.",
      
      iconType: "carnival",
      images: {
        couple: "/Sanjay_wedding_invite/assets/images/carnival.jpeg",
        caption: "Sanjay & Simran soaking in the carnival vibrancy",
        sanjay: "/Sanjay_wedding_invite/assets/images/carnival.jpeg",
        simran: "/Sanjay_wedding_invite/assets/images/carnival.jpeg",
        captionSanjay: "Sanjay soaking in the carnival vibrancy",
        captionSimran: "Simran enjoying the joyous carnival festivities",
      },
    },
    {
      id: "baharan",
      number: "03",
      name: "Pujya Behrana Sahib",
      day: "day1",
      dayLabel: "Day 1 – 3 January 2027",
      date: "2027-01-03",
      dateFormatted: "3 January 2027",
      time: "6:30 PM",
      time24: "18:30",
      venueName: "Ringing Bells, Near Ring Road",
      address: "Ringing Bells, Near Ring Road,Ahmedabad , Gujarat",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ringing+Bells+Near+Ring+Road",
      themeColor: "#801F3D",
      badgeColor: "bg-maroon text-gold-light",
      slogan: "Ayo Lal Sabhai Chao Jhulelal — Divine Sindhi Blessings",
      description:
        "The revered Sindhi spiritual celebration honoring Isht Dev Lord Sai Jhulelal. Adorned with sacred Baharan Jyot, Lal Chhejj, brass diyas, Akho, and heartfelt Sindhi devotional hymns praying for boundless prosperity.",
      culturalSignificance:
        "Carrying forward rich Sindhi cultural heritage, the Baharan Saheb is adorned with fresh dough, cloves, cardamom, flowers and an unbroken oil flame, invoking Sai Jhulelal's eternal grace upon the couple.",
      iconType: "baharan",
      images: {
        couple: "/Sanjay_wedding_invite/assets/images/baharana.jfif",
        caption: "Sanjay & Simran taking divine blessings of Lord Jhulelal",
        sanjay: "/Sanjay_wedding_invite/assets/images/baharan-sanjay.jpg",
        simran: "/Sanjay_wedding_invite/assets/images/baharan-simran.jpg",
        captionSanjay: "Sanjay offering reverence at Baharan Saheb",
        captionSimran: "Simran taking divine blessings of Lord Jhulelal",
      },
    },
    {
      id: "ring-ceremony",
      number: "04",
      name: "Ring Ceremony",
      day: "day1",
      dayLabel: "Day 1 – 3 January 2027",
      date: "2027-01-03",
      dateFormatted: "3 January 2027",
      time: "8:30 PM",
      time24: "20:30",
      venueName: "Ringing Bells, Near Ring Road",
      address: "Ringing Bells, Near Ring Road,Ahmedabad , Gujarat",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ringing+Bells+Near+Ring+Road",
      themeColor: "#D8B56D",
      badgeColor: "bg-gold text-burgundy",
      slogan: "A Promise Sealed in Gold & Starlit Elegance",
      description:
        "An enchanting evening where Sanjay & Simran exchange rings of devotion, followed by celebratory toasts, musical performances, dinner, and dancing under the stars.",
      culturalSignificance:
        "The auspicious formal betrothal celebrating everlasting commitment, mutual love, and the joy of two souls promising their tomorrows to one another.",
      iconType: "ring",
      images: {
        couple: "/Sanjay_wedding_invite/assets/images/ring-ceremony.jpeg",
        caption: "Sanjay & Simran exchanging rings of eternal devotion",
        sanjay: "/Sanjay_wedding_invite/assets/images/ring-sanjay.jpg",
        simran: "/Sanjay_wedding_invite/assets/images/ring-simran.jpg",
        captionSanjay: "Sanjay ready for the engagement celebration",
        captionSimran: "Simran radiating elegance for the ring exchange",
      },
    },

    // DAY 2 – 4 JANUARY 2027
    {
      id: "sathsod",
      number: "05",
      name: "Saath Shagun",
      day: "day2",
      dayLabel: "Day 2 – 4 January 2027",
      date: "2027-01-04",
      dateFormatted: "4 January 2027",
      time: "10:00 AM",
      time24: "10:00",
      venueName: "Ringing Bells, Near Ring Road",
      address: "Ringing Bells, Near Ring Road,Ahmedabad , Gujarat",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ringing+Bells+Near+Ring+Road",
      themeColor: "#24765B",
      badgeColor: "bg-emerald text-white",
      slogan: "Sacred Morning Rites & Traditional Ghari Pooja",
      description:
        "The traditional ritual heralding the wedding day rituals, invoking familial ancestry, prosperity and warding off any negativity with sacred turmeric, wheat, and floral blessings.",
      culturalSignificance:
        "A deep-rooted ritual filled with sisterly blessings, motherly love, and ceremonial grinding of wheat, symbolizing unshakeable familial foundation and sustenance.",
      iconType: "sathsod",
      images: {
        couple: "/Sanjay_wedding_invite/assets/images/sath.jfif",
        caption: "Sanjay & Simran participating in sacred morning rituals",
        sanjay: "/Sanjay_wedding_invite/assets/images/sathsod-sanjay.jpg",
        simran: "/Sanjay_wedding_invite/assets/images/sathsod-simran.jpg",
        captionSanjay: "Sanjay partaking in the traditional Sathsod rituals",
        captionSimran: "Simran during the blessed morning rituals",
      },
    },
    {
      id: "dikh",
      number: "06",
      name: "Dikh",
      day: "day2",
      dayLabel: "Day 2 – 4 January 2027",
      date: "2027-01-04",
      dateFormatted: "4 January 2027",
      time: "2:00 PM",
      time24: "14:00",
      venueName: "Ringing Bells, Near Ring Road",
      address: "Ringing Bells, Near Ring Road,Ahmedabad , Gujarat",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ringing+Bells+Near+Ring+Road",
      themeColor: "#F4A340",
      badgeColor: "bg-saffron text-burgundy",
      slogan: "Traditional Shagun & Auspicious Auspices",
      description:
        "A graceful family ceremony where shagun, dry fruits, sweets and ancestral blessings are exchanged amidst heartfelt smiles, songs, and traditional customs.",
      culturalSignificance:
        "Deepening the bond between both maternal and paternal extended families, showering affection and welcoming the groom and bride into each other's lineage.",
      iconType: "dikh",
      images: {
        couple: "/Sanjay_wedding_invite/assets/images/dikh.jpg",
        caption: "Sanjay & Simran receiving family shagun and blessings",
        sanjay: "/Sanjay_wedding_invite/assets/images/dikh.jpg",
        simran: "/Sanjay_wedding_invite/assets/images/dikh.jpg",
        captionSanjay: "Sanjay receiving traditional shagun and blessings",
        captionSimran: "Simran participating in the auspicious Dikh custom",
      },
    },
    {
      id: "bharat",
      number: "07",
      name: "Barat",
      day: "day2",
      dayLabel: "Day 2 – 4 January 2027",
      date: "2027-01-04",
      dateFormatted: "4 January 2027",
      time: "4:00 PM",
      time24: "16:00",
      venueName: "Ringing Bells, Near Ring Road",
      address: "Ringing Bells, Near Ring Road,Ahmedabad , Gujarat",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ringing+Bells+Near+Ring+Road",
      themeColor: "#801F3D",
      badgeColor: "bg-maroon text-gold-light",
      slogan: "The Royal Groom's Procession & Festive Dhol",
      description:
        "The grand Baraat procession! Sanjay arrives in royal majesty accompanied by dancing cousins, joyous family members, thumping Punjabi dhol, brass bands, and radiant celebrations.",
      culturalSignificance:
        "The triumphant, joyful march of the groom and his entire family and friends towards the wedding venue to claim his bride with respect, pride and boundless song.",
      iconType: "bharat",
      images: {
        couple: "/Sanjay_wedding_invite/assets/images/barat.png",
        caption: "Sanjay leading the grand Baraat procession towards Simran",
        sanjay: "/Sanjay_wedding_invite/assets/images/bharat-sanjay.jpg",
        simran: "/Sanjay_wedding_invite/assets/images/bharat-simran.jpg",
        captionSanjay: "Sanjay leading the grand Baraat procession",
        captionSimran: "Simran preparing for the Baraat's arrival",
      },
    },
    {
      id: "wedding-ceremony",
      number: "08",
      name: "Hasth Milap",
      day: "day2",
      dayLabel: "Day 2 – 4 January 2027",
      date: "2027-01-04",
      dateFormatted: "4 January 2027",
      time: "6:00 PM",
      time24: "18:00",
      venueName: "Ringing Bells, Near Ring Road",
      address: "Ringing Bells, Near Ring Road,Ahmedabad , Gujarat",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ringing+Bells+Near+Ring+Road",
      themeColor: "#571C35",
      badgeColor: "bg-burgundy text-gold-light",
      slogan: "Sacred Pheras & The Eternal Seven Vows",
      description:
        "The main Hindu wedding ceremony. Before the sacred Agni fire, amidst chanted Vedic shlokas, Jaimala garland exchange, Kanyadaan, and the sacred Saptapadi (Seven Pheras), Sanjay & Simran become one.",
      culturalSignificance:
        "The eternal soul union ordained by destiny and sanctified by Vedic traditions, uniting hearts, families, and lifetimes in mutual devotion and righteousness (Dharma, Artha, Kama, Moksha).",
      iconType: "wedding",
      images: {
        couple: "/Sanjay_wedding_invite/assets/images/wedding.jfif",
        caption: "Sanjay & Simran taking the sacred seven pheras at the Mandap",
        sanjay: "/Sanjay_wedding_invite/assets/images/wedding-sanjay.jpg",
        simran: "/Sanjay_wedding_invite/assets/images/wedding-simran.jpg",
        captionSanjay: "Sanjay at the sacred Mandap altar",
        captionSimran: "Simran entering in bridal splendor for the Jaimala",
      },
    },
    {
      id: "reception",
      number: "09",
      name: "Reception",
      day: "day2",
      dayLabel: "Day 2 – 4 January 2027",
      date: "2027-01-04",
      dateFormatted: "4 January 2027",
      time: "8:30 PM",
      time24: "20:30",
      venueName: "Ringing Bells, Near Ring Road",
      address: "Ringing Bells, Near Ring Road,Ahmedabad , Gujarat",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ringing+Bells+Near+Ring+Road",
      themeColor: "#542746",
      badgeColor: "bg-plum text-gold-light",
      slogan: "A Grand Gala Dinner Celebrating Love & Kinship",
      description:
        "A magnificent reception banquet to felicitate the newly wedded couple Sanjay & Simran. An unforgettable night of gourmet culinary feasts, heartfelt speeches, photography and jubilant music.",
      culturalSignificance:
        "The ceremonial public introduction of the newlyweds as husband and wife to extended family, close friends, and well-wishers.",
      iconType: "reception",
      images: {
        couple: "/Sanjay_wedding_invite/assets/images/receiption.jpeg",
        caption: "Sanjay & Simran welcoming loved ones as newlyweds",
        sanjay: "/Sanjay_wedding_invite/assets/images/receiption.jpeg",
        simran: "/Sanjay_wedding_invite/assets/images/receiption.jpeg",
        captionSanjay: "Sanjay on stage welcoming family and friends",
        captionSimran: "Simran as the radiant newly wedded bride",
      },
    },
  ],

  cousinsInvitation: {
    heading: "ONE LAST INVITATION, WITH LOTS OF LOVE!",
    subheading: "From the lively brigade that keeps the family laughing and dancing!",
    message: `Dear Family & Friends,

The celebrations are incomplete without your presence!

With excitement in our hearts and smiles on our faces, we, the cousins of Sanjay, warmly invite you to join us in celebrating this beautiful new beginning.

Come bless the couple, enjoy every celebration, dance with us, laugh with us and make memories that will last forever.

Your presence will make our celebrations even more special!

With love,

THE COUSINS OF SANJAY ❤️`,
    signOff: "THE COUSINS OF SANJAY ❤️",
    seeYouText: "SEE YOU AT THE WEDDING!",
    cousinsList: [
      {
        name: "Dolly",
        photo: "/Sanjay_wedding_invite/assets/images/cousins-1.jpg",
      },
      {
        name: "Harshi",
        photo: "/Sanjay_wedding_invite/assets/images/cousins-2.jpg",
      },
      {
        name: "Divya",
        photo: "/Sanjay_wedding_invite/assets/images/cousins-3.jpg",
      },
      {
        name: "Ronak",
        photo: "/Sanjay_wedding_invite/assets/images/cousins-4.jpg",
      },
      {
        name: "Shubham",
        photo: "/Sanjay_wedding_invite/assets/images/cousins-5.jpg",
      },
      {
        name: "Himanshi",
        photo: "/Sanjay_wedding_invite/assets/images/cousins-6.jpg",
      },
      {
        name: "Jayesh",
        photo: "/Sanjay_wedding_invite/assets/images/cousins-6.jpg",
      },
      {
        name: "Palak",
        photo: "/Sanjay_wedding_invite/assets/images/cousins-6.jpg",
      },
    ],
  },

  music: {
    audioPath: "/Sanjay_wedding_invite/assets/music/wedding-song.mp3",
    title: "Mangalam Mangal Dhwani & Shehnai Raga",
    artist: "Auspicious Indian Wedding Ensemble",
  },

  contact: {
    groomFamilyRsvp: [
      {
        name: "[RSVP CONTACT 1 - GROOM'S SIDE]",
        phone: "+91 98765 43210",
        relation: "Groom's Family Coordinator",
      },
      {
        name: "[RSVP CONTACT 2 - GROOM'S SIDE]",
        phone: "+91 98765 43211",
        relation: "Guest Hospitality & Accommodations",
      },
    ],
    supportEmail: "celebrate@sanjaysimranwedding.com",
  },
};
