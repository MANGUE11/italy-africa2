import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { CheckCircle, Zap, Target, Eye, Award, Leaf, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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
    description: 'Des standards d\'excellence appliqués à chacune de nos prestations.',
  },
  {
    icon: Leaf,
    title: 'Durabilité',
    description: 'Des solutions pensées pour le long terme, respectueuses de l\'environnement.',
  },
]

const Valeurs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Nos Valeurs</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">
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
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <valeur.icon className="text-bordeaux" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">
                {valeur.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
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
