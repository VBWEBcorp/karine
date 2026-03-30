import { motion } from 'framer-motion'
import { Box, ChevronRight, CreditCard, Eye, EyeOff, Gift, Heart, LogOut, MapPin, Package, Settings, Star, Truck } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

import { SeoHead } from '@/components/seo/seo-head'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/contexts/auth-context'
import { cn } from '@/lib/utils'

type Tab = 'login' | 'register'
type AccountTab = 'orders' | 'addresses' | 'loyalty' | 'favorites' | 'settings'

const fakeOrders = [
  {
    id: 'PV-284731',
    date: '22 mars 2026',
    status: 'Livré',
    statusColor: 'text-green-600 bg-green-50',
    total: 79.70,
    items: [
      { name: 'PawVital Articulations', qty: 2, price: 29.90, image: '/product.png' },
      { name: 'Friandises Éducation Poulet', qty: 1, price: 12.90, image: '/product.png' },
    ],
  },
  {
    id: 'PV-271548',
    date: '8 mars 2026',
    status: 'Livré',
    statusColor: 'text-green-600 bg-green-50',
    total: 57.80,
    items: [
      { name: 'PawVital Probiotiques', qty: 1, price: 27.90, image: '/product.png' },
      { name: 'PawVital Relaxation', qty: 1, price: 26.90, image: '/product.png' },
    ],
  },
  {
    id: 'PV-258392',
    date: '15 février 2026',
    status: 'Livré',
    statusColor: 'text-green-600 bg-green-50',
    total: 49.90,
    items: [
      { name: 'Croquettes au Poulet Frais', qty: 1, price: 49.90, image: '/product.png' },
    ],
  },
  {
    id: 'PV-244810',
    date: '28 janvier 2026',
    status: 'Livré',
    statusColor: 'text-green-600 bg-green-50',
    total: 84.60,
    items: [
      { name: 'PawVital Démangeaisons', qty: 2, price: 29.90, image: '/product.png' },
      { name: 'PawVital Hygiène Dentaire', qty: 1, price: 24.90, image: '/product.png' },
    ],
  },
]

const fakeAddresses = [
  {
    id: 1,
    label: 'Domicile',
    name: 'Marie Dupont',
    street: '24 Rue des Lilas',
    city: '75011 Paris',
    phone: '06 12 34 56 78',
    isDefault: true,
  },
  {
    id: 2,
    label: 'Bureau',
    name: 'Marie Dupont',
    street: '8 Avenue de la République',
    city: '69002 Lyon',
    phone: '06 12 34 56 78',
    isDefault: false,
  },
]

const fakeFavorites = [
  { name: 'PawVital Articulations', price: 29.90, image: '/product.png', slug: 'complement-articulations' },
  { name: 'Croquettes au Poulet Frais', price: 49.90, image: '/product.png', slug: 'croquettes-poulet-frais' },
  { name: 'PawVital Relaxation', price: 26.90, image: '/product.png', slug: 'complement-relaxation' },
]

const accountTabs = [
  { id: 'orders' as const, label: 'Mes commandes', icon: Package, count: fakeOrders.length },
  { id: 'addresses' as const, label: 'Mes adresses', icon: MapPin },
  { id: 'loyalty' as const, label: 'Points fidélité', icon: Gift },
  { id: 'favorites' as const, label: 'Mes favoris', icon: Heart, count: fakeFavorites.length },
  { id: 'settings' as const, label: 'Paramètres', icon: Settings },
]

export function LoginPage() {
  const { user, isAuthenticated, login, register, logout } = useAuth()
  const [tab, setTab] = useState<Tab>('login')
  const [accountTab, setAccountTab] = useState<AccountTab>('orders')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)

  async function handleLogin(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    await login('marie.dupont@email.com', 'demo')
    setLoading(false)
  }

  async function handleRegister(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    await register('Marie Dupont', 'marie.dupont@email.com', 'demo')
    setLoading(false)
  }

  if (isAuthenticated && user) {
    return (
      <>
        <SeoHead title="Mon Compte" canonical="/connexion" />
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Account header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                {user.name.charAt(0)}
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold">{user.name}</h1>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={logout}>
              <LogOut className="mr-2 size-4" />
              Se déconnecter
            </Button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {[
              { label: 'Commandes', value: '4', icon: Box },
              { label: 'Points fidélité', value: '272', icon: Gift },
              { label: 'Économisé', value: '14,50€', icon: CreditCard },
              { label: 'Statut', value: 'Gold', icon: Star },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border/60 bg-card p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <stat.icon className="size-4" />
                  <span className="text-xs">{stat.label}</span>
                </div>
                <p className="mt-1 font-display text-xl font-bold">{stat.value}</p>
              </div>
            ))}
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
            {/* Sidebar tabs */}
            <motion.nav
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="flex gap-1 overflow-x-auto lg:flex-col"
            >
              {accountTabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setAccountTab(t.id)}
                  className={cn(
                    'flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all',
                    accountTab === t.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                  )}
                >
                  <t.icon className="size-4 shrink-0" />
                  <span>{t.label}</span>
                  {t.count && (
                    <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-xs">{t.count}</span>
                  )}
                </button>
              ))}
            </motion.nav>

            {/* Content */}
            <motion.div
              key={accountTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* ORDERS */}
              {accountTab === 'orders' && (
                <div className="space-y-4">
                  <h2 className="font-display text-xl font-bold">Mes commandes</h2>
                  {fakeOrders.map((order) => (
                    <div key={order.id} className="overflow-hidden rounded-xl border border-border/60 bg-card">
                      <button
                        onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
                        className="flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-muted/30 sm:p-5"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Truck className="size-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-semibold">{order.id}</span>
                            <span className={cn('rounded-full px-2 py-0.5 text-xs font-medium', order.statusColor)}>
                              {order.status}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs text-muted-foreground">{order.date} · {order.items.length} article{order.items.length > 1 ? 's' : ''}</p>
                        </div>
                        <span className="text-sm font-bold">{order.total.toFixed(2)}€</span>
                        <ChevronRight className={cn('size-4 text-muted-foreground transition-transform', expandedOrder === order.id && 'rotate-90')} />
                      </button>
                      {expandedOrder === order.id && (
                        <div className="border-t border-border/60 bg-muted/10 px-4 py-4 sm:px-5">
                          <div className="space-y-3">
                            {order.items.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3">
                                <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted/40">
                                  <img src={item.image} alt={item.name} className="h-full w-full object-contain p-1" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium">{item.name}</p>
                                  <p className="text-xs text-muted-foreground">Qté : {item.qty}</p>
                                </div>
                                <span className="text-sm font-medium">{(item.price * item.qty).toFixed(2)}€</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">Suivre le colis</Button>
                              <Button size="sm" variant="outline">Facture</Button>
                            </div>
                            <Button size="sm" asChild>
                              <Link to="/produits">Recommander</Link>
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* ADDRESSES */}
              {accountTab === 'addresses' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl font-bold">Mes adresses</h2>
                    <Button size="sm">Ajouter une adresse</Button>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {fakeAddresses.map((addr) => (
                      <div key={addr.id} className="relative rounded-xl border border-border/60 bg-card p-5">
                        {addr.isDefault && (
                          <span className="absolute right-3 top-3 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                            Par défaut
                          </span>
                        )}
                        <div className="mb-3 flex items-center gap-2">
                          <MapPin className="size-4 text-primary" />
                          <span className="text-sm font-semibold">{addr.label}</span>
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>{addr.name}</p>
                          <p>{addr.street}</p>
                          <p>{addr.city}</p>
                          <p>{addr.phone}</p>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" variant="outline">Modifier</Button>
                          {!addr.isDefault && <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">Supprimer</Button>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* LOYALTY */}
              {accountTab === 'loyalty' && (
                <div className="space-y-6">
                  <h2 className="font-display text-xl font-bold">Programme fidélité</h2>
                  <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Vos points</p>
                        <p className="font-display text-4xl font-bold text-primary">272</p>
                      </div>
                      <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
                        <Gift className="size-8 text-primary" />
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      1€ dépensé = 1 point. Utilisez vos points pour obtenir des réductions sur vos prochaines commandes.
                    </p>
                    <div className="mt-4 h-3 overflow-hidden rounded-full bg-primary/15">
                      <div className="h-full w-[68%] rounded-full bg-primary" />
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">272 / 400 points pour le palier Platine</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold">Historique des points</h3>
                    {[
                      { date: '22 mars 2026', label: 'Commande PV-284731', points: '+80', type: 'earn' },
                      { date: '8 mars 2026', label: 'Commande PV-271548', points: '+58', type: 'earn' },
                      { date: '1 mars 2026', label: 'Bon de réduction utilisé', points: '-50', type: 'spend' },
                      { date: '15 fév. 2026', label: 'Commande PV-258392', points: '+50', type: 'earn' },
                      { date: '28 jan. 2026', label: 'Commande PV-244810', points: '+85', type: 'earn' },
                      { date: '15 jan. 2026', label: 'Bonus inscription', points: '+50', type: 'earn' },
                    ].map((entry, i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg border border-border/50 px-4 py-3">
                        <div>
                          <p className="text-sm font-medium">{entry.label}</p>
                          <p className="text-xs text-muted-foreground">{entry.date}</p>
                        </div>
                        <span className={cn('text-sm font-bold', entry.type === 'earn' ? 'text-green-600' : 'text-destructive')}>
                          {entry.points}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAVORITES */}
              {accountTab === 'favorites' && (
                <div className="space-y-4">
                  <h2 className="font-display text-xl font-bold">Mes favoris</h2>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {fakeFavorites.map((fav) => (
                      <Link
                        key={fav.slug}
                        to={`/produit/${fav.slug}`}
                        className="group overflow-hidden rounded-xl border border-border/60 bg-card transition-shadow hover:shadow-md"
                      >
                        <div className="flex h-36 items-center justify-center overflow-hidden bg-muted/30">
                          <img src={fav.image} alt={fav.name} className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div className="p-4">
                          <h3 className="text-sm font-semibold">{fav.name}</h3>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="font-bold">{fav.price.toFixed(2)}€</span>
                            <Heart className="size-4 fill-primary text-primary" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* SETTINGS */}
              {accountTab === 'settings' && (
                <div className="space-y-6">
                  <h2 className="font-display text-xl font-bold">Paramètres du compte</h2>
                  <div className="space-y-4 rounded-xl border border-border/60 bg-card p-6">
                    <h3 className="text-sm font-semibold">Informations personnelles</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Prénom</Label>
                        <Input defaultValue="Marie" />
                      </div>
                      <div className="space-y-2">
                        <Label>Nom</Label>
                        <Input defaultValue="Dupont" />
                      </div>
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input defaultValue={user.email} type="email" />
                      </div>
                      <div className="space-y-2">
                        <Label>Téléphone</Label>
                        <Input defaultValue="06 12 34 56 78" />
                      </div>
                    </div>
                    <Button size="sm">Enregistrer</Button>
                  </div>
                  <div className="space-y-4 rounded-xl border border-border/60 bg-card p-6">
                    <h3 className="text-sm font-semibold">Préférences</h3>
                    <div className="space-y-3">
                      {[
                        { label: 'Recevoir les offres par email', checked: true },
                        { label: 'Recevoir les notifications de livraison', checked: true },
                        { label: 'Newsletter mensuelle', checked: false },
                      ].map((pref) => (
                        <label key={pref.label} className="flex cursor-pointer items-center justify-between rounded-lg border border-border/50 px-4 py-3">
                          <span className="text-sm">{pref.label}</span>
                          <div className={cn(
                            'flex h-6 w-10 items-center rounded-full p-0.5 transition-colors',
                            pref.checked ? 'bg-primary' : 'bg-muted'
                          )}>
                            <div className={cn(
                              'size-5 rounded-full bg-white shadow transition-transform',
                              pref.checked ? 'translate-x-4' : 'translate-x-0'
                            )} />
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6">
                    <h3 className="text-sm font-semibold text-destructive">Zone de danger</h3>
                    <p className="mt-1 text-sm text-muted-foreground">La suppression du compte est irréversible.</p>
                    <Button variant="outline" size="sm" className="mt-3 border-destructive/30 text-destructive hover:bg-destructive/10">
                      Supprimer mon compte
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <SeoHead title="Connexion" description="Connectez-vous à votre compte PawVital" canonical="/connexion" />

      <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border/70 bg-card p-8"
        >
          <div className="mb-6 text-center">
            <h1 className="font-display text-2xl font-bold">
              {tab === 'login' ? 'Connexion' : 'Créer un compte'}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {tab === 'login'
                ? 'Accédez à votre espace client PawVital'
                : 'Rejoignez la communauté PawVital'}
            </p>
          </div>

          <div className="mb-6 flex rounded-xl bg-muted p-1">
            {(['login', 'register'] as const).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setError('') }}
                className={`flex-1 rounded-lg py-2 text-sm font-medium transition-all ${
                  tab === t
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t === 'login' ? 'Se connecter' : 'S\'inscrire'}
              </button>
            ))}
          </div>

          {error && (
            <div className="mb-4 rounded-lg bg-destructive/10 px-4 py-2 text-sm text-destructive">
              {error}
            </div>
          )}

          {tab === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" defaultValue="marie.dupont@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    defaultValue="motdepasse123"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>
              <div className="text-right">
                <button type="button" className="text-sm text-primary hover:underline">
                  Mot de passe oublié ?
                </button>
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? 'Connexion...' : 'Se connecter'}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" name="name" defaultValue="Marie Dupont" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" defaultValue="marie.dupont@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    defaultValue="motdepasse123"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? 'Inscription...' : 'Créer mon compte'}
              </Button>
            </form>
          )}

          <div className="mt-6 text-center text-xs text-muted-foreground">
            En continuant, vous acceptez nos{' '}
            <Link to="/mentions-legales" className="underline hover:text-foreground">CGV</Link>{' '}
            et notre{' '}
            <Link to="/politique-de-confidentialite" className="underline hover:text-foreground">politique de confidentialité</Link>.
          </div>
        </motion.div>
      </div>
    </>
  )
}
