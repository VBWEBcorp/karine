import { motion } from 'framer-motion'
import { ArrowRight, Award, FlaskConical, Heart, Leaf, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SeoHead } from '@/components/seo/seo-head'
import { Button } from '@/components/ui/button'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: "easeOut" as const },
}

const values = [
  {
    icon: FlaskConical,
    title: 'Rigueur scientifique',
    description: 'Chaque formule est développée à partir de la littérature scientifique la plus récente, validée par notre comité vétérinaire.',
  },
  {
    icon: Leaf,
    title: 'Ingrédients naturels',
    description: 'Nous sourçons les meilleurs ingrédients naturels, traçables et certifiés, pour une efficacité maximale sans compromis.',
  },
  {
    icon: Heart,
    title: 'L\'amour des animaux',
    description: 'Tout a commencé par l\'amour de nos propres chiens. Cette passion guide chacune de nos décisions.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparence totale',
    description: 'Nos compositions sont publiques, nos certifications vérifiables. Pas de marketing trompeur, que des résultats.',
  },
]

const timeline = [
  { year: '2021', title: 'L\'idée naît', description: 'Confrontés aux problèmes de santé de nos chiens, nous cherchions des solutions naturelles efficaces. Aucune ne nous satisfaisait.' },
  { year: '2022', title: 'Les premiers produits', description: 'Après 18 mois de R&D avec des vétérinaires, nous lançons nos 3 premiers compléments. Le succès est immédiat.' },
  { year: '2023', title: 'Certification GMP+', description: 'Nous obtenons la certification GMP+, l\'une des plus exigeantes d\'Europe pour la nutrition animale.' },
  { year: '2024', title: '50 000 chiens heureux', description: 'Notre communauté grandit. Les retours sont unanimes : nos produits changent la vie de leurs compagnons.' },
  { year: '2025', title: 'Gamme complète', description: 'Lancement des croquettes et friandises. PawVital devient une marque complète pour le bien-être canin.' },
  { year: '2026', title: '75 000+ clients', description: 'Aujourd\'hui, plus de 75 000 chiens profitent de nos produits au quotidien, et ce n\'est que le début.' },
]

export function AboutPage() {
  return (
    <>
      <SeoHead
        title="Notre Histoire"
        description="Découvrez l'histoire de PawVital, la marque française de compléments naturels pour chiens."
        canonical="/a-propos"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">Notre histoire</span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              La mission qui nous anime
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Nous avons créé PawVital pour offrir aux chiens le bien-être qu'ils méritent.
              Parce qu'ils nous donnent tant, nous voulions leur rendre à notre façon,
              avec des produits qui les aident simplement à vivre heureux à vos côtés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-muted/20 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { value: '75 000+', label: 'Chiens heureux' },
            { value: '4,8/5', label: 'Note moyenne' },
            { value: '12', label: 'Produits' },
            { value: 'GMP+', label: 'Certification' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Nos valeurs</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Quatre piliers qui guident chacune de nos décisions, du laboratoire jusqu'à la gamelle.
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="flex gap-5 rounded-2xl border border-border/50 bg-card p-6"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Notre parcours</h2>
          </motion.div>
          <div className="mx-auto max-w-2xl space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {item.year.slice(2)}
                  </span>
                  {i < timeline.length - 1 && <div className="mt-2 w-px flex-1 bg-border" />}
                </div>
                <div className="pb-8">
                  <p className="text-xs font-medium text-primary">{item.year}</p>
                  <h3 className="mt-1 font-display font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">L'équipe</h2>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { initials: 'TL', name: 'Thomas Laurent', role: 'Co-fondateur & CEO', desc: 'Papa de Nala, Golden Retriever de 8 ans.' },
              { initials: 'CM', name: 'Dr Cristina Martin', role: 'Directrice scientifique', desc: 'Vétérinaire nutritionniste, 15 ans d\'expérience.' },
              { initials: 'SB', name: 'Sophie Bernard', role: 'Co-fondatrice & COO', desc: 'Maman de Rex, Berger Australien de 5 ans.' },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="rounded-2xl border border-border/50 bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                  {member.initials}
                </div>
                <h3 className="font-display font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 text-center text-primary-foreground sm:px-16"
          >
            <Award className="mx-auto mb-4 size-10 opacity-80" />
            <h2 className="font-display text-3xl font-bold">Rejoignez l'aventure PawVital</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Offrez à votre compagnon des produits conçus avec amour et science.
            </p>
            <Button size="lg" variant="secondary" className="mt-8" asChild>
              <Link to="/produits">
                Découvrir nos produits <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
