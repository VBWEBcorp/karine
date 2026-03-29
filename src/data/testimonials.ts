export type Testimonial = {
  id: string
  name: string
  dogName: string
  rating: number
  text: string
  product: string
  verified: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Stéphane T.',
    dogName: 'Sheeva',
    rating: 5,
    text: 'Depuis que Sheeva prend PawVital Relaxation, elle est beaucoup plus détendue lors de ses sorties. Merci PawVital !',
    product: 'Relaxation',
    verified: true,
  },
  {
    id: 't2',
    name: 'Hélène C.',
    dogName: 'Pookie',
    rating: 5,
    text: 'Pookie est un shiba naturellement stressé mais depuis qu\'elle prend PawVital, elle est beaucoup plus détendue et sereine !',
    product: 'Relaxation',
    verified: true,
  },
  {
    id: 't3',
    name: 'Cindy B.',
    dogName: 'Melba',
    rating: 4,
    text: 'Après un mois Melba se gratte beaucoup moins. On voit une nette amélioration sur ses démangeaisons et un poil plus doux. Je recommande !',
    product: 'Démangeaisons',
    verified: true,
  },
  {
    id: 't4',
    name: 'Josiane V.',
    dogName: 'Nouky',
    rating: 5,
    text: 'Nouky se grattait énormément et se mordillait les pattes à sang ! Grâce à PawVital Démangeaisons c\'est terminé !',
    product: 'Démangeaisons',
    verified: true,
  },
  {
    id: 't5',
    name: 'Clara L.',
    dogName: 'Luna',
    rating: 5,
    text: 'Cela fait 3 mois que ma louloute de 14 ans prend PawVital Articulations... Une nouvelle vie s\'offre à elle ! Trop heureuse de la voir comme ça !',
    product: 'Articulations',
    verified: true,
  },
  {
    id: 't6',
    name: 'Philippe C.',
    dogName: 'Jack',
    rating: 5,
    text: 'Notre petit Jack, vieux pépère de 15 ans, se porte à merveille. Grâce à PawVital, il retrouve son dynamisme et sa jeunesse !',
    product: 'Articulations',
    verified: true,
  },
  {
    id: 't7',
    name: 'Laurence B.',
    dogName: 'Tsuki',
    rating: 5,
    text: 'Pour mon petit Yorkshire TSUKI 3 ans qui a des soucis de digestion... Depuis ça va nettement mieux en plus il les prend facilement.',
    product: 'Probiotiques',
    verified: true,
  },
  {
    id: 't8',
    name: 'Anaëlle G.',
    dogName: 'Vava',
    rating: 5,
    text: 'Depuis que ma Vava prend PawVital Probiotiques, ses intestins vont beaucoup mieux. Meilleure appétit et plus de gargouillement. Très satisfaite !',
    product: 'Probiotiques',
    verified: true,
  },
]
