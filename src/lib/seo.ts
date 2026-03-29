export const siteConfig = {
  name: 'PawVital',
  url: 'https://www.pawvital.fr',
  locale: 'fr_FR',
  description:
    'Compléments alimentaires naturels pour chiens. Formulés par des vétérinaires, approuvés par + de 75 000 chiens heureux.',
  ogImage: 'https://www.pawvital.fr/og.png',
  twitterHandle: '@pawvital',
  themeColor: '#1a8a7a',
  phone: '+33 1 86 76 54 32',
  email: 'hello@pawvital.fr',
  address: {
    street: '24 Rue du Bien-Être Animal',
    city: 'Lyon',
    postalCode: '69002',
    country: 'FR',
  },
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} — ${siteConfig.name}`
}

export const routes = [
  '/',
  '/produits',
  '/produit/:slug',
  '/panier',
  '/checkout',
  '/connexion',
  '/a-propos',
  '/contact',
  '/mentions-legales',
  '/politique-de-confidentialite',
] as const
