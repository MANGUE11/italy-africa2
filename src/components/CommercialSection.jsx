import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const commercialItems = [
  { num: '01', title: 'Logement', desc: 'Accompagnement dans la recherche et la gestion de biens immobiliers résidentiels et commerciaux.' },
  { num: '02', title: 'Restauration', desc: 'Conseil et accompagnement pour l\'ouverture et la gestion de restaurants et établissements de restauration.' },
  { num: '03', title: "Architecture d'Intérieur", desc: 'Solutions de design et d\'aménagement intérieur adaptées à vos espaces et à votre budget.' },
  { num: '04', title: 'Import-Export de Marchandises', desc: 'Gestion complète de vos opérations d\'import-export entre l\'Italie et l\'Afrique.' },
  { num: '05', title: 'Cours de Langues & Formations', desc: 'Programmes de formation linguistique et professionnelle pour faciliter votre intégration.' },
]

const CommercialSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Notre Section<br />Commerciale
          </h2>
          <p className="text-gray-600 max-w-xl">
            Nous transformons vos projets en réussite. Un accompagnement sur mesure pour chaque secteur d'activité, de l'idée à la concrétisation.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {commercialItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="text-6xl font-serif font-bold text-gray-200 group-hover:text-accent/30 transition-colors mb-4">
                {item.num}
              </div>
              <div className="w-12 h-0.5 bg-accent mb-4" />
              <h3 className="font-serif text-xl font-bold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommercialSection
