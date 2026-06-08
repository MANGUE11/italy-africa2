import { useInView } from 'react-intersection-observer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CheckCircle, Zap, Target, Eye, Award, Leaf, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const valeurs = [
  {
    icon: CheckCircle,
    title: 'Compétence',
    description: 'Une expertise reconnue dans chaque domaine pour vous offrir les meilleures solutions juridiques.',
  },
  {
    icon: Zap,
    title: 'Proactivité',
    description: 'Nous anticipons vos besoins et agissons avant que les problèmes ne surviennent.',
  },
  {
    icon: Target,
    title: 'Efficacité',
    description: 'Des résultats concrets et mesurables, obtenus dans les meilleurs délais.',
  },
  {
    icon: Eye,
    title: 'Transparence',
    description: 'Une communication claire et honnête à chaque étape de notre collaboration.',
  },
  {
    icon: Award,
    title: 'Qualité',
    description: "Des standards d'excellence appliqués à chacune de nos prestations.",
  },
  {
    icon: Leaf,
    title: 'Durabilité',
    description: "Des solutions pensées pour le long terme, respectueuses de l'environnement.",
  },
]

const Valeurs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Image parallaxe — couvre toute la section avec marge */}
      <motion.div
        className="absolute -inset-x-0 -top-20 -bottom-20"
        style={{ y: bgY }}
      >
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Overlay blanc léger pour fond clair */}
        <div className="absolute inset-0 bg-white/88" />
      </motion.div>

      {/* Contenu */}
      <div ref={ref} className="relative z-10 container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Nos Valeurs</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-3">
            Nos Valeurs
          </h2>
        </motion.div>

        {/* Valeurs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valeurs.map((valeur, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8
                hover:bg-white hover:shadow-md transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6
                group-hover:bg-accent/20 transition-colors">
                <valeur.icon className="text-bordeaux" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">
                {valeur.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {valeur.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-4 transition-all"
          >
            Voir tous nos axes
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Valeurs
