import { motion } from 'framer-motion'
import { Check, CreditCard, Lock, Truck } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

import { SeoHead } from '@/components/seo/seo-head'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCart } from '@/contexts/cart-context'

type Step = 'shipping' | 'payment' | 'confirmation'

export function CheckoutPage() {
  const { items, total, clearCart, itemCount } = useCart()
  const [step, setStep] = useState<Step>('shipping')
  const [loading, setLoading] = useState(false)

  const shipping = total >= 50 ? 0 : 4.9
  const grandTotal = total + shipping

  function handleShippingSubmit(e: FormEvent) {
    e.preventDefault()
    setStep('payment')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handlePaymentSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 2000))
    setLoading(false)
    clearCart()
    setStep('confirmation')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (step === 'confirmation') {
    return (
      <>
        <SeoHead title="Commande confirmée" canonical="/checkout" />
        <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-primary/10"
          >
            <Check className="size-10 text-primary" />
          </motion.div>
          <h1 className="font-display text-3xl font-bold">Commande confirmée !</h1>
          <p className="mt-4 text-muted-foreground">
            Merci pour votre commande ! Un email de confirmation a été envoyé.
            Votre colis sera expédié sous 24-48h ouvrées.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            N° de commande : <strong className="text-foreground">PV-{Date.now().toString().slice(-6)}</strong>
          </p>
          <Button className="mt-8" size="lg" asChild>
            <Link to="/produits">Continuer mes achats</Link>
          </Button>
        </div>
      </>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
        <h1 className="mb-4 font-display text-2xl font-bold">Votre panier est vide</h1>
        <Button asChild>
          <Link to="/produits">Voir les produits</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <SeoHead title="Paiement" description="Finalisez votre commande PawVital" canonical="/checkout" />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-center gap-4">
          {[
            { id: 'shipping' as const, label: 'Livraison', icon: Truck },
            { id: 'payment' as const, label: 'Paiement', icon: CreditCard },
          ].map((s, i) => (
            <div key={s.id} className="flex items-center gap-4">
              {i > 0 && <div className="h-px w-12 bg-border sm:w-20" />}
              <div className="flex items-center gap-2">
                <div
                  className={`flex size-8 items-center justify-center rounded-full text-sm font-medium ${
                    step === s.id
                      ? 'bg-primary text-primary-foreground'
                      : s.id === 'shipping' && step === 'payment'
                        ? 'bg-primary/20 text-primary'
                        : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {s.id === 'shipping' && step === 'payment' ? <Check className="size-4" /> : i + 1}
                </div>
                <span className={`hidden text-sm font-medium sm:block ${step === s.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            {step === 'shipping' && (
              <motion.form
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handleShippingSubmit}
                className="space-y-6 rounded-2xl border border-border/70 bg-card p-6"
              >
                <h2 className="font-display text-xl font-semibold">Adresse de livraison</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" placeholder="Marie" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" placeholder="Dupont" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="marie@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Adresse</Label>
                  <Input id="address" placeholder="12 Rue des Chiens Heureux" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="zip">Code postal</Label>
                    <Input id="zip" placeholder="75001" required />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="city">Ville</Label>
                    <Input id="city" placeholder="Paris" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" type="tel" placeholder="06 12 34 56 78" required />
                </div>
                <Button type="submit" size="lg" className="w-full">Continuer vers le paiement</Button>
              </motion.form>
            )}

            {step === 'payment' && (
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handlePaymentSubmit}
                className="space-y-6 rounded-2xl border border-border/70 bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl font-semibold">Paiement sécurisé</h2>
                  <Lock className="size-5 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardName">Nom sur la carte</Label>
                  <Input id="cardName" placeholder="MARIE DUPONT" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Numéro de carte</Label>
                  <Input id="cardNumber" placeholder="4242 4242 4242 4242" maxLength={19} required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Date d'expiration</Label>
                    <Input id="expiry" placeholder="MM/AA" maxLength={5} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" maxLength={3} required />
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep('shipping')}>Retour</Button>
                  <Button type="submit" size="lg" className="flex-1" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="size-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        Traitement...
                      </span>
                    ) : (
                      `Payer ${grandTotal.toFixed(2)}€`
                    )}
                  </Button>
                </div>
                <p className="text-center text-xs text-muted-foreground">
                  <Lock className="mr-1 inline size-3" />
                  Paiement sécurisé — Données de démonstration, aucun paiement réel.
                </p>
              </motion.form>
            )}
          </div>

          <div className="h-fit rounded-2xl border border-border/70 bg-card p-6">
            <h3 className="mb-4 font-display font-semibold">Votre commande</h3>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted/30">
                    <img src={item.product.image} alt={item.product.name} className="h-full w-full object-contain p-1" />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-medium">{item.product.shortName}</p>
                    <p className="text-muted-foreground">x{item.quantity}</p>
                  </div>
                  <span className="text-sm font-medium">{(item.product.price * item.quantity).toFixed(2)}€</span>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2 border-t border-border/70 pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sous-total ({itemCount})</span>
                <span>{total.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Livraison</span>
                <span className={shipping === 0 ? 'text-primary' : ''}>{shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)}€`}</span>
              </div>
              <div className="flex justify-between border-t border-border/70 pt-2 text-base font-bold">
                <span>Total</span>
                <span>{grandTotal.toFixed(2)}€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
