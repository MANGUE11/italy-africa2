import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, FileText, BarChart3, Landmark, AlertTriangle, MoreHorizontal, Plus } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Protéger son activité',
    description: 'Protection juridique complète de votre entreprise et de vos actifs.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  },
  {
    icon: FileText,
    title: 'Contrats',
    description: 'Rédaction, négociation et gestion de tous types de contrats commerciaux.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80',
  },
  {
    icon: BarChart3,
    title: 'Informations commerciales',
    description: 'Analyse et veille juridique pour vos décisions commerciales.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
  {
    icon: Landmark,
    title: 'Banque et Finance',
    description: 'Conseil en droit bancaire et réglementation financière.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
  },
  {
    icon: AlertTriangle,
    title: 'Risques',
    description: 'Identification et gestion des risques juridiques et conformité.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    icon: MoreHorizontal,
    title: 'Autres Secteurs',
    description: 'Expertise dans divers domaines du droit des affaires.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
  },
]

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Nos axes d'intervention</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">
              Des solutions juridiques et<br />stratégiques adaptées
            </h2>
          </div>
          <Link
            to="/services"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-primary hover:text-white group"
          >
            Voir tous nos axes
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-cream rounded-3xl overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <service.icon className="text-accent" size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="inline-flex items-center gap-2 text-accent font-medium text-sm group/btn">
                  <Plus size={16} className="group-hover/btn:rotate-90 transition-transform" />
                  En savoir plus
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
