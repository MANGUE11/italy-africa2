import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, FileText, BarChart3, Landmark, AlertTriangle, MoreHorizontal, Plus, ArrowRight, Check } from 'lucide-react'

const PageHeader = ({ title, subtitle }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      <div className="relative z-10 container-custom text-center text-white">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="font-serif text-5xl md:text-6xl font-bold mb-4">{title}</motion.h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center justify-center gap-2 text-white/70">
          <Link to="/" className="hover:text-accent transition-colors">Accueil</Link><span>&gt;</span><span className="text-accent">{subtitle}</span>
        </motion.div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: Shield, title: 'Proteger son activite',
    desc: 'Protection juridique complete de votre entreprise et de vos actifs.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    details: ['Due diligence juridique', 'Protection des actifs intellectuels', 'Conformite reglementaire', 'Gestion des litiges'],
  },
  {
    icon: FileText, title: 'Contrats',
    desc: 'Redaction, negociation et gestion de tous types de contrats commerciaux.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80',
    details: ['Redaction de contrats', 'Negociation commerciale', 'Revision contractuelle', 'Gestion des litiges contractuels'],
  },
  {
    icon: BarChart3, title: 'Informations commerciales',
    desc: 'Analyse et veille juridique pour vos decisions commerciales.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    details: ['Veille juridique', 'Analyse de marche', 'Due diligence commerciale', 'Rapports strategiques'],
  },
  {
    icon: Landmark, title: 'Banque et Finance',
    desc: 'Conseil en droit bancaire et reglementation financiere.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
    details: ['Droit bancaire', 'Reglementation financiere', 'Financements structurés', 'Gestion des risques'],
  },
  {
    icon: AlertTriangle, title: 'Risques',
    desc: 'Identification et gestion des risques juridiques et conformite.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    details: ['Audit juridique', 'Gestion des risques', 'Conformite', 'Prevention des litiges'],
  },
  {
    icon: MoreHorizontal, title: 'Autres Secteurs De Competences',
    desc: 'Expertise dans divers domaines du droit des affaires.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
    details: ['Droit immobilier', 'Droit social', 'Droit fiscal', 'Arbitrage international'],
  },
]

const categories = [
  'Proteger son activite', 'Contrats', 'Informations commerciales',
  'Banque et Finance', 'Risques', 'Autres Secteurs',
]

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main>
      <PageHeader title="Nos axes d'intervention" subtitle="Services" />

      <section ref={ref} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Services Grid */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-cream rounded-3xl overflow-hidden card-hover"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <service.icon className="text-accent" size={20} />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-bold text-primary mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                      <ul className="space-y-2 mb-4">
                        {service.details.map((d, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check size={14} className="text-accent flex-shrink-0" />{d}
                          </li>
                        ))}
                      </ul>
                      <button className="inline-flex items-center gap-2 text-accent font-medium text-sm">
                        <Plus size={16} /> En savoir plus
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-cream rounded-2xl p-6">
                <h4 className="font-serif text-xl font-bold text-primary mb-6">Categories</h4>
                <div className="space-y-3">
                  {categories.map((cat, i) => (
                    <button key={i} className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-xl text-sm text-gray-700 hover:bg-accent hover:text-white transition-all group">
                      {cat}
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-6 text-white">
                <h4 className="font-serif text-xl font-bold mb-4">Besoin d'aide ?</h4>
                <p className="text-white/70 text-sm mb-6">Contactez-nous pour une consultation gratuite et personnalisee.</p>
                <Link to="/contact" className="block bg-accent text-white text-center py-3 rounded-full font-medium hover:bg-accent-light transition-colors">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
