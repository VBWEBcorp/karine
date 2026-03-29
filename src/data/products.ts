export type Product = {
  id: string
  slug: string
  name: string
  shortName: string
  category: 'complements' | 'croquettes' | 'friandises'
  categoryLabel: string
  price: number
  originalPrice?: number
  description: string
  shortDescription: string
  benefits: string[]
  ingredients: string
  usage: string
  weight: string
  rating: number
  reviewCount: number
  badge?: string
  gradient: string
  emoji: string
  image: string
  inStock: boolean
}

export const products: Product[] = [
  {
    id: 'art-01',
    slug: 'complement-articulations',
    name: 'PawVital Articulations',
    shortName: 'Articulations',
    category: 'complements',
    categoryLabel: 'Complément',
    price: 29.9,
    description:
      'Une formule avancée pour soutenir la mobilité et la santé articulaire de votre chien. Idéal pour les chiens âgés ou les races prédisposées aux problèmes articulaires.',
    shortDescription: 'Une meilleure mobilité au quotidien',
    benefits: [
      'Soutient la souplesse articulaire',
      'Réduit l\'inconfort lié à l\'âge',
      'Favorise la mobilité au quotidien',
      'Renforce le cartilage naturellement',
    ],
    ingredients: 'Glucosamine HCl, Chondroïtine sulfate, MSM, Curcuma (95% curcuminoïdes), Acide hyaluronique, Vitamine E',
    usage: '1 comprimé par jour pour les chiens < 20kg, 2 comprimés pour les chiens > 20kg. À donner avec le repas.',
    weight: '120 comprimés (60 jours)',
    rating: 4.8,
    reviewCount: 1247,
    badge: 'Best-seller',
    gradient: 'from-teal-400 to-cyan-500',
    emoji: '🦴',
    image: '/product.png',
    inStock: true,
  },
  {
    id: 'dem-02',
    slug: 'complement-demangeaisons',
    name: 'PawVital Démangeaisons',
    shortName: 'Démangeaisons',
    category: 'complements',
    categoryLabel: 'Complément',
    price: 29.9,
    description:
      'Soulage les démangeaisons et apaise la peau irritée de votre chien. Formulé avec des oméga-3 et des extraits naturels pour restaurer la barrière cutanée.',
    shortDescription: 'Une peau apaisée, un poil brillant',
    benefits: [
      'Apaise les démangeaisons rapidement',
      'Restaure la barrière cutanée',
      'Rend le poil plus doux et brillant',
      'Réduit les rougeurs et irritations',
    ],
    ingredients: 'Huile de poisson (EPA/DHA), Biotine, Zinc, Quercétine, Extrait de Bourrache, Vitamine B6',
    usage: '1 gélule par jour pour les chiens < 15kg, 2 gélules pour les chiens > 15kg.',
    weight: '90 gélules (45-90 jours)',
    rating: 4.7,
    reviewCount: 983,
    gradient: 'from-green-400 to-emerald-500',
    emoji: '🐾',
    image: '/product.png',
    inStock: true,
  },
  {
    id: 'hyg-03',
    slug: 'complement-hygiene-dentaire',
    name: 'PawVital Hygiène Dentaire',
    shortName: 'Hygiène dentaire',
    category: 'complements',
    categoryLabel: 'Complément',
    price: 24.9,
    description:
      'Prend soin de l\'hygiène bucco-dentaire de votre chien au quotidien. Combat la plaque dentaire et rafraîchit l\'haleine naturellement.',
    shortDescription: 'Des dents propres, une haleine fraîche',
    benefits: [
      'Combat la plaque dentaire',
      'Rafraîchit l\'haleine naturellement',
      'Renforce l\'émail dentaire',
      'Protège les gencives',
    ],
    ingredients: 'Propolis, Spiruline, Ascophyllum nodosum, Menthe poivrée, Zinc, Vitamine C',
    usage: '1 stick à mâcher par jour. Adapté à toutes les tailles.',
    weight: '30 sticks (30 jours)',
    rating: 4.6,
    reviewCount: 654,
    gradient: 'from-sky-400 to-blue-500',
    emoji: '🦷',
    image: '/product.png',
    inStock: true,
  },
  {
    id: 'pro-04',
    slug: 'complement-probiotiques',
    name: 'PawVital Probiotiques',
    shortName: 'Probiotiques',
    category: 'complements',
    categoryLabel: 'Complément',
    price: 27.9,
    description:
      'Rétablit l\'équilibre de la flore intestinale pour une digestion facilitée. 6 souches de probiotiques spécifiquement sélectionnées pour les chiens.',
    shortDescription: 'Une digestion facilitée',
    benefits: [
      'Rétablit la flore intestinale',
      'Réduit les troubles digestifs',
      'Renforce le système immunitaire',
      'Améliore l\'absorption des nutriments',
    ],
    ingredients: 'Lactobacillus acidophilus, L. casei, Bifidobacterium longum, B. breve, FOS, Inuline, Psyllium',
    usage: '1 sachet par jour mélangé à la nourriture. Toutes tailles de chien.',
    weight: '60 sachets (60 jours)',
    rating: 4.8,
    reviewCount: 1102,
    badge: 'Nouveau',
    gradient: 'from-violet-400 to-purple-500',
    emoji: '💜',
    image: '/product.png',
    inStock: true,
  },
  {
    id: 'rel-05',
    slug: 'complement-relaxation',
    name: 'PawVital Relaxation',
    shortName: 'Relaxation',
    category: 'complements',
    categoryLabel: 'Complément',
    price: 26.9,
    description:
      'Aide votre chien à retrouver calme et sérénité. Parfait pour les périodes de stress : orages, trajets en voiture, feux d\'artifice, séparation.',
    shortDescription: 'Une vie plus calme et sereine',
    benefits: [
      'Réduit le stress et l\'anxiété',
      'Favorise un sommeil apaisé',
      'Idéal pour les trajets et orages',
      'Sans effet de somnolence',
    ],
    ingredients: 'L-Théanine, Valériane, Passiflore, Camomille, Magnésium, Vitamine B1',
    usage: '1 à 2 comprimés 30 min avant la situation stressante ou quotidiennement.',
    weight: '90 comprimés (45-90 jours)',
    rating: 4.7,
    reviewCount: 876,
    gradient: 'from-indigo-400 to-violet-500',
    emoji: '😌',
    image: '/product.png',
    inStock: true,
  },
  {
    id: 'croq-01',
    slug: 'croquettes-poulet-frais',
    name: 'Croquettes au Poulet Frais',
    shortName: 'Poulet frais',
    category: 'croquettes',
    categoryLabel: 'Croquettes',
    price: 49.9,
    originalPrice: 54.9,
    description:
      'Des croquettes premium sans céréales, élaborées avec 33% de poulet frais français. Une alimentation complète et équilibrée pour chiens adultes.',
    shortDescription: 'Sans céréales · 33% protéines',
    benefits: [
      '33% de poulet frais français',
      'Sans céréales ni gluten',
      'Riche en oméga 3 & 6',
      'Cuisson basse température',
    ],
    ingredients: 'Poulet frais (33%), Patate douce, Pois chiches, Huile de saumon, Luzerne, Myrtilles, Curcuma',
    usage: 'Suivre le tableau de rationnement selon le poids de votre chien.',
    weight: 'Sac de 7 kg',
    rating: 4.9,
    reviewCount: 2341,
    badge: 'Promo -9%',
    gradient: 'from-amber-400 to-orange-500',
    emoji: '🍗',
    image: '/product.png',
    inStock: true,
  },
  {
    id: 'fri-01',
    slug: 'friandises-education-poulet',
    name: 'Friandises d\'Éducation au Poulet',
    shortName: 'Éducation poulet',
    category: 'friandises',
    categoryLabel: 'Friandises',
    price: 12.9,
    description:
      'De petites bouchées irrésistibles pour récompenser votre chien pendant les séances d\'éducation. 100% naturelles, sans additifs.',
    shortDescription: 'Récompenses 100% gourmandes',
    benefits: [
      '100% ingrédients naturels',
      'Faibles en calories',
      'Taille parfaite pour l\'éducation',
      'Sans colorants ni conservateurs',
    ],
    ingredients: 'Poitrine de poulet déshydratée (92%), Farine de riz, Glycérine végétale',
    usage: 'Distribuer en récompense lors de l\'éducation. Maximum 10 friandises par jour.',
    weight: '150g',
    rating: 4.8,
    reviewCount: 567,
    gradient: 'from-rose-400 to-pink-500',
    emoji: '🐶',
    image: '/product.png',
    inStock: true,
  },
  {
    id: 'fri-02',
    slug: 'petits-poissons-sauvages',
    name: 'Petits Poissons Sauvages',
    shortName: 'Poissons sauvages',
    category: 'friandises',
    categoryLabel: 'Friandises',
    price: 14.9,
    description:
      'Des petits poissons entiers séchés à basse température, riches en oméga-3. Une friandise 100% naturelle et mono-protéine.',
    shortDescription: 'Riches en oméga-3 naturels',
    benefits: [
      'Mono-protéine (poisson seul)',
      'Riche en oméga-3 naturels',
      'Séchage basse température',
      'Pêche durable certifiée',
    ],
    ingredients: 'Sprats de la Baltique séchés (100%)',
    usage: '2 à 4 poissons par jour selon la taille du chien.',
    weight: '100g',
    rating: 4.7,
    reviewCount: 432,
    gradient: 'from-cyan-400 to-teal-500',
    emoji: '🐟',
    image: '/product.png',
    inStock: true,
  },
  {
    id: 'fri-03',
    slug: 'friandises-education-boeuf',
    name: 'Friandises d\'Éducation au Bœuf',
    shortName: 'Éducation bœuf',
    category: 'friandises',
    categoryLabel: 'Friandises',
    price: 12.9,
    description:
      'Des mini-cubes de bœuf séché, parfaits pour les sessions de dressage. Très appétents, ils captent immédiatement l\'attention de votre chien.',
    shortDescription: 'Récompenses 100% gourmandes',
    benefits: [
      'Bœuf français de qualité',
      'Ultra appétent pour l\'éducation',
      'Sans céréales ni soja',
      'Format mini parfait pour l\'entraînement',
    ],
    ingredients: 'Bœuf déshydraté (90%), Farine de pois chiche, Glycérine végétale',
    usage: 'Distribuer en récompense. Maximum 10 friandises par jour.',
    weight: '150g',
    rating: 4.6,
    reviewCount: 389,
    gradient: 'from-red-400 to-rose-500',
    emoji: '🥩',
    image: '/product.png',
    inStock: true,
  },
]

export const categories = [
  { id: 'all', label: 'Tous les produits', count: products.length },
  { id: 'complements', label: 'Compléments', count: products.filter((p) => p.category === 'complements').length },
  { id: 'croquettes', label: 'Croquettes', count: products.filter((p) => p.category === 'croquettes').length },
  { id: 'friandises', label: 'Friandises', count: products.filter((p) => p.category === 'friandises').length },
] as const

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string) {
  if (category === 'all') return products
  return products.filter((p) => p.category === category)
}

export function getRelatedProducts(productId: string, limit = 4) {
  const product = products.find((p) => p.id === productId)
  if (!product) return products.slice(0, limit)
  return products.filter((p) => p.id !== productId && p.category === product.category).slice(0, limit)
}
