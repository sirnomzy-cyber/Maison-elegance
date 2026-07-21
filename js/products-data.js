// Embedded product catalog — avoids fetch() reliability issues across preview environments
const MAISON_PRODUCTS = [
  {
    "sku": "ME-WM-1042",
    "name": "Ivoire Silk Wrap Blouse",
    "collection": "Château Collection",
    "category": "Women's Fashion",
    "price": 620,
    "salePrice": null,
    "rating": 4.8,
    "reviews": 64,
    "badges": [
      "Best Seller"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Ivoire",
      "Noir"
    ],
    "materials": "100% Mulberry silk, mother-of-pearl buttons",
    "care": "Dry clean only. Store on padded hanger away from direct light.",
    "description": "Cut from double-faced mulberry silk, the Ivoire Wrap Blouse drapes with quiet fluidity across the shoulder and settles into a soft wrap at the waist. Mother-of-pearl buttons and a hand-finished collar mark it as a piece built to outlast a season.",
    "shortDescription": "Fluid mulberry silk blouse with a hand-finished wrap collar.",
    "highlights": [
      "Hand-finished collar",
      "Mother-of-pearl buttons",
      "Made in Italy",
      "Fully lined"
    ],
    "image": "https://images.unsplash.com/photo-1728318817167-902a85482317?auto=format&fit=crop&w=900&h=1200&q=80",
    "imageHover": "https://images.unsplash.com/photo-1728318817167-902a85482317?auto=format&fit=crop&w=900&h=1200&q=80&sat=-20",
    "gallery": [
      "https://images.unsplash.com/photo-1728318817167-902a85482317?auto=format&fit=crop&w=1200&h=1500&q=80",
      "https://images.unsplash.com/photo-1728318817167-902a85482317?auto=format&fit=crop&w=1200&h=1500&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1728318817167-902a85482317?auto=format&fit=crop&w=1200&h=1500&q=80&sat=-15"
    ]
  },
  {
    "sku": "ME-WM-1088",
    "name": "Alonne Tailored Wool Coat",
    "collection": "Winter Editorial",
    "category": "Women's Fashion",
    "price": 1480,
    "salePrice": 1180,
    "rating": 4.9,
    "reviews": 41,
    "badges": [
      "Limited Edition"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Camel",
      "Noir"
    ],
    "materials": "Virgin wool-cashmere blend, cupro lining",
    "care": "Professional dry clean. Store on a broad-shouldered hanger.",
    "description": "The Alonne Coat is built on a precise, single-breasted silhouette in a virgin wool-cashmere blend milled in Biella. Structured shoulders taper into a body that moves easily, finished with horn buttons and a cupro lining that skims rather than clings.",
    "shortDescription": "Single-breasted wool-cashmere coat with structured shoulders.",
    "highlights": [
      "Biella-milled wool-cashmere",
      "Horn buttons",
      "Cupro lining",
      "Made in Italy"
    ],
    "image": "https://images.unsplash.com/photo-1642174916136-e7d9247ffa1e?auto=format&fit=crop&w=900&h=1200&q=80",
    "imageHover": "https://images.unsplash.com/photo-1642174916136-e7d9247ffa1e?auto=format&fit=crop&w=900&h=1200&q=80&sat=-20",
    "gallery": [
      "https://images.unsplash.com/photo-1642174916136-e7d9247ffa1e?auto=format&fit=crop&w=1200&h=1500&q=80",
      "https://images.unsplash.com/photo-1642174916136-e7d9247ffa1e?auto=format&fit=crop&w=1200&h=1500&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1642174916136-e7d9247ffa1e?auto=format&fit=crop&w=1200&h=1500&q=80&sat=-15"
    ]
  },
  {
    "sku": "ME-MN-2031",
    "name": "Verony Merino Crewneck",
    "collection": "Essentials",
    "category": "Men's Fashion",
    "price": 340,
    "salePrice": null,
    "rating": 4.7,
    "reviews": 88,
    "badges": [
      "Best Seller"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Charcoal",
      "Ivoire",
      "Noir"
    ],
    "materials": "18.5-micron extrafine merino wool",
    "care": "Hand wash cold or dry clean. Dry flat.",
    "description": "Knitted from 18.5-micron extrafine merino, the Verony Crewneck holds its shape wash after wash while staying light enough to layer under tailoring. A ribbed collar and cuffs are finished by hand.",
    "shortDescription": "Extrafine merino crewneck built for tailoring or off-duty layering.",
    "highlights": [
      "18.5-micron merino",
      "Hand-finished ribbing",
      "Pre-shrunk",
      "Made in Portugal"
    ],
    "image": "https://images.unsplash.com/photo-1576110598658-096ae24cdb97?auto=format&fit=crop&w=900&h=1200&q=80",
    "imageHover": "https://images.unsplash.com/photo-1576110598658-096ae24cdb97?auto=format&fit=crop&w=900&h=1200&q=80&sat=-20",
    "gallery": [
      "https://images.unsplash.com/photo-1576110598658-096ae24cdb97?auto=format&fit=crop&w=1200&h=1500&q=80",
      "https://images.unsplash.com/photo-1576110598658-096ae24cdb97?auto=format&fit=crop&w=1200&h=1500&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1576110598658-096ae24cdb97?auto=format&fit=crop&w=1200&h=1500&q=80&sat=-15"
    ]
  },
  {
    "sku": "ME-MN-2077",
    "name": "Draveau Wool Tailored Blazer",
    "collection": "Signature Tailoring",
    "category": "Men's Fashion",
    "price": 1290,
    "salePrice": null,
    "rating": 4.9,
    "reviews": 33,
    "badges": [
      "New"
    ],
    "sizes": [
      "46",
      "48",
      "50",
      "52",
      "54"
    ],
    "colors": [
      "Midnight Navy",
      "Charcoal"
    ],
    "materials": "Super 130s wool, half-canvas construction",
    "care": "Dry clean only. Steam to refresh between wears.",
    "description": "Half-canvassed for a roll that only improves with wear, the Draveau Blazer is cut from Super 130s wool with a soft, natural shoulder. Horn buttons and hand-pick stitching along the lapel are the quiet signatures of a garment made to be re-tailored, not replaced.",
    "shortDescription": "Half-canvas Super 130s blazer with a soft natural shoulder.",
    "highlights": [
      "Half-canvas construction",
      "Hand-pick stitched lapel",
      "Horn buttons",
      "Made in Italy"
    ],
    "image": "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?auto=format&fit=crop&w=900&h=1200&q=80",
    "imageHover": "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?auto=format&fit=crop&w=900&h=1200&q=80&sat=-20",
    "gallery": [
      "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?auto=format&fit=crop&w=1200&h=1500&q=80",
      "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?auto=format&fit=crop&w=1200&h=1500&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?auto=format&fit=crop&w=1200&h=1500&q=80&sat=-15"
    ]
  },
  {
    "sku": "ME-HB-3015",
    "name": "Étoile Structured Top-Handle",
    "collection": "Château Collection",
    "category": "Handbags",
    "price": 2450,
    "salePrice": null,
    "rating": 5.0,
    "reviews": 27,
    "badges": [
      "Limited Edition",
      "Best Seller"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      "Cognac",
      "Noir",
      "Ivoire"
    ],
    "materials": "Full-grain calfskin, brushed gold hardware",
    "care": "Wipe with a soft dry cloth. Store in the provided dust bag.",
    "description": "Built around a single piece of full-grain calfskin, the Étoile Top-Handle holds its structure without a stitch out of place. A detachable strap and brushed gold hardware move it from desk to dinner without a second thought.",
    "shortDescription": "Structured calfskin top-handle with brushed gold hardware.",
    "highlights": [
      "Full-grain calfskin",
      "Detachable shoulder strap",
      "Suede-lined interior",
      "Made in Italy"
    ],
    "image": "https://images.unsplash.com/photo-1607702705816-81497b0a9009?auto=format&fit=crop&w=900&h=1200&q=80",
    "imageHover": "https://images.unsplash.com/photo-1607702705816-81497b0a9009?auto=format&fit=crop&w=900&h=1200&q=80&sat=-20",
    "gallery": [
      "https://images.unsplash.com/photo-1607702705816-81497b0a9009?auto=format&fit=crop&w=1200&h=1500&q=80",
      "https://images.unsplash.com/photo-1607702705816-81497b0a9009?auto=format&fit=crop&w=1200&h=1500&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1607702705816-81497b0a9009?auto=format&fit=crop&w=1200&h=1500&q=80&sat=-15"
    ]
  },
  {
    "sku": "ME-HB-3042",
    "name": "Rivane Quilted Crossbody",
    "collection": "Essentials",
    "category": "Handbags",
    "price": 1180,
    "salePrice": 940,
    "rating": 4.6,
    "reviews": 52,
    "badges": [],
    "sizes": [
      "One Size"
    ],
    "colors": [
      "Noir",
      "Dusty Rose"
    ],
    "materials": "Quilted lambskin, chain strap",
    "care": "Avoid direct sunlight and moisture. Store upright.",
    "description": "A diamond-quilted lambskin crossbody with a slim chain strap that adjusts from shoulder to cross-body length. Sized to carry the essentials without the weight of more than you need.",
    "shortDescription": "Diamond-quilted lambskin crossbody on an adjustable chain.",
    "highlights": [
      "Diamond-quilted lambskin",
      "Adjustable chain strap",
      "Interior card slots",
      "Made in Italy"
    ],
    "image": "https://images.unsplash.com/photo-1560891958-68bb1fe7fb78?auto=format&fit=crop&w=900&h=1200&q=80",
    "imageHover": "https://images.unsplash.com/photo-1560891958-68bb1fe7fb78?auto=format&fit=crop&w=900&h=1200&q=80&sat=-20",
    "gallery": [
      "https://images.unsplash.com/photo-1560891958-68bb1fe7fb78?auto=format&fit=crop&w=1200&h=1500&q=80",
      "https://images.unsplash.com/photo-1560891958-68bb1fe7fb78?auto=format&fit=crop&w=1200&h=1500&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1560891958-68bb1fe7fb78?auto=format&fit=crop&w=1200&h=1500&q=80&sat=-15"
    ]
  },
  {
    "sku": "ME-SH-4021",
    "name": "Solane Leather Ankle Boot",
    "collection": "Winter Editorial",
    "category": "Shoes",
    "price": 890,
    "salePrice": null,
    "rating": 4.7,
    "reviews": 38,
    "badges": [
      "New"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Noir",
      "Cognac"
    ],
    "materials": "Vegetable-tanned leather, leather sole",
    "care": "Treat with leather protector before first wear. Resole as needed.",
    "description": "A clean, elongated ankle boot in vegetable-tanned leather with a low block heel built for full days on foot. The sole is stacked leather, made to be resoled rather than replaced.",
    "shortDescription": "Vegetable-tanned ankle boot on a walkable block heel.",
    "highlights": [
      "Vegetable-tanned leather",
      "Stacked leather sole",
      "Cushioned footbed",
      "Made in Spain"
    ],
    "image": "https://images.unsplash.com/photo-1616244916660-d135a013d1f8?auto=format&fit=crop&w=900&h=1200&q=80",
    "imageHover": "https://images.unsplash.com/photo-1616244916660-d135a013d1f8?auto=format&fit=crop&w=900&h=1200&q=80&sat=-20",
    "gallery": [
      "https://images.unsplash.com/photo-1616244916660-d135a013d1f8?auto=format&fit=crop&w=1200&h=1500&q=80",
      "https://images.unsplash.com/photo-1616244916660-d135a013d1f8?auto=format&fit=crop&w=1200&h=1500&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1616244916660-d135a013d1f8?auto=format&fit=crop&w=1200&h=1500&q=80&sat=-15"
    ]
  },
  {
    "sku": "ME-SH-4055",
    "name": "Belmore Suede Loafer",
    "collection": "Signature Tailoring",
    "category": "Shoes",
    "price": 620,
    "salePrice": null,
    "rating": 4.8,
    "reviews": 46,
    "badges": [
      "Best Seller"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "colors": [
      "Chestnut",
      "Navy"
    ],
    "materials": "Hand-buffed suede, leather sole",
    "care": "Brush regularly with a suede brush. Avoid water exposure.",
    "description": "A penny-less loafer in hand-buffed suede, built on a slim last with a leather sole that breaks in gradually rather than all at once. As easy with tailoring as it is with denim.",
    "shortDescription": "Slim-last suede loafer built for tailoring or off-duty wear.",
    "highlights": [
      "Hand-buffed suede",
      "Leather sole",
      "Slim silhouette",
      "Made in Italy"
    ],
    "image": "https://images.unsplash.com/photo-1616406432452-07bc5938759d?auto=format&fit=crop&w=900&h=1200&q=80",
    "imageHover": "https://images.unsplash.com/photo-1616406432452-07bc5938759d?auto=format&fit=crop&w=900&h=1200&q=80&sat=-20",
    "gallery": [
      "https://images.unsplash.com/photo-1616406432452-07bc5938759d?auto=format&fit=crop&w=1200&h=1500&q=80",
      "https://images.unsplash.com/photo-1616406432452-07bc5938759d?auto=format&fit=crop&w=1200&h=1500&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1616406432452-07bc5938759d?auto=format&fit=crop&w=1200&h=1500&q=80&sat=-15"
    ]
  },
  {
    "sku": "ME-WT-5010",
    "name": "Méridien Automatic Watch",
    "collection": "Signature Tailoring",
    "category": "Watches",
    "price": 3200,
    "salePrice": null,
    "rating": 4.9,
    "reviews": 19,
    "badges": [
      "Limited Edition"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      "Steel / Ivoire",
      "Gold / Noir"
    ],
    "materials": "Sapphire crystal, stainless steel case, automatic movement",
    "care": "Water-resistant to 50m. Service every 4–5 years.",
    "description": "A 38mm automatic dress watch with a sunburst dial and a sapphire crystal domed to catch the light without distorting it. The movement is visible through an exhibition case back, finished by hand.",
    "shortDescription": "38mm automatic dress watch with a sunburst dial.",
    "highlights": [
      "Swiss automatic movement",
      "Sapphire crystal",
      "Exhibition case back",
      "50m water resistance"
    ],
    "image": "https://images.unsplash.com/photo-1702865053958-71ec751c4118?auto=format&fit=crop&w=900&h=1200&q=80",
    "imageHover": "https://images.unsplash.com/photo-1702865053958-71ec751c4118?auto=format&fit=crop&w=900&h=1200&q=80&sat=-20",
    "gallery": [
      "https://images.unsplash.com/photo-1702865053958-71ec751c4118?auto=format&fit=crop&w=1200&h=1500&q=80",
      "https://images.unsplash.com/photo-1702865053958-71ec751c4118?auto=format&fit=crop&w=1200&h=1500&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1702865053958-71ec751c4118?auto=format&fit=crop&w=1200&h=1500&q=80&sat=-15"
    ]
  },
  {
    "sku": "ME-JW-6014",
    "name": "Lucine Pearl Drop Earrings",
    "collection": "Château Collection",
    "category": "Jewelry",
    "price": 480,
    "salePrice": null,
    "rating": 4.9,
    "reviews": 61,
    "badges": [
      "Best Seller"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      "Gold / Pearl"
    ],
    "materials": "18k gold vermeil, freshwater pearl",
    "care": "Store separately in the provided pouch. Avoid contact with perfume.",
    "description": "A single freshwater pearl suspended from an 18k gold vermeil thread, weighted to catch light with the smallest movement. Understated enough for daily wear, considered enough for evening.",
    "shortDescription": "Freshwater pearl drop earrings in 18k gold vermeil.",
    "highlights": [
      "18k gold vermeil",
      "Genuine freshwater pearl",
      "Hypoallergenic posts",
      "Handcrafted"
    ],
    "image": "https://images.unsplash.com/photo-1474585628895-4579822e21a8?auto=format&fit=crop&w=900&h=1200&q=80",
    "imageHover": "https://images.unsplash.com/photo-1474585628895-4579822e21a8?auto=format&fit=crop&w=900&h=1200&q=80&sat=-20",
    "gallery": [
      "https://images.unsplash.com/photo-1474585628895-4579822e21a8?auto=format&fit=crop&w=1200&h=1500&q=80",
      "https://images.unsplash.com/photo-1474585628895-4579822e21a8?auto=format&fit=crop&w=1200&h=1500&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1474585628895-4579822e21a8?auto=format&fit=crop&w=1200&h=1500&q=80&sat=-15"
    ]
  },
  {
    "sku": "ME-SG-7008",
    "name": "Cassian Acetate Sunglasses",
    "collection": "Essentials",
    "category": "Sunglasses",
    "price": 385,
    "salePrice": null,
    "rating": 4.6,
    "reviews": 44,
    "badges": [
      "New"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      "Tortoise",
      "Noir"
    ],
    "materials": "Hand-polished Italian acetate, polarized lenses",
    "care": "Clean with the provided microfiber cloth only.",
    "description": "A rounded silhouette in hand-polished Italian acetate, fitted with polarized lenses graduated from smoke to clear. Each pair is cut from a single acetate block and hand-finished over twelve production stages.",
    "shortDescription": "Rounded acetate sunglasses with graduated polarized lenses.",
    "highlights": [
      "Italian acetate",
      "Polarized lenses",
      "12-stage hand finishing",
      "UV400 protection"
    ],
    "image": "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=900&h=1200&q=80",
    "imageHover": "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=900&h=1200&q=80&sat=-20",
    "gallery": [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1200&h=1500&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1200&h=1500&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1200&h=1500&q=80&sat=-15"
    ]
  },
  {
    "sku": "ME-FR-8021",
    "name": "Ambre Noire Eau de Parfum",
    "collection": "Signature Tailoring",
    "category": "Fragrances",
    "price": 240,
    "salePrice": null,
    "rating": 4.8,
    "reviews": 72,
    "badges": [
      "Best Seller"
    ],
    "sizes": [
      "50ml",
      "100ml"
    ],
    "colors": [
      "—"
    ],
    "materials": "Amber, cedarwood, bergamot, vetiver",
    "care": "Store away from direct sunlight and heat.",
    "description": "Amber and cedarwood sit at the base of a scent that opens with bergamot and settles into something warmer, quieter, and harder to place. Blended and bottled in Grasse.",
    "shortDescription": "Warm amber and cedarwood eau de parfum from Grasse.",
    "highlights": [
      "Blended in Grasse",
      "18% fragrance concentration",
      "Vegan formulation",
      "Recyclable glass bottle"
    ],
    "image": "https://images.unsplash.com/photo-1666621630026-862eea07236c?auto=format&fit=crop&w=900&h=1200&q=80",
    "imageHover": "https://images.unsplash.com/photo-1666621630026-862eea07236c?auto=format&fit=crop&w=900&h=1200&q=80&sat=-20",
    "gallery": [
      "https://images.unsplash.com/photo-1666621630026-862eea07236c?auto=format&fit=crop&w=1200&h=1500&q=80",
      "https://images.unsplash.com/photo-1666621630026-862eea07236c?auto=format&fit=crop&w=1200&h=1500&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1666621630026-862eea07236c?auto=format&fit=crop&w=1200&h=1500&q=80&sat=-15"
    ]
  }
];
