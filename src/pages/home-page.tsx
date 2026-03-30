import { motion } from 'framer-motion'
import { ArrowRight, Award, BadgeCheck, Check, FlaskConical, Heart, Leaf, ShieldCheck, Sparkles, Star, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SeoHead } from '@/components/seo/seo-head'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/cart-context'
import { products } from '@/data/products'
import { testimonials } from '@/data/testimonials'
import { siteConfig } from '@/lib/seo'

const allProducts = products.slice(0, 6)

const heroValues = [
  { icon: Heart, text: '75 000 chiens heureux' },
  { icon: FlaskConical, text: 'Formulé par des vétérinaires' },
  { icon: Truck, text: 'Livraison gratuite dès 50€' },
  { icon: ShieldCheck, text: 'Satisfait ou remboursé 30 jours' },
  { icon: Award, text: 'Certifié GMP+' },
  { icon: Leaf, text: '100% ingrédients naturels' },
  { icon: Sparkles, text: 'Résultats visibles en 3 semaines' },
  { icon: Star, text: 'Noté 4,8/5 sur TrustPilot' },
]

const categoryCards = [
  {
    slug: 'complement-articulations',
    title: 'Articulations',
    subtitle: 'Une meilleure mobilité',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop&q=80',
  },
  {
    slug: 'complement-demangeaisons',
    title: 'Démangeaisons',
    subtitle: 'Une peau apaisée',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=600&fit=crop&q=80',
  },
  {
    slug: 'complement-probiotiques',
    title: 'Probiotiques',
    subtitle: 'Une digestion facilitée',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop&q=80',
  },
  {
    slug: 'complement-relaxation',
    title: 'Relaxation',
    subtitle: 'Une vie plus calme',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=600&fit=crop&q=80',
  },
]

const pillars = [
  {
    icon: FlaskConical,
    title: 'Des formules vraiment efficaces',
    description: 'Conçues par notre équipe vétérinaire sur la base de centaines d\'études scientifiques.',
    image: 'https://images.unsplash.com/photo-1581888227599-779811939961?w=400&h=300&fit=crop',
  },
  {
    icon: Leaf,
    title: 'Des ingrédients puissants',
    description: 'Soigneusement choisis pour leur pureté, pour une biodisponibilité optimale.',
    image: 'https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=400&h=300&fit=crop',
  },
  {
    icon: ShieldCheck,
    title: 'Certification GMP+',
    description: 'L\'une des normes les plus exigeantes en Europe : traçabilité complète et contrôles indépendants.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
  },
  {
    icon: Award,
    title: 'Des résultats concrets',
    description: 'Plus de 75 000 clients convaincus et des retours qui parlent d\'eux-mêmes.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: "easeOut" as const },
}

export function HomePage() {
  const { addToCart } = useCart()

  return (
    <>
      <SeoHead description={siteConfig.description} canonical="/" />

      {/* HERO — Balto-style large image + text overlay */}
      <section className="relative overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1400&h=800&fit=crop&crop=top"
            alt="Chien heureux"
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 md:py-40 lg:px-8">
          <motion.div {...fadeUp} className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <Star className="size-3.5 fill-amber-400 text-amber-400" /> Noté 4,8/5 par nos clients
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
              À vos côtés pour<br />
              <span className="text-primary-foreground">prendre soin d'eux</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
              La science au service de leur bien-être. 75 000 chiens qui vont mieux !
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/produits">
                  Découvrez nos produits
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Values marquee — glass strip at bottom of hero */}
        <div className="relative border-t border-white/10 bg-white/10 backdrop-blur-md">
          <div className="overflow-hidden">
            <div className="flex animate-marquee-left">
              {[...heroValues, ...heroValues, ...heroValues, ...heroValues].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex shrink-0 items-center gap-2.5 px-8 py-3.5 text-sm font-medium text-white/90 sm:px-10 sm:py-4"
                >
                  <item.icon className="size-4 text-white/70" />
                  {item.text}
                  <span className="ml-6 text-white/25">—</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category cards — 4 elegant cards with real photos */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Le bien-être pensé pour chaque chien
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Chaque besoin a sa solution. Découvrez nos gammes de compléments.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {categoryCards.map((card, i) => (
              <motion.div
                key={card.slug}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              >
                <Link
                  to={`/produit/${card.slug}`}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-base font-bold text-white sm:text-lg">{card.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{card.subtitle}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition-colors group-hover:bg-white/25">
                      Découvrir <ArrowRight className="size-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products grid with real images */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Nos produits
              </h2>
              <p className="mt-2 text-muted-foreground">Compléments, croquettes et friandises pour chien</p>
            </div>
            <Button variant="outline" asChild className="hidden sm:inline-flex">
              <Link to="/produits">Tout voir <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {allProducts.map((product, i) => (
              <motion.div
                key={product.id}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-shadow hover:shadow-lg"
              >
                {product.badge && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {product.badge}
                  </span>
                )}
                <Link to={`/produit/${product.slug}`}>
                  <div className="relative h-52 overflow-hidden bg-muted/30">
                    <img src={product.image} alt={product.name} className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {product.categoryLabel}
                  </span>
                  <Link to={`/produit/${product.slug}`}>
                    <h3 className="mt-1 font-display text-base font-semibold transition-colors hover:text-primary">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">{product.shortDescription}</p>
                  <div className="mt-3 flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, j) => (
                      <Star
                        key={j}
                        className={`size-3.5 ${j < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/25'}`}
                      />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">({product.reviewCount})</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold">{product.price.toFixed(2)}€</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice.toFixed(2)}€</span>
                      )}
                    </div>
                    <Button size="sm" onClick={() => addToCart(product)}>Ajouter</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link to="/produits">Voir tous les produits <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars with real photos — Balto "Formulé avec expertise" */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Formulé avec expertise
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Chaque complément a son objectif. Mais tous s'appuient sur la science et partagent :
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-border/50 bg-card"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex size-10 items-center justify-center rounded-xl bg-white/90 text-primary backdrop-blur-sm">
                    <pillar.icon className="size-5" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert section with real photo */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <span className="text-sm font-medium uppercase tracking-wider text-primary">Les experts derrière nos produits</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Développé avec des vétérinaires
              </h2>
              <blockquote className="mt-6 border-l-4 border-primary/30 pl-6">
                <p className="text-lg italic leading-relaxed text-muted-foreground">
                  "En tant que vétérinaire, je veux le meilleur pour mes petits patients. Je collabore avec PawVital
                  pour concevoir des produits que je recommande chaque jour en consultation."
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
                  alt="Dr Cristina Martin"
                  className="size-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-display font-semibold">Dr Cristina Martin</p>
                  <p className="text-sm text-muted-foreground">Vétérinaire · Experte en nutrition animale</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Certifié GMP+', '100% naturel', 'Made in Europe'].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                    <Check className="size-3" /> {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="order-1 lg:order-2"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=700&h=500&fit=crop"
                  alt="Vétérinaire avec un chien"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials — Balto style */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Mais ne nous croyez pas sur parole
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Plus de 75 000 chiens heureux. Découvrez ce que leurs maîtres en pensent.
            </p>
          </motion.div>

          {/* Scrolling testimonials marquee */}
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />
            <div className="flex animate-marquee-left gap-5">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={`${t.id}-${i}`}
                  className="w-[320px] shrink-0 rounded-2xl border border-border/50 bg-card p-5"
                >
                  <div className="mb-3 flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, j) => (
                      <Star
                        key={j}
                        className={`size-4 ${j < t.rating ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/25'}`}
                      />
                    ))}
                  </div>
                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold">{t.name}</span>
                      <span className="block text-xs text-muted-foreground">& {t.dogName}</span>
                    </div>
                    {t.verified && (
                      <span className="flex items-center gap-1 rounded-full bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary">
                        <BadgeCheck className="size-3" /> vérifié
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission section with photo — like Balto */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1400&h=600&fit=crop"
            alt="Chiens heureux en course"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center text-primary-foreground sm:px-6 sm:py-28 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              La mission qui nous anime
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              Nous avons créé PawVital pour offrir aux chiens le bien-être qu'ils méritent.
              Parce qu'ils nous donnent tant, nous voulions leur rendre à notre façon,
              avec des produits qui les aident simplement à vivre heureux à vos côtés.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/produits">
                  Découvrir nos produits
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/a-propos">Notre histoire</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-t border-border/60 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { icon: Truck, title: 'Livraison offerte', desc: 'Dès 50€ d\'achat' },
            { icon: ShieldCheck, title: 'Satisfait ou remboursé', desc: 'Garantie 30 jours' },
            { icon: FlaskConical, title: 'Vétérinaire', desc: 'Formules validées' },
            { icon: Star, title: '4,8/5 TrustPilot', desc: '+ de 5 000 avis' },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
