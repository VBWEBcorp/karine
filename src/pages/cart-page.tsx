import { motion } from 'framer-motion'
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SeoHead } from '@/components/seo/seo-head'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/cart-context'

export function CartPage() {
  const { items, itemCount, total, updateQuantity, removeFromCart } = useCart()

  const freeShippingThreshold = 50
  const shipping = total >= freeShippingThreshold ? 0 : 4.9
  const grandTotal = total + shipping
  const remaining = Math.max(freeShippingThreshold - total, 0)
  const progress = Math.min((total / freeShippingThreshold) * 100, 100)

  return (
    <>
      <SeoHead title="Mon Panier" description="Votre panier PawVital" canonical="/panier" />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 font-display text-3xl font-bold tracking-tight">Mon Panier</h1>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <ShoppingBag className="mb-4 size-16 text-muted-foreground/30" />
            <h2 className="mb-2 font-display text-xl font-semibold">Votre panier est vide</h2>
            <p className="mb-8 text-muted-foreground">
              Découvrez nos produits et commencez à faire du bien à votre compagnon.
            </p>
            <Button size="lg" asChild>
              <Link to="/produits">Voir les produits</Link>
            </Button>
          </motion.div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-4">
              <div className="rounded-xl border border-border/70 bg-card p-4">
                {remaining > 0 ? (
                  <p className="mb-2 text-sm text-muted-foreground">
                    Plus que <strong className="text-foreground">{remaining.toFixed(2)}€</strong> pour la livraison gratuite
                  </p>
                ) : (
                  <p className="mb-2 flex items-center gap-2 text-sm font-medium text-primary">
                    <Truck className="size-4" /> Livraison gratuite !
                  </p>
                )}
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {items.map((item) => (
                <motion.div
                  key={item.product.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-4 rounded-2xl border border-border/70 bg-card p-4 sm:gap-6 sm:p-6"
                >
                  <Link to={`/produit/${item.product.slug}`}>
                    <div className="flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-muted/30 sm:size-24">
                      <img src={item.product.image} alt={item.product.name} className="h-full w-full object-contain p-2" />
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link to={`/produit/${item.product.slug}`} className="font-display font-semibold hover:text-primary">
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">{item.product.weight}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center rounded-lg border border-border">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="flex size-9 items-center justify-center text-muted-foreground hover:text-foreground"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="min-w-[2rem] text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="flex size-9 items-center justify-center text-muted-foreground hover:text-foreground"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <span className="text-lg font-bold">{(item.product.price * item.quantity).toFixed(2)}€</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="h-fit rounded-2xl border border-border/70 bg-card p-6">
              <h2 className="mb-4 font-display text-lg font-semibold">Récapitulatif</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sous-total ({itemCount} {itemCount > 1 ? 'articles' : 'article'})</span>
                  <span className="font-medium">{total.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Livraison</span>
                  <span className={shipping === 0 ? 'font-medium text-primary' : 'font-medium'}>
                    {shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)}€`}
                  </span>
                </div>
                <div className="border-t border-border/70 pt-3">
                  <div className="flex justify-between text-base">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold">{grandTotal.toFixed(2)}€</span>
                  </div>
                </div>
              </div>
              <Button className="mt-6 w-full" size="lg" asChild>
                <Link to="/checkout">
                  Commander <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Paiement 100% sécurisé · Satisfait ou remboursé
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
