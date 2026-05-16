import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Home, UtensilsCrossed, Palette, Package, BookOpen } from 'lucide-react'

const commercialItems = [
  {
    num: '01',
    icon: Home,
    title: 'Logement',
    desc: "Accompagnement dans la recherche et la gestion de biens immobiliers résidentiels et commerciaux.",
  },
  {
    num: '02',
    icon: UtensilsCrossed,
    title: 'Restauration',
    desc: "Conseil et accompagnement pour l'ouverture et la gestion de restaurants et établissements de restauration.",
  },
  {
    num: '03',
    icon: Palette,
    title: "Architecture d'Intérieur",
    desc: "Solutions de design et d'aménagement intérieur adaptées à vos espaces et à votre budget.",
  },
  {
    num: '04',
    icon: Package,
    title: 'Import-Export de Marchandises',
    desc: "Gestion complète de vos opérations d'import-export entre l'Italie et l'Afrique.",
  },
  {
    num: '05',
    icon: BookOpen,
    title: 'Cours de Langues & Formations',
    desc: "Programmes de formation linguistique et professionnelle pour faciliter votre intégration.",
  },
]

const CommercialSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
              Nos Domaines
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
              Notre Section<br />Commerciale
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed md:text-right">
            Un accompagnement sur mesure pour chaque secteur d'activité, de l'idée à la concrétisation.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {commercialItems.map((item, index) => {
            const Icon = item.icon
            const isLast = index === commercialItems.length - 1
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className={`group relative bg-gray-50 rounded-2xl p-8 border border-gray-100
                  hover:bg-white hover:border-accent/30 hover:shadow-md transition-all duration-300
                  ${isLast ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Top row: number + icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] font-bold tracking-[0.25em] text-accent/70 uppercase">
                    {item.num}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center
                    group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon size={20} className="text-accent" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-primary mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Accent bar */}
                <div className="w-7 h-[2px] bg-accent/40 mb-4 group-hover:w-12 transition-all duration-300 rounded-full" />

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CommercialSection
