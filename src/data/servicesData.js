export const serviceCategories = [
  { id: "all", name: "All Services" },
  { id: "haircuts", name: "Haircuts & Styling" },
  { id: "beard", name: "Beard & Grooming" },
  { id: "combos", name: "Combo Packages" },
  { id: "treatments", name: "VIP & Treatments" }
];

export const servicesData = [
  // Haircuts & Styling
  {
    id: "sig-haircut",
    name: "Signature Mens Haircut",
    category: "haircuts",
    price: 35.00,
    priceDisplay: "$35.00",
    duration: "40 min",
    description: "A signature precision cut tailored to your head shape, including a refreshing wash and style setup.",
    included: [
      "Consultation on head shape & lifestyle",
      "Precision shear & clipper cut",
      "Invigorating shampoo & scalp cleanse",
      "Blow dry & premium matte pomade finish"
    ],
    popular: true
  },
  {
    id: "skin-fade-taper",
    name: "Skin Fade & Taper",
    category: "haircuts",
    price: 40.00,
    priceDisplay: "$40.00",
    duration: "45 min",
    description: "Expertly blended skin-tight fades, shadow fades, and premium taper cuts.",
    included: [
      "Foil shaver / zero-gap finish",
      "Seamless blend with razor edge line",
      "Shear work on top",
      "Aftershave tonic & styling"
    ],
    popular: true
  },
  {
    id: "line-up-edging",
    name: "Line-Up & Edging",
    category: "haircuts",
    price: 20.00,
    priceDisplay: "$20.00",
    duration: "20 min",
    description: "Clean, fast trim to keep your line sharp between full haircuts.",
    included: [
      "Crisp hairline perimeter detailing",
      "Temple taper & neck clean up",
      "Straight razor edging finish",
      "Cooling antiseptic splash"
    ],
    popular: false
  },
  {
    id: "scissor-texture",
    name: "Modern Scissor Cut & Texture",
    category: "haircuts",
    price: 45.00,
    priceDisplay: "$45.00",
    duration: "45 min",
    description: "Tailored shear-over-comb and point-cutting technique for medium to longer men's hair with natural flow.",
    included: [
      "Full shear architecture",
      "Deep texturizing & weight removal",
      "Conditioning rinse",
      "Sea salt spray & matte paste styling"
    ],
    popular: false
  },

  // Beard & Grooming
  {
    id: "beard-trim-sculpt",
    name: "Beard Trim & Sculpting",
    category: "beard",
    price: 25.00,
    priceDisplay: "$25.00",
    duration: "30 min",
    description: "Premium beard shaping, lining, and hot towel texturizing for a clean, sharp look.",
    included: [
      "Custom shape trimming & debulking",
      "Cheek & jawline straight razor edging",
      "Hot towel essential oil wrap",
      "Hydrating beard balm & conditioning"
    ],
    popular: true
  },
  {
    id: "royal-hot-towel",
    name: "Royal Hot Towel Shave",
    category: "beard",
    price: 35.00,
    priceDisplay: "$35.00",
    duration: "35 min",
    description: "The ultimate classic shave experience using hot towels, straight razor edging, and soothing aftershave oils.",
    included: [
      "Dual steamed eucalyptus towels",
      "Rich warm lather massage",
      "Traditional single-edge straight razor shave",
      "Cold towel pore close & sandalwood balm"
    ],
    popular: false
  },
  {
    id: "beard-oil-steam",
    name: "Beard Hydration & Steam Therapy",
    category: "beard",
    price: 20.00,
    priceDisplay: "$20.00",
    duration: "25 min",
    description: "Intense moisture infusion with hot steam and organic argan oils to tame coarse facial hair.",
    included: [
      "Warm facial steam opening pores",
      "Botanical oil deep conditioning",
      "Beard comb-out & alignment"
    ],
    popular: false
  },

  // Combo Packages
  {
    id: "executive-combo",
    name: "The Executive Combo (Cut & Beard)",
    category: "combos",
    price: 55.00,
    priceDisplay: "$55.00",
    duration: "60 min",
    description: "Our signature precision haircut combined with expert beard detailing for the complete look.",
    included: [
      "Signature Haircut or Skin Fade of choice",
      "Full Beard trim, sculpt & razor outline",
      "Hot towel refresh with essential oils",
      "Complete wash, blow-dry & styling finish"
    ],
    popular: true,
    badge: "Most Requested"
  },
  {
    id: "catrines-vip",
    name: "The Catrines VIP Experience",
    category: "combos",
    price: 75.00,
    priceDisplay: "$75.00",
    duration: "75 min",
    description: "The full royal treatment: haircut, beard sculpting, hot towel shave, detoxifying black mask & scalp massage.",
    included: [
      "Precision cut & skin fade",
      "Full beard sculpt & hot towel straight razor",
      "Deep cleansing charcoal peel mask",
      "Invigorating tea tree scalp massage",
      "Complimentary beverage & VIP setup"
    ],
    popular: true,
    badge: "Luxury Choice"
  },

  // VIP & Treatments
  {
    id: "young-gentleman",
    name: "Young Gentleman Cut (12 & Under)",
    category: "treatments",
    price: 28.00,
    priceDisplay: "$28.00",
    duration: "30 min",
    description: "Patient, clean precision haircut for the young men in the family.",
    included: [
      "Gentle clipper & shear cut",
      "Styling gel or paste",
      "Lollipop / treat"
    ],
    popular: false
  },
  {
    id: "distinguished-senior",
    name: "Senior Distinguished Cut (65+)",
    category: "treatments",
    price: 30.00,
    priceDisplay: "$30.00",
    duration: "30 min",
    description: "Classic gentleman haircut with neck taper, eyebrow trim, and ear grooming.",
    included: [
      "Gentleman's scissor & clipper cut",
      "Eyebrow & ear hair detailing",
      "Hot lather neck shave"
    ],
    popular: false
  }
];
