// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  price?: string;
  image: string; // real product photo URL
  color: string; // fallback gradient accent
  weight?: string; // e.g. '100g / 500g / 1 kg'
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
    tags: ['Signature Spice', '100g / 500g / 1 kg'],
    image: '/products/black-pepper.png',
    color: '#2a2a2a',
    weight: '100g / 500g / 1 kg',
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
    tags: ['Superfood', '250g / 500g / 1 kg'],
    image: '/products/turmeric-powder.png',
    color: '#b8860b',
    weight: '250g / 500g / 1 kg',
    origin: 'Lakadong, Meghalaya',
    spiciness: 1,
    ingredients: ['100% Lakadong Turmeric Root'],
    tastingNotes: 'Earthy, peppery warmth, vivid golden hue'
  },
  {
    id: 'cumin-powder',
    name: 'Cumin Powder',
    description: 'Rajasthan-sourced cumin, slow-roasted at controlled temperatures to unlock its full aromatic depth. Smoky, nutty, and complex — the base note every biryani and dal depends on.',
    category: 'deccan-classics',
    tags: ['Stone Ground', '100g / 500g / 1 kg'],
    image: '/products/cumin-powder.png',
    color: '#8b5e3c',
    weight: '100g / 500g / 1 kg',
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
    tags: ['Aromatic', '250g / 500g / 1 kg'],
    image: '/products/coriander-powder.png',
    color: '#5d7a3e',
    weight: '250g / 500g / 1 kg',
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
    tags: ['Sun-Dried', '250g / 500g / 1 kg'],
    image: '/products/red-chilli-powder.png',
    color: '#8b1a1a',
    weight: '250g / 500g / 1 kg',
    origin: 'Byadgi, Karnataka',
    spiciness: 5,
    ingredients: ['Sun-dried Byadgi & Kashmiri Red Chillies'],
    tastingNotes: 'Smoky sweet paprika, slow-building crimson warmth'
  },

  // HYDERABADI MASALA
  {
    id: 'biryani-masala',
    name: 'Hyderabadi Biryani Masala',
    description: 'Signature royal Nizami blend crafted with Shahi Jeera, Kashmiri saffron threads, green cardamom, star anise, and whole ground spices for authentic slow-cooked dum biryani.',
    category: 'hyderabadi-masala',
    tags: ['Royal Heritage', '250g / 500g / 1 kg'],
    image: '/products/hyderabadi-biryani-masala.jpg',
    color: '#c8962a',
    weight: '250g / 500g / 1 kg',
    origin: 'Old City, Hyderabad',
    spiciness: 4,
    ingredients: ['Shahi Jeera', 'Kashmiri Saffron', 'Star Anise', 'Green Cardamom', 'Mace', 'Nutmeg', 'Cinnamon'],
    tastingNotes: 'Imperial saffron, sweet floral warmth, regal spice complexity'
  },
  {
    id: 'tandoori-masala',
    name: 'Tandoori Masala',
    description: 'A vibrant, wood-smoked blend of roasted paprika, garlic, ginger, and kasoori methi created for marinating succulent meats, paneer, and tandoor grills.',
    category: 'hyderabadi-masala',
    tags: ['Wood-Smoked', '250g / 500g / 1 kg'],
    image: '/products/Tandori-masala.png',
    color: '#cc4a1a',
    weight: '250g / 500g / 1 kg',
    origin: 'Deccan Kitchens',
    spiciness: 4,
    ingredients: ['Smoky Paprika', 'Garlic', 'Ginger', 'Kasoori Methi', 'Black Salt', 'Mustard Oil Powder'],
    tastingNotes: 'Wood-smoked char, tangy garlic-fenugreek top notes'
  },
  {
    id: 'mutton-masala',
    name: 'Mutton Masala',
    description: 'Slow-ground royal Nizami blend with black cardamom, cloves, and roasted onion powder for rich, slow-simmered mutton curries, korma, and gravies.',
    category: 'hyderabadi-masala',
    tags: ['Nizami Recipe', '250g / 500g / 1 kg'],
    image: '/products/Mutton-masala.png',
    color: '#7a3c2a',
    weight: '250g / 500g / 1 kg',
    origin: 'Nizami Kitchens',
    spiciness: 3,
    ingredients: ['Stone Ground Garam Masala', 'Black Cardamom', 'Cloves', 'Roasted Onion Powder'],
    tastingNotes: 'Deep savory marrow notes, rich clove & pepper finish'
  },

  // SIGNATURE QUALITY
  {
    id: 'imperial-crimson-box',
    name: 'Imperial Crimson Reserve',
    description: 'Handcrafted royal gift box and pouch containing our finest reserve spice blend, packaged with regal gold filigree for extraordinary culinary occasions.',
    category: 'signature-quality',
    tags: ['Imperial Reserve', '500g / 1 kg Pack'],
    price: '$75',
    image: '/products/truffle-edamame-silk.png',
    color: '#6a1a24',
    weight: '500g / 1 kg Pack',
    origin: 'Deccan Royal Spice Lab',
    spiciness: 2,
    ingredients: ['Aged Saffron Strands', 'Rare Wild Cardamom', 'Mace Blades', 'Imperial Gold Leaf Powder'],
    tastingNotes: 'Velvety floral warmth, lingering sweet royal spice'
  },
  {
    id: 'emerald-heritage-tins',
    name: 'Emerald Heritage Spice Tins',
    description: 'Airtight royal emerald metal tins preserving precious whole spices and exclusive single-estate harvests, sealed against light and moisture.',
    category: 'signature-quality',
    tags: ['Limited Edition', '4 x 250g Tins (1 kg)'],
    price: '$65',
    image: '/products/king-crab-delight.png',
    color: '#1b4d3e',
    weight: '4 x 250g Tins (1 kg)',
    origin: 'Western Ghats Private Estates',
    spiciness: 2,
    ingredients: ['Green Tellicherry Peppercorns', 'Wild Cloves', 'True Ceylon Cinnamon'],
    tastingNotes: 'Crisp botanical sweetness, clean aromatic warmth'
  },
  {
    id: 'sapphire-royal-tins',
    name: 'Sapphire Royal Spice Tins',
    description: 'Deep royal sapphire tin set designed for royal banquets, protecting rare whole spices and heirloom peppercorns for timeless gourmet perfection.',
    category: 'signature-quality',
    tags: ['Master Reserve', '4 x 250g Tins (1 kg)'],
    price: '$70',
    image: '/products/toro-sashimi-azure.png',
    color: '#1a2a5a',
    weight: '4 x 250g Tins (1 kg)',
    origin: 'Royal Spice Sanctuary',
    spiciness: 3,
    ingredients: ['Royal Blue Poppy', 'Black Cumin', 'Smoked Cardamom Pods'],
    tastingNotes: 'Smoky, herbal depth with sharp elegant finish'
  },
  {
    id: 'hyderabadi-royal-trio-signature',
    name: 'Hyderabadi Royal Trio Reserve',
    description: 'The exclusive trio collection featuring Hyderabadi Biryani Masala, Mutton Masala, and Prawns Masala in midnight blue royal foil pouches.',
    category: 'signature-quality',
    tags: ['Royal Reserve', '3 x 350g (1 kg Pack)'],
    price: '$85',
    image: '/products/wagyu-tataki-umami.png',
    color: '#1a2a5a',
    weight: '3 x 350g (1 kg Pack)',
    origin: 'Royal Nizam Spice Vaults',
    spiciness: 4,
    ingredients: ['Royal Dum Masala', 'Coastal Prawn Seasoning', 'Nizami Meat Blend'],
    tastingNotes: 'Aromatic star anise, toasted cumin, royal saffron finish'
  },

  // PASTE WITH FLAVORS
  {
    id: 'butter-chicken-paste',
    name: 'Butter Chicken Paste',
    description: 'A velvety, slow-simmered aromatic paste of sun-ripened tomatoes, cashew cream, clarified butter, and fragrant royal spices for rich, restaurant-style butter chicken.',
    category: 'paste-with-flavors',
    tags: ['Chef Special', '500g / 1 kg Jar'],
    image: '/products/Butter-Chiciken-Paste.png',
    color: '#b85c2a',
    weight: '500g / 1 kg Jar',
    origin: 'Old Delhi x Deccan Kitchens',
    spiciness: 2,
    ingredients: ['San Marzano Tomatoes', 'Cashew Paste', 'Clarified Ghee', 'Kasoori Methi', 'Cardamom'],
    tastingNotes: 'Rich velvety tomato cream, sweet fenugreek, subtle warm spice'
  },
  {
    id: 'tikka-masala-paste',
    name: 'Tikka Masala Paste',
    description: 'Charred tomato puree, roasted cumin, garlic, and royal herbs blended into a ready-to-use gourmet simmer paste for paneer, chicken, and vegetable tikka.',
    category: 'paste-with-flavors',
    tags: ['Chef Special', '500g / 1 kg Jar'],
    image: '/products/tikka-masala-paste.png',
    color: '#8b2020',
    weight: '500g / 1 kg Jar',
    origin: 'Punjab / Deccan Fusion',
    spiciness: 3,
    ingredients: ['Charred Tomato Puree', 'Cashew Paste', 'Clarified Ghee', 'Fresh Fenugreek Leaves'],
    tastingNotes: 'Creamy butter tomato, smoky tandoori aromatics'
  },
  {
    id: 'green-curry-paste',
    name: 'Green Curry Paste',
    description: 'Fresh Thai and Indian green chillies, aromatic lemongrass, sweet basil, ginger, and garden herbs crushed for authentic vibrant, aromatic curries.',
    category: 'paste-with-flavors',
    tags: ['Fresh Herbs', '500g / 1 kg Jar'],
    image: '/products/green-curry-paste.png',
    color: '#2a6a3a',
    weight: '500g / 1 kg Jar',
    origin: 'Coastal Spice Garden',
    spiciness: 4,
    ingredients: ['Green Chillies', 'Lemongrass', 'Galangal', 'Kaffir Lime Peel', 'Sweet Basil'],
    tastingNotes: 'Zesty lemongrass, fragrant basil, vibrant green heat'
  },
  {
    id: 'vindaloo-paste',
    name: 'Vindaloo Paste',
    description: 'A fiery, slow-aged paste of roasted red chillies, garlic cloves, cinnamon bark, and palm vinegar crafted for bold, tangy, deep coastal curries.',
    category: 'paste-with-flavors',
    tags: ['Fiery Spice', '500g / 1 kg Jar'],
    image: '/products/vindaloo-paste.png',
    color: '#5a2015',
    weight: '500g / 1 kg Jar',
    origin: 'Goan Coastal Heritage',
    spiciness: 5,
    ingredients: ['Palm Vinegar', 'Garlic Cloves', 'Dried Red Chillies', 'Cinnamon Bark', 'Black Pepper'],
    tastingNotes: 'Sharp tangy vinegar, fiery roasted chilli depth'
  }
];
