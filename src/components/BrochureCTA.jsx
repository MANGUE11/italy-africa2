import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'

const BrochureCTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
            <Download className="text-accent" size={24} />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Découvrez ITALYAFRICA en détail
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Téléchargez notre brochure pour en savoir plus sur nos services et notre expertise juridique internationale.
          </p>
          <button className="bg-accent text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-accent-light hover:shadow-xl flex items-center gap-3 group">
            BROCHURE
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BrochureCTA
