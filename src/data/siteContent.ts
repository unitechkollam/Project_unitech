export interface SupplyCategory {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
  description: string;
  imageUrl?: string;
  imagePlaceholderText: string;
  imageFallbackGradient: string;
  badge: string;
}

export interface CustomerTestimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  feedback: string;
  clientType: 'Dealer' | 'Technician' | 'RO plant installer' | 'Shop owner';
  logoPlaceholderText: string;
}

export const BRANDS = [
  { name: 'Santek', category: 'Valves & Automation' },
  { name: 'Pentair', category: 'FRP Vessels & Valves' },
  { name: 'Tata', category: 'Water Systems' },
  { name: 'Bharath Kepler', category: 'Pumps & Spares' },
  { name: 'Aqua', category: 'Filter Vessels' },
  { name: 'Doshion', category: 'Resin & Ion Exchange' },
  { name: 'Prolife', category: 'Purifiers & Spares' },
  { name: 'Olivar', category: 'RO Components' },
  { name: 'Merlin', category: 'High-Flow RO' },
  { name: 'Blueshell', category: 'Membranes & Housings' },
];

export const SUPPLY_ITEMS: SupplyCategory[] = [
  {
    id: 'filter-vessels',
    title: 'FRP Vessels',
    subtitle: 'FRP & Composite Pressure Vessels',
    description: 'High burst-strength composite and FRP filter vessels suitable for industrial sand filters, activated carbon filters, iron removal plants, and water softeners.',
    items: ['FRP Filter Vessels (All Sizes)', 'Industrial Pressure Vessels', 'Softener & Demineralizer Vessels', 'Top & Bottom Strainers'],
    imageUrl: '/assets/aistudio/SANTEK_VESSELS_07114290.png',
    imagePlaceholderText: '[Photo: Santek Filter Vessels]',
    imageFallbackGradient: 'from-blue-600/20 to-cyan-500/10',
    badge: 'FRP Vessels',
  },
  {
    id: 'multiport-valves',
    title: 'Multiport Valves',
    subtitle: 'Manual & Automatic Control Valves',
    description: 'Precision engineered manual and automatic multiport valves designed for smooth filter, backwash, rinse, brine suction, and softening cycles.',
    items: ['Manual Top Mount Valves', 'Side Mount Multiport Valves', 'Automatic Auto-Flush Valves', 'Softener Valves & Distributors'],
    imageUrl: '/assets/aistudio/multiport_0cd43e0b.jfif',
    imagePlaceholderText: '[Photo: Multiport Valves]',
    imageFallbackGradient: 'from-cyan-600/20 to-blue-500/10',
    badge: 'Manual & Auto',
  },
  {
    id: 'filtration-media',
    title: 'Filtration Media',
    subtitle: 'High-Purity Bulk Media',
    description: 'Fresh bulk stock of certified media for turbidity removal, iron reduction, hardness removal, and taste conditioning.',
    items: [
      'Activated Carbon (Bulk)',
      'Ion Exchange Resin (Cation & Anion)',
      'Katalox Light & DMI 65',
      'MnO2 (Manganese Dioxide)',
      'Anthracite Filter Media',
      'Zeo Safe Media',
      'Graded Silica Sands & Gravels',
    ],
    imageUrl: '/assets/aistudio/Gemini_Generated_Image_8a2l468a2l468a2l_b6fce99c.png',
    imagePlaceholderText: '[Photo: Filtration Media Portfolio Bags]',
    imageFallbackGradient: 'from-emerald-600/20 to-blue-500/10',
    badge: 'Bulk Media Bags',
  },
  {
    id: 'water-purifiers',
    title: 'Water Purifiers',
    subtitle: 'Domestic & Commercial Units',
    description: 'Complete RO, UV, and UF drinking water purifiers and heavy-duty institutional filtration units customized for Kerala ground & municipal water.',
    items: ['Domestic RO+UV+TDS Purifiers', 'Commercial Drinking Stations', 'Under-Sink RO Units', 'Gravity & UF Filter Systems'],
    imageUrl: '/assets/aistudio/Premium_Water_Purifier_Showcase_79612d02.png',
    imagePlaceholderText: '[Photo: UNITECH Water Purifiers]',
    imageFallbackGradient: 'from-blue-600/20 to-emerald-500/10',
    badge: 'RO+UV+UF Units',
  },
  {
    id: 'purifier-spares',
    title: 'Purifier Spares',
    subtitle: 'Essential Replacement Components',
    description: 'Extensive ready stock of all service spares for routine maintenance, filter replacement, and system overhauls.',
    items: [
      'Pre-Filter & Spun Cartridges',
      'UV Lamps, Chokes & Sleeves',
      'Booster Pumps (75/100/150 GPD)',
      'Filter Housings & O-Rings',
      'Connectors, Elbows & Tubing',
      'Solenoid & Float Valves',
    ],
    imageUrl: '/assets/aistudio/purifier_parts_31694e4b.jfif',
    imagePlaceholderText: '[Photo: Purifier Spares & Components]',
    imageFallbackGradient: 'from-sky-600/20 to-cyan-500/10',
    badge: 'Comprehensive Range',
  },
  {
    id: 'ro-plant-parts',
    title: 'RO Plant Parts',
    subtitle: 'Commercial & Industrial Skid Spares',
    description: 'Industrial-grade membranes, high-pressure pumps, and chemical dosing accessories built for high TDS water treatment plants.',
    items: [
      'RO Membranes (4040, 8040, 4021)',
      'Chemical Dosing Pumps (Electronic)',
      'HDPE & PE Dosing Chemical Tanks',
      'High Pressure SS Pumps',
      'Flow Meters & Rotameters',
      'Pressure Gauges & Skid Fittings',
    ],
    imageUrl: '/assets/aistudio/ro_parts_10f3b12b.png',
    imagePlaceholderText: '[Photo: Commercial RO Plant Parts]',
    imageFallbackGradient: 'from-blue-800/20 to-indigo-600/10',
    badge: 'Industrial Grade',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Bulk Stock Ready',
    description: 'Extensive inventory kept in-stock at our Karunagappally warehouse and Kollam shop for instant dispatch and pickup.',
    icon: 'PackageCheck',
  },
  {
    title: 'Dealer Pricing',
    description: 'Direct wholesale rates with volume margins engineered specifically for trade dealers, technicians, and shop owners.',
    icon: 'BadgePercent',
  },
  {
    title: 'One-Stop Range',
    description: 'Everything under one roof: from FRP vessels and filtration media to multiport valves, booster pumps, and RO membranes.',
    icon: 'Layers',
  },
  {
    title: 'Two Locations',
    description: 'Strategically located at Decent Jn (Kollam) and Thazhava (Karunagappally) for effortless access and prompt regional logistics.',
    icon: 'MapPin',
  },
];

export const CUSTOMER_TESTIMONIALS: CustomerTestimonial[] = [
  {
    id: 'cust-1',
    name: 'Anandhu S.',
    role: 'RO Plant Installer & Contractor',
    location: 'Karunagappally, Kollam',
    feedback: 'UNITECH has been my primary supplier for RO membranes, 4040 vessels, and dosing pumps for all my commercial projects. Their bulk stock is always ready when we need urgent installations.',
    clientType: 'RO plant installer',
    logoPlaceholderText: '[Placeholder: Customer Logo 1 - Replaceable]',
  },
  {
    id: 'cust-2',
    name: 'Pradeep Kumar',
    role: 'Water Treatment & Spare Parts Dealer',
    location: 'Decent Jn, Kollam',
    feedback: 'Wholesale prices are very competitive and genuine brands like Santek and Aqua are readily available. Having a shop right here at Decent Jn makes pickup super convenient for our daily orders.',
    clientType: 'Dealer',
    logoPlaceholderText: '[Placeholder: Customer Logo 2 - Replaceable]',
  },
  {
    id: 'cust-3',
    name: 'Suresh Varghese',
    role: 'Independent Water Technician',
    location: 'Kundara, Kollam',
    feedback: 'Finding quality Katalox, DMI 65, and genuine booster pumps with reliable fittings was tough until I started dealing with UNITECH. They know the technical requirements and always support us.',
    clientType: 'Technician',
    logoPlaceholderText: '[Placeholder: Customer Logo 3 - Replaceable]',
  },
  {
    id: 'cust-4',
    name: 'Nazeer M.',
    role: 'Hardware & Sanitary Shop Owner',
    location: 'Chathannoor, Kollam',
    feedback: 'Great wholesale partner. We stock filter cartridges, multiport valves, and media bags supplied by UNITECH. Fast delivery and reliable billing every time.',
    clientType: 'Shop owner',
    logoPlaceholderText: '[Placeholder: Customer Logo 4 - Replaceable]',
  },
];

export const CONTACT_INFO = {
  mainPhone: '+91 8138048474',
  whatsappNumber: '918138048474',
  email: 'unitechkollam@gmail.com',
  locations: [
    {
      name: 'Kollam Shop',
      businessName: 'Unitech Water Treatment Technology Kollam',
      subtitle: 'Retail & Quick Pickup Store',
      address: 'Chandra Complex, Decent Jn, Kollam, Kerala',
      phones: ['+91 8138048474', '+91 9562112931'],
      email: 'unitechkollam@gmail.com',
      mapEmbedUrl: 'https://maps.google.com/maps?q=8.8974407,76.6483754&hl=en&z=17&output=embed',
      googleMapsDirectionsUrl: 'https://maps.app.goo.gl/xmhHUJLm6SV6kvGq9',
    },
    {
      name: 'Office and Warehouse',
      businessName: 'UNITECH WATER TREATMENT TECHNOLOGY, KARUNAGAPPALLY',
      subtitle: 'Central Bulk Storage & Dispatch',
      address: 'Thazhava, Karunagappally, Kollam, Kerala',
      phones: ['+91 8111902730'],
      email: 'unitechkollam@gmail.com',
      mapEmbedUrl: 'https://maps.google.com/maps?q=9.0834838,76.5487849&hl=en&z=16&output=embed',
      googleMapsDirectionsUrl: 'https://maps.app.goo.gl/8KpTnpYyNBrcqy7R8',
    },
  ],
};
