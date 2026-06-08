import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Home, UtensilsCrossed, Palette, Package, BookOpen,
  ArrowRight, CheckCircle, ArrowUpRight,
} from 'lucide-react'

const services = [
  {
    num: '01',
    icon: Home,
    title: 'Logement',
    tagline: 'Résidentiel & Commercial',
    desc: "Nous vous accompagnons dans la recherche, l'acquisition et la gestion de biens immobiliers résidentiels et commerciaux entre l'Italie et l'Afrique.",
    points: [
      'Recherche de biens sur mesure',
      'Négociation et acquisition',
      'Gestion locative',
      'Investissement immobilier',
    ],
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
    border: 'border-emerald-100',
  },
  {
    num: '02',
    icon: UtensilsCrossed,
    title: 'Restauration',
    tagline: 'Ouverture & Gestion',
    desc: "Conseil stratégique et accompagnement opérationnel pour l'ouverture, la gestion et le développement de vos établissements de restauration.",
    points: [
      "Étude de marché et faisabilité",
      'Montage du projet et financement',
      'Recrutement et formation',
      'Suivi et optimisation',
    ],
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-100',
    border: 'border-orange-100',
  },
  {
    num: '03',
    icon: Palette,
    title: "Architecture d'Intérieur",
    tagline: 'Design & Aménagement',
    desc: "Des solutions créatives d'aménagement intérieur alliant esthétique italienne et influences africaines, adaptées à vos espaces et votre budget.",
    points: [
      'Conception et plans 3D',
      'Sélection des matériaux',
      'Coordination des travaux',
      'Livraison clé en main',
    ],
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    border: 'border-purple-100',
  },
  {
    num: '04',
    icon: Package,
    title: 'Import-Export de Marchandises',
    tagline: 'Italie ↔ Afrique',
    desc: "Gestion complète de vos opérations commerciales internationales : sourcing, logistique, douane et distribution entre l'Italie et les marchés africains.",
    points: [
      'Sourcing fournisseurs italiens',
      'Gestion logistique et douane',
      'Distribution locale',
      'Conformité réglementaire',
    ],
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    border: 'border-blue-100',
  },
  {
    num: '05',
    icon: BookOpen,
    title: 'Cours de Langues & Formations',
    tagline: 'Intégration & Développement',
    desc: "Programmes linguistiques et professionnels sur mesure pour faciliter votre intégration en Italie ou votre développement sur les marchés africains.",
    points: [
      'Italien, Français, Anglais',
      'Formations juridiques et business',
      'Coaching interculturel',
      'Certification reconnue',
    ],
    color: 'bg-rose-50',
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-100',
    border: 'border-rose-100',
  },
]

const HeroBanner = () => (
  <div className="relative w-full h-52 md:h-64 overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
      alt="Section Commerciale"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-primary/70" />
    <div className="absolute inset-0 flex items-center px-6 lg:px-16">
      <div>
        <span className="text-accent text-xs font-bold tracking-[0.25em] uppercase block mb-2">
          Nos Domaines Commerciaux
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
          Notre Section Commerciale
        </h1>
      </div>
    </div>
  </div>
)

const PageHeader = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section ref={ref} className="bg-white border-b border-gray-100 pt-12 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-gray-400 mb-10"
        >
          <Link to="/" className="hover:text-accent transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-primary font-medium">Section Commerciale</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent mb-4">
              Nos Domaines Commerciaux
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary leading-tight">
              Notre Section<br />
              <span className="text-accent">Commerciale</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="space-y-4"
          >
            <p className="text-gray-500 text-base leading-relaxed">
              Nous transformons vos projets en réussites concrètes. Un accompagnement
              sur mesure dans chaque secteur d'activité, de l'idée à la concrétisation,
              entre l'Italie et l'Afrique.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
            >
              Prendre contact
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-gray-100"
        >
          {[
            { value: '5', label: 'Secteurs couverts' },
            { value: '6', label: 'Pays de présence' },
            { value: '100%', label: 'Sur mesure' },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-serif text-3xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const ServiceCard = ({ item, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const Icon = item.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border ${item.border}`}
    >
      {/* Colored side */}
      <div className={`${item.color} p-10 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div>
          <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
            <Icon size={26} className={item.iconColor} strokeWidth={1.5} />
          </div>
          <span className={`text-xs font-bold tracking-[0.2em] uppercase ${item.iconColor} mb-2 block`}>
            {item.tagline}
          </span>
          <h2 className="font-serif text-3xl font-bold text-primary mb-4 leading-tight">
            {item.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            {item.desc}
          </p>
        </div>
        <div className={`text-7xl font-serif font-bold ${item.iconColor} opacity-10 mt-6 select-none`}>
          {item.num}
        </div>
      </div>

      {/* White side */}
      <div className={`bg-white p-10 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <h3 className="font-serif text-lg font-bold text-primary mb-6">
          Ce que nous proposons
        </h3>
        <ul className="space-y-4">
          {item.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle size={18} className={`${item.iconColor} flex-shrink-0 mt-0.5`} strokeWidth={1.5} />
              <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className={`mt-8 inline-flex items-center gap-2 text-sm font-medium ${item.iconColor} group`}
        >
          En savoir plus
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

const Commercial = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <HeroBanner />
      <PageHeader />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {services.map((item, index) => (
            <ServiceCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* CTA bottom */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-3xl font-bold text-white mb-3">
                Un projet en tête ?
              </h3>
              <p className="text-white/60 text-sm max-w-md">
                Nos experts sont disponibles pour étudier votre situation et vous proposer
                un accompagnement adapté à vos objectifs.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 bg-accent text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-accent-dark transition-colors flex items-center gap-2"
            >
              Nous contacter
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Commercial
