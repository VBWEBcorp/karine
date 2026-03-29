import { motion } from 'framer-motion'
import { ArrowLeft, Check, Minus, Plus, ShoppingBag, Star, Truck } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { SeoHead } from '@/components/seo/seo-head'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/cart-context'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { testimonials } from '@/data/testimonials'

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = getProductBySlug(slug || '')
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <p className="mb-4 text-6xl">🐕</p>
        <h1 className="mb-2 font-display text-2xl font-bold">Produit introuvable</h1>
        <p className="mb-6 text-muted-foreground">Ce produit n'existe pas ou a été retiré.</p>
        <Button asChild>
          <Link to="/produits">Voir tous les produits</Link>
        </Button>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 3)
  const productTestimonials = testimonials.filter((t) =>
    product.name.toLowerCase().includes(t.product.toLowerCase())
  ).slice(0, 2)

  function handleAddToCart() {
    addToCart(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      <SeoHead
        title={product.name}
        description={product.description}
        canonical={`/produit/${product.slug}`}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/produits"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Retour aux produits
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-muted/30">
              <img src={product.image} alt={product.name} className="h-full w-full object-contain p-8" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              {product.categoryLabel}
            </span>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }, (_, j) => (
                  <Star
                    key={j}
                    className={`size-4 ${j < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/30'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating}/5 — {product.reviewCount} avis
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-bold">{product.price.toFixed(2)}€</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {product.originalPrice.toFixed(2)}€
                </span>
              )}
            </div>

            <p className="mt-4 leading-relaxed text-muted-foreground">{product.description}</p>

            <div className="mt-6 space-y-2">
              {product.benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm">
                  <Check className="size-4 shrink-0 text-primary" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center rounded-xl border border-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex size-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Minus className="size-4" />
                </button>
                <span className="min-w-[2.5rem] text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex size-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Plus className="size-4" />
                </button>
              </div>

              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                {added ? (
                  <>
                    <Check className="mr-2 size-4" /> Ajouté !
                  </>
                ) : (
                  <>
                    <ShoppingBag className="mr-2 size-4" /> Ajouter au panier — {(product.price * quantity).toFixed(2)}€
                  </>
                )}
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-xl bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
              <Truck className="size-4 shrink-0 text-primary" />
              Livraison gratuite dès 50€ · Expédié sous 24-48h
            </div>

            <div className="mt-8 space-y-4 border-t border-border/70 pt-6">
              <div>
                <h3 className="text-sm font-semibold">Ingrédients</h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.ingredients}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Mode d'emploi</h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.usage}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Contenu</h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.weight}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {productTestimonials.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-bold">Avis clients</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {productTestimonials.map((t) => (
                <div key={t.id} className="rounded-2xl border border-border/50 bg-card p-6">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: 5 }, (_, j) => (
                      <Star
                        key={j}
                        className={`size-4 ${j < t.rating ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/30'}`}
                      />
                    ))}
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                  <p className="text-sm font-semibold">{t.name} & {t.dogName}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-bold">Vous aimerez aussi</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/produit/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border/70 bg-card transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-40 overflow-hidden bg-muted/30">
                    <img src={p.image} alt={p.name} className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-semibold">{p.shortName}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.shortDescription}</p>
                    <p className="mt-2 font-bold">{p.price.toFixed(2)}€</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
