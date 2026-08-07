// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  kcal?: number;
  price?: string;
  image: string; // real product photo URL
  color: string; // fallback gradient accent
  weight?: string;
  origin?: string;
  spiciness?: number; // 1 to 5 scale
  ingredients?: string[];
  tastingNotes?: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'deccan-classics',
    label: 'Deccan Classics',
    icon: '🌶️',
    description: 'Timeless spice blends rooted in Deccan tradition'
  },
  {
    id: 'hyderabadi-masala',
    label: 'Hyderabadi Masala',
    icon: '🍛',
    description: 'The royal flavors of Hyderabad\'s culinary legacy'
  },
  {
    id: 'signature-quality',
    label: 'Signature Quality',
    icon: '🌺',
    description: 'Our premium reserve — limited, exquisite, unforgettable'
  },
  {
    id: 'paste-with-flavors',
    label: 'Paste With Flavors',
    icon: '🌿',
    description: 'Ready-to-use pastes of uncompromising freshness'
  }
];

export const products: Product[] = [
  // DECCAN CLASSICS
  {
    id: 'black-pepper',
    name: 'Black Pepper',
    description: 'Single-origin Malabar black peppercorns, stone-ground to preserve volatile oils. A sharp, lingering heat with floral undertones — the cornerstone of every Deccan kitchen.',
    category: 'deccan-classics',
    tags: ['Signature Spice', '110 Kcal'],
    kcal: 110,
    image: '/products/black-pepper.png',
    color: '#2a2a2a',
    weight: '100g',
    origin: 'Malabar Coast, Kerala',
    spiciness: 4,
    ingredients: ['100% Malabar Black Peppercorns'],
    tastingNotes: 'Sharp pine, warm wood, citrus finish'
  },
  {
    id: 'turmeric-powder',
    name: 'Turmeric Powder',
    description: 'Cold-processed Lakadong turmeric from Meghalaya — 8.5% curcumin content, sun-dried for 28 days. A rich, earthy warmth that colours and heals in equal measure.',
    category: 'deccan-classics',
    tags: ['Superfood', '250 Kcal'],
    kcal: 250,
    image: '/products/turmeric-powder.png',
    color: '#b8860b',
    weight: '100g',
    origin: 'Lakadong, Meghalaya',
    spiciness: 1,
    ingredients: ['100% Lakadong Turmeric Root'],
    tastingNotes: 'Earthy, peppery warmth, vivid golden hue'
  },
  {
    id: 'cumin-powder',
    name: 'Cumin Powder',
    description: 'Rajasthan-sourced cumin, slow-roasted at 80°C to unlock its full aromatic depth. Smoky, nutty, and complex — the base note every biryani and dal depends on.',
    category: 'deccan-classics',
    tags: ['280 Kcal'],
    kcal: 280,
    image: '/products/cumin-powder.png',
    color: '#8b5e3c',
    weight: '100g',
    origin: 'Nagaur, Rajasthan',
    spiciness: 2,
    ingredients: ['Roasted Cumin Seeds'],
    tastingNotes: 'Warm, earthy, toasted nutty aroma'
  },
  {
    id: 'coriander-powder',
    name: 'Coriander Powder',
    description: 'Dhania sourced from Madhya Pradesh\'s fertile plains. Gently roasted, coarse-ground to retain oils. Bright citrus notes with a sweet, warm finish.',
    category: 'deccan-classics',
    tags: ['280 Kcal'],
    kcal: 280,
    image: '/products/coriander-powder.png',
    color: '#5d7a3e',
    weight: '100g',
    origin: 'Guna, Madhya Pradesh',
    spiciness: 1,
    ingredients: ['Green Coriander Seeds'],
    tastingNotes: 'Bright lemon-citrus, sweet herbal warmth'
  },
  {
    id: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    description: 'Byadgi and Kashmiri chillies blended in a 70:30 ratio — vivid crimson colour, moderate heat, and a fruity depth that builds slowly. Never harsh, always layered.',
    category: 'deccan-classics',
    tags: ['170 Kcal'],
    kcal: 170,
    image: '/products/red-chilli-powder.png',
    color: '#8b1a1a',
    weight: '100g',
    origin: 'Byadgi, Karnataka',
    spiciness: 5,
    ingredients: ['Sun-dried Byadgi & Kashmiri Red Chillies'],
    tastingNotes: 'Smoky sweet paprika, slow-building crimson warmth'
  },

  // HYDERABADI MASALA
  {
    id: 'biryani-masala',
    name: 'Biryani Masala',
    description: 'Fragrant long-grain Basmati rice infused with saffron threads, layered with incredibly tender pieces of slow-cooked lamb and a symphony of aromatic Indian spices.',
    category: 'hyderabadi-masala',
    tags: ['Royal Heritage', '880 Kcal'],
    kcal: 880,
    image: '/products/biryani-masala.png',
    color: '#c8962a',
    weight: '150g',
    origin: 'Old City, Hyderabad',
    spiciness: 4,
    ingredients: ['Shahi Jeera', 'Kashmiri Saffron', 'Star Anise', 'Green Cardamom', 'Mace', 'Nutmeg', 'Cinnamon'],
    tastingNotes: 'Imperial saffron, sweet floral warmth, regal spice complexity'
  },
  {
    id: 'tandoori-masala',
    name: 'Tandoori Masala',
    description: 'Majestic jumbo prawns marinated in a vibrant blend of spiced yoghurt and aromatic herbs, steamed to smoky perfection in our traditional tandoor oven.',
    category: 'hyderabadi-masala',
    tags: ['980 Kcal'],
    kcal: 980,
    image: '/products/tandoori-masala.png',
    color: '#cc4a1a',
    weight: '150g',
    origin: 'Deccan Kitchens',
    spiciness: 4,
    ingredients: ['Smoky Paprika', 'Garlic', 'Ginger', 'Kasoori Methi', 'Black Salt', 'Mustard Oil Powder'],
    tastingNotes: 'Wood-smoked char, tangy garlic-fenugreek top notes'
  },
  {
    id: 'mutton-masala',
    name: 'Mutton Masala',
    description: 'Slow-braised black Angus shanks, simmered overnight for ultimate creaminess, finished with a touch of butter and a delicate infusion of precious black truffle oil.',
    category: 'hyderabadi-masala',
    tags: ['415 Kcal'],
    kcal: 415,
    image: '/products/mutton-masala.png',
    color: '#7a3c2a',
    weight: '150g',
    origin: 'Nizami Kitchens',
    spiciness: 3,
    ingredients: ['Stone Ground Garam Masala', 'Black Cardamom', 'Cloves', 'Roasted Onion Powder'],
    tastingNotes: 'Deep savory marrow notes, rich clove & pepper finish'
  },

  // SIGNATURE QUALITY
  {
    id: 'wagyu-tataki-umami',
    name: 'Wagyu Tataki Umami',
    description: 'Carefully sourced A5 grade Wagyu beef, seared to retain its melt-in-your-mouth texture, served with a classic ponzu dressing, fresh ginger, spring onion, and fine soy-braised scallions.',
    category: 'signature-quality',
    tags: ['Reserve', '380 Kcal'],
    kcal: 380,
    price: '$75',
    image: '/products/wagyu-tataki-umami.png',
    color: '#4a3020',
    weight: '120g',
    origin: 'Miyazaki, Japan x Deccan Spice Lab',
    spiciness: 2,
    ingredients: ['Aged Soy Powder', 'Shiitake Umami Extract', 'Black Truffle Flakes', 'Toasted Sesame'],
    tastingNotes: 'Velvety rich umami, toasted sesame, whisper of truffle'
  },
  {
    id: 'truffle-edamame-silk',
    name: 'Truffle Edamame Silk',
    description: 'Young, tender edamame pods steamed and then tossed with fragrant white truffle oil and a dusting of delicate sea salt flakes.',
    category: 'signature-quality',
    tags: ['960 Kcal'],
    kcal: 960,
    price: '$28',
    image: '/products/truffle-edamame-silk.png',
    color: '#3a4a2a',
    weight: '100g',
    origin: 'Piedmont x Deccan Reserve',
    spiciness: 1,
    ingredients: ['White Truffle Oil', 'Maldon Flake Salt', 'Freeze-dried Green Edamame'],
    tastingNotes: 'Silky forest truffle, crisp mineral sea salt'
  },
  {
    id: 'king-crab-delight',
    name: 'King Crab Delight',
    description: 'Succulent legs of Alaskan king crab, gently steamed to preserve their natural sweetness, accompanied by a delicate yuzu-infused butter and a sprinkle of Maldon sea salt.',
    category: 'signature-quality',
    tags: ['310 Kcal'],
    kcal: 310,
    image: '/products/king-crab-delight.png',
    color: '#8b3020',
    weight: '120g',
    origin: 'Alaskan Waters',
    spiciness: 2,
    ingredients: ['Yuzu Butter Flakes', 'Dried Kafir Lime Leaf', 'Pink Himalayan Salt'],
    tastingNotes: 'Sweet citrus yuzu, subtle marine sweetness'
  },
  {
    id: 'toro-sashimi-azure',
    name: 'Toro Sashimi Azure',
    description: 'Exquisite slices of premium bluefin tuna belly, prized for its marbling and delicate flavor, served simply with freshly grated wasabi and artisanal soy sauce.',
    category: 'signature-quality',
    tags: ['270 Kcal'],
    kcal: 270,
    image: '/products/toro-sashimi-azure.png',
    color: '#1a3a5a',
    weight: '100g',
    origin: 'Pacific Oceanside',
    spiciness: 2,
    ingredients: ['Freshly Grated Wasabi Rhizome', 'Aged Soy Reduction', 'Micro Herbs'],
    tastingNotes: 'Crisp green horseradish punch, deep savory soy'
  },

  // PASTE WITH FLAVORS
  {
    id: 'tikka-masala-paste',
    name: 'Tikka Masala',
    description: 'Slow-braised veal shank, fall-off-the-bone tender, served atop a bed of house-blended ancient-grain risotto, finished with a sprinkle of fresh gremolata.',
    category: 'paste-with-flavors',
    tags: ['Chef Special', '750 Kcal'],
    kcal: 750,
    image: '/products/tikka-masala-paste.png',
    color: '#b85c2a',
    weight: '200g jar',
    origin: 'Punjab / Deccan Fusion',
    spiciness: 3,
    ingredients: ['Charred Tomato Puree', 'Cashew Paste', 'Clarified Ghee', 'Fresh Fenugreek Leaves'],
    tastingNotes: 'Creamy butter tomato, smoky tandoori aromatics'
  },
  {
    id: 'green-curry-paste',
    name: 'Green Curry',
    description: 'Delicate, handmade ravioli filled with sweet chunks of lobster, set in a rich and intensely flavoured bisque reduction.',
    category: 'paste-with-flavors',
    tags: ['480 Kcal'],
    kcal: 480,
    image: '/products/green-curry-paste.png',
    color: '#2a6a3a',
    weight: '200g jar',
    origin: 'Bangkok x Deccan Herb Garden',
    spiciness: 4,
    ingredients: ['Thai Green Chillies', 'Lemongrass', 'Galangal', 'Kaffir Lime Peel', 'Sweet Basil'],
    tastingNotes: 'Zesty lemongrass, fragrant basil, vibrant green heat'
  },
  {
    id: 'vindaloo-paste',
    name: 'Vindaloo Paste',
    description: 'A classic trio of creamy Alaskan polenta, served with a cheerful array of ripe heirloom tomatoes and drizzled with fragrant, chilli-pressed basil oil.',
    category: 'paste-with-flavors',
    tags: ['500 Kcal'],
    kcal: 500,
    image: '/products/vindaloo-paste.png',
    color: '#8b2020',
    weight: '200g jar',
    origin: 'Goan Coastal Heritage',
    spiciness: 5,
    ingredients: ['Palm Vinegar', 'Garlic Cloves', 'Dried Red Chillies', 'Cinnamon Bark', 'Black Pepper'],
    tastingNotes: 'Sharp tangy vinegar, fiery roasted chilli depth'
  },
  {
    id: 'truffle-tagliatelle',
    name: 'Truffle Tagliatelle Dream',
    description: 'Freshly made nest of tagliatelle, dressed in a decadent and creamy sauce infused with the earthy scent of black truffle, finished with shavings of aged Parmesan cheese.',
    category: 'paste-with-flavors',
    tags: ['650 Kcal'],
    kcal: 650,
    image: '/products/truffle-tagliatelle.png',
    color: '#6a4a2a',
    weight: '200g jar',
    origin: 'Tuscany x Deccan Spice Reserve',
    spiciness: 1,
    ingredients: ['Black Summer Truffle', 'Parmigiano-Reggiano', 'Cultured Cream', 'White Pepper'],
    tastingNotes: 'Rich earthy truffle, salty aged cheese, velvety cream'
  }
];
