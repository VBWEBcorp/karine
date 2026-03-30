import { AnimatePresence, motion } from 'framer-motion'
import { Gift, Menu, ShoppingBag, Star, Truck, User, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Logo } from '@/components/layout/logo'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/cart-context'
import { useAuth } from '@/contexts/auth-context'
import { cn } from '@/lib/utils'

const links = [
  { to: '/produits', label: 'Nos Produits' },
  { to: '/a-propos', label: 'Notre Histoire' },
  { to: '/contact', label: 'Aide' },
] as const

const tickerItems = [
  { icon: Truck, text: 'Livraison gratuite dès 50€' },
  { icon: Star, text: 'Noté 4,8/5 sur TrustPilot' },
  { icon: Gift, text: 'Nouveau : Le Club PawVital' },
  { icon: Truck, text: 'Livraison gratuite dès 50€' },
  { icon: Star, text: 'Noté 4,8/5 sur TrustPilot' },
  { icon: Gift, text: 'Nouveau : Le Club PawVital' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { itemCount, setCartOpen } = useCart()
  useAuth()

  return (
    <>
      {/* Scrolling announcement bar */}
      <div className="overflow-hidden bg-primary text-primary-foreground">
        <div className="flex animate-ticker whitespace-nowrap">
          {tickerItems.map((item, i) => (
            <span key={i} className="inline-flex shrink-0 items-center gap-2 px-8 py-2 text-xs font-medium sm:text-sm">
              <item.icon className="size-3.5" />
              {item.text}
            </span>
          ))}
          {tickerItems.map((item, i) => (
            <span key={`dup-${i}`} className="inline-flex shrink-0 items-center gap-2 px-8 py-2 text-xs font-medium sm:text-sm">
              <item.icon className="size-3.5" />
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* Main navbar */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60',
                  pathname === l.to || pathname.startsWith(l.to + '/')
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-1 md:flex">
            <Button variant="ghost" size="icon-sm" className="rounded-full" asChild>
              <Link to="/connexion">
                <User className="size-5" />
                <span className="sr-only">Mon compte</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              className="relative rounded-full"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="size-5" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">Panier</span>
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <Button
              variant="ghost"
              size="icon-sm"
              className="relative rounded-full"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="size-5" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {itemCount}
                </span>
              )}
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="rounded-full"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={cn(
                      'rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-muted',
                      pathname === l.to ? 'text-foreground' : 'text-muted-foreground'
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-2 flex gap-2 border-t border-border/60 pt-4">
                  <Button className="flex-1" asChild>
                    <Link to="/connexion" onClick={() => setOpen(false)}>
                      <User className="mr-2 size-4" /> Mon compte
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  )
}
