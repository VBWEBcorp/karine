import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import { SeoHead } from '@/components/seo/seo-head'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/cart-context'
import { categories, getProductsByCategory } from '@/data/products'
import { cn } from '@/lib/utils'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.45, ease: "easeOut" as const },
}

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const catParam = searchParams.get('cat') || 'all'
  const [activeCategory, setActiveCategory] = useState(catParam)
  const { addToCart } = useCart()

  const filteredProducts = getProductsByCategory(activeCategory)

  function handleCategoryChange(catId: string) {
    setActiveCategory(catId)
    if (catId === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ cat: catId })
    }
  }

  return (
    <>
      <SeoHead
        title="Nos Produits"
        description="Découvrez nos compléments alimentaires naturels, croquettes premium et friandises pour chien."
        canonical="/produits"
      />

      <section className="bg-gradient-to-b from-primary/5 to-background pb-8 pt-12 sm:pb-12 sm:pt-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            {...fadeUp}
            className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Nos Produits
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            Compléments, croquettes et friandises — le meilleur pour votre compagnon.
          </motion.p>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-all',
                  activeCategory === cat.id
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
                )}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition-shadow hover:shadow-lg"
              >
                {product.badge && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                    {product.badge}
                  </span>
                )}
                <Link to={`/produit/${product.slug}`}>
                  <div className="relative h-52 overflow-hidden bg-muted/30">
                    <img src={product.image} alt={product.name} className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {product.categoryLabel}
                  </span>
                  <Link to={`/produit/${product.slug}`}>
                    <h2 className="mt-1 font-display text-lg font-semibold hover:text-primary">
                      {product.name}
                    </h2>
                  </Link>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">{product.shortDescription}</p>
                  <div className="mt-3 flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, j) => (
                      <Star
                        key={j}
                        className={`size-3.5 ${j < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/30'}`}
                      />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">
                      {product.rating} ({product.reviewCount} avis)
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold">{product.price.toFixed(2)}€</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice.toFixed(2)}€
                        </span>
                      )}
                    </div>
                    <Button size="sm" onClick={() => addToCart(product)}>
                      Ajouter au panier
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
