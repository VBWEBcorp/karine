import { motion } from 'framer-motion'
import { Check, ChevronDown, Mail, MessageCircle, Truck } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { SeoHead } from '@/components/seo/seo-head'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { siteConfig } from '@/lib/seo'
import { cn } from '@/lib/utils'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

const faqs = [
  {
    q: 'Combien de temps faut-il pour voir les résultats ?',
    a: 'Les premiers résultats apparaissent généralement entre 2 et 4 semaines d\'utilisation régulière. Pour des résultats optimaux, nous recommandons une cure de 3 mois minimum.',
  },
  {
    q: 'Les produits conviennent-ils à toutes les races ?',
    a: 'Oui, nos compléments sont formulés pour convenir à toutes les races et tailles de chiens. Le dosage est adapté en fonction du poids de votre animal.',
  },
  {
    q: 'Puis-je donner plusieurs compléments en même temps ?',
    a: 'Absolument. Nos compléments sont conçus pour être complémentaires et peuvent être combinés sans risque. Consultez votre vétérinaire pour un programme personnalisé.',
  },
  {
    q: 'Quelle est votre politique de retour ?',
    a: 'Nous offrons une garantie satisfait ou remboursé de 30 jours. Si les résultats ne sont pas au rendez-vous, nous vous remboursons intégralement.',
  },
  {
    q: 'Les frais de livraison sont-ils offerts ?',
    a: 'La livraison est gratuite en France métropolitaine dès 50€ d\'achat. En dessous, les frais de livraison sont de 4,90€. Expédition sous 24-48h ouvrées.',
  },
  {
    q: 'Où sont fabriqués vos produits ?',
    a: 'Tous nos produits sont fabriqués en Europe, dans des laboratoires certifiés GMP+. Nous travaillons exclusivement avec des partenaires répondant aux normes les plus strictes.',
  },
]

export function ContactPage() {
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <>
      <SeoHead
        title="Aide & Contact"
        description="Besoin d'aide ? Consultez notre FAQ ou contactez l'équipe PawVital."
        canonical="/contact"
      />

      <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1 {...fadeUp} className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Aide & Contact
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-muted-foreground"
          >
            Une question ? Consultez notre FAQ ci-dessous ou écrivez-nous directement.
          </motion.p>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* FAQ */}
            <motion.div {...fadeUp}>
              <h2 className="mb-6 font-display text-2xl font-bold">Questions fréquentes</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border/70 bg-card"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between p-4 text-left"
                    >
                      <span className="pr-4 text-sm font-medium">{faq.q}</span>
                      <ChevronDown
                        className={cn(
                          'size-4 shrink-0 text-muted-foreground transition-transform duration-200',
                          openFaq === i && 'rotate-180'
                        )}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === i ? 'auto' : 0,
                        opacity: openFaq === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
              <h2 className="mb-6 font-display text-2xl font-bold">Nous contacter</h2>

              <div className="mb-6 flex gap-4">
                <div className="flex items-center gap-2 rounded-xl bg-muted/50 px-4 py-3 text-sm">
                  <Mail className="size-4 text-primary" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:underline">{siteConfig.email}</a>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-muted/50 px-4 py-3 text-sm">
                  <MessageCircle className="size-4 text-primary" />
                  <span>24-48h ouvrées</span>
                </div>
              </div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
                >
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <Check className="size-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">Message envoyé !</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Merci pour votre message. Notre équipe vous répondra sous 24-48h ouvrées.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border/70 bg-card p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Nom</Label>
                      <Input id="contactName" placeholder="Marie Dupont" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email</Label>
                      <Input id="contactEmail" type="email" placeholder="marie@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input id="subject" placeholder="Question sur un produit..." required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      rows={5}
                      className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Décrivez votre question ou problème..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" disabled={loading}>
                    {loading ? 'Envoi...' : 'Envoyer le message'}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Shipping info */}
          <motion.div
            {...fadeUp}
            className="mt-16 grid gap-6 sm:grid-cols-3"
          >
            {[
              { icon: Truck, title: 'Livraison rapide', desc: 'Expédition sous 24-48h ouvrées. Gratuite dès 50€.' },
              { icon: Mail, title: 'Support réactif', desc: 'Notre équipe répond à toutes vos questions sous 24-48h.' },
              { icon: Check, title: 'Satisfait ou remboursé', desc: 'Garantie 30 jours. Retours gratuits et sans conditions.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-border/50 bg-card p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
