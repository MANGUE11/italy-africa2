import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Reference = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
              UN VÉRITABLE POINT DE
            </h2>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 underline-accent">
              RÉFÉRENCE
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Italyafrica est organisée en départements dédiés à des domaines spécifiques du droit, 
              offrant aux clients une assistance juridique complète et personnalisée.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Chaque département, coordonné par un senior partner d'une expérience reconnue, 
              est capable de traiter les questions juridiques les plus complexes avec le plus grand 
              professionnalisme et détermination, garantissant toujours des solutions innovantes et 
              sur mesure pour les besoins de chaque client.
            </p>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80"
                alt="Colosseum"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />

              {/* Overlay Text */}
              <div className="absolute top-8 right-8 text-right">
                <div className="text-white/90 text-sm font-medium tracking-wider">20 ANS D'EXPÉRIENCE</div>
                <div className="text-white text-xs mt-1">AU SERVICE DE VOTRE PROTECTION</div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-accent/20 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Reference
