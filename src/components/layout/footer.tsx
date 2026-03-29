import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

import { Logo } from '@/components/layout/logo'
import { Separator } from '@/components/ui/separator'
import { siteConfig } from '@/lib/seo'

const navCols = [
  {
    title: 'Nos Produits',
    links: [
      { label: 'Compléments pour chien', to: '/produits?cat=complements' },
      { label: 'Croquettes pour chien', to: '/produits?cat=croquettes' },
      { label: 'Friandises pour chien', to: '/produits?cat=friandises' },
    ],
  },
  {
    title: 'Aide et Contact',
    links: [
      { label: 'Questions fréquentes', to: '/contact' },
      { label: 'Livraison et retours', to: '/contact' },
      { label: 'Nous contacter', to: '/contact' },
    ],
  },
  {
    title: 'À propos',
    links: [
      { label: 'Notre histoire', to: '/a-propos' },
      { label: 'Mentions légales', to: '/mentions-legales' },
      { label: 'Confidentialité', to: '/politique-de-confidentialite' },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="size-4 shrink-0 text-primary" aria-hidden />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                {siteConfig.email}
              </a>
            </div>
          </div>
          {navCols.map((col) => (
            <nav key={col.title} aria-label={col.title} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <Separator className="my-8 bg-border/60" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link to="/mentions-legales" className="text-xs text-muted-foreground hover:text-foreground">
              CGV / Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="text-xs text-muted-foreground hover:text-foreground">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
