import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/cart-context'

export function CartDrawer() {
  const { items, itemCount, total, isCartOpen, setCartOpen, updateQuantity, removeFromCart } = useCart()

  const freeShippingThreshold = 50
  const progress = Math.min((total / freeShippingThreshold) * 100, 100)
  const remaining = Math.max(freeShippingThreshold - total, 0)

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border/70 px-6 py-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="size-5 text-primary" />
                <h2 className="font-display text-lg font-semibold">
                  Mon Panier ({itemCount})
                </h2>
              </div>
              <Button variant="ghost" size="icon-sm" onClick={() => setCartOpen(false)}>
                <X className="size-5" />
              </Button>
            </div>

            {total > 0 && (
              <div className="border-b border-border/70 px-6 py-3">
                <div className="mb-2 flex justify-between text-xs">
                  {remaining > 0 ? (
                    <span className="text-muted-foreground">
                      Plus que <strong className="text-foreground">{remaining.toFixed(2)}€</strong> pour la livraison gratuite
                    </span>
                  ) : (
                    <span className="font-medium text-primary">Livraison gratuite !</span>
                  )}
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <ShoppingBag className="mb-4 size-12 text-muted-foreground/40" />
                  <p className="mb-2 font-medium text-muted-foreground">Votre panier est vide</p>
                  <p className="mb-6 text-sm text-muted-foreground/70">
                    Commencez par ajouter des produits.
                  </p>
                  <Button asChild onClick={() => setCartOpen(false)}>
                    <Link to="/produits">Voir les produits</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 rounded-xl border border-border/60 bg-card p-3"
                    >
                      <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted/30">
                        <img src={item.product.image} alt={item.product.name} className="h-full w-full object-contain p-1.5" />
                      </div>
                      <div className="flex flex-1 flex-col gap-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium leading-tight">{item.product.name}</p>
                            <p className="text-xs text-muted-foreground">{item.product.weight}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-muted-foreground/60 transition-colors hover:text-destructive"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="flex size-7 items-center justify-center rounded-md border border-border/70 text-muted-foreground transition-colors hover:bg-muted"
                            >
                              <Minus className="size-3" />
                            </button>
                            <span className="min-w-[1.5rem] text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="flex size-7 items-center justify-center rounded-md border border-border/70 text-muted-foreground transition-colors hover:bg-muted"
                            >
                              <Plus className="size-3" />
                            </button>
                          </div>
                          <span className="text-sm font-semibold">
                            {(item.product.price * item.quantity).toFixed(2)}€
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border/70 px-6 py-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Sous-total ({itemCount} {itemCount > 1 ? 'produits' : 'produit'})
                  </span>
                  <span className="text-lg font-bold">{total.toFixed(2)}€</span>
                </div>
                <Button className="w-full" size="lg" asChild onClick={() => setCartOpen(false)}>
                  <Link to="/checkout">Commander — {total.toFixed(2)}€</Link>
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
