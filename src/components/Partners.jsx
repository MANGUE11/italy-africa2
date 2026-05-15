import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const partners = [
  { name: 'CCI ITALIA', desc: 'Camera di Commercio Italiana in Marocco', sub: 'CCI MAROC' },
  { name: 'COIN CHIC', desc: 'Chez Vicky', sub: 'RESTAURANT COIN CHIC' },
  { name: 'AVILA', desc: 'Mining', sub: 'AVILA MINING' },
]

const Partners = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} id="partenaires" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Nos Partenaires</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">
            Des partenaires de confiance à nos côtés
          </h2>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <span className="font-serif font-bold text-2xl text-primary">{partner.name.charAt(0)}</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">{partner.name}</h3>
              <p className="text-gray-500 text-xs mt-1">{partner.desc}</p>
              <span className="inline-block mt-3 px-4 py-1 bg-cream rounded-full text-xs text-gray-600">
                {partner.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
