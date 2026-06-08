import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const pays = [
  { nom: "Côte d'Ivoire", ville: 'Abidjan',      code: 'ci' },
  { nom: 'Maroc',         ville: 'Casablanca',    code: 'ma' },
  { nom: 'Italie',        ville: 'Rome',          code: 'it' },
  { nom: 'Sénégal',       ville: 'Dakar',         code: 'sn' },
  { nom: 'Burkina Faso',  ville: 'Ouagadougou',   code: 'bf' },
  { nom: 'Rép. Centrafricaine', ville: 'Bangui',  code: 'cf' },
]

const PresenceSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-accent block mb-3">
              Présence internationale
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
              Nous sommes<br />à vos côtés
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
            Un réseau établi sur 3 continents pour vous accompagner où que vous soyez.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {pays.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-accent/25
                hover:shadow-md rounded-2xl p-5 flex flex-col items-center text-center
                transition-all duration-300 cursor-default"
            >
              {/* Drapeau */}
              <div className="w-14 h-14 rounded-xl overflow-hidden mb-4 shadow-sm flex-shrink-0
                group-hover:scale-105 transition-transform duration-300">
                <img
                  src={`https://flagcdn.com/w80/${p.code}.png`}
                  alt={p.nom}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Nom pays */}
              <h3 className="font-serif font-bold text-primary text-sm leading-tight mb-1">
                {p.nom}
              </h3>

              {/* Ville */}
              <div className="flex items-center gap-1 text-gray-400 text-xs">
                <MapPin size={10} strokeWidth={2} />
                <span>{p.ville}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-3"
        >
          <div className="flex -space-x-1">
            {pays.map((p, i) => (
              <img
                key={i}
                src={`https://flagcdn.com/w40/${p.code}.png`}
                alt={p.nom}
                className="w-6 h-6 rounded-full object-cover border-2 border-white shadow-sm"
              />
            ))}
          </div>
          <span className="text-sm text-gray-400">
            <span className="font-semibold text-primary">6 pays</span> · 3 continents · 1 réseau
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default PresenceSection
