import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Target, CheckCircle, Zap, Eye, Leaf } from 'lucide-react'

const PageHeader = ({ title, subtitle }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      <div className="relative z-10 container-custom text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-white/70"
        >
          <Link to="/" className="hover:text-accent transition-colors">Accueil</Link>
          <span>&gt;</span>
          <span className="text-accent">{subtitle}</span>
        </motion.div>
      </div>
    </section>
  )
}

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main>
      <PageHeader title="Qui sommes nous" subtitle="A propos" />

      <section ref={ref} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Office" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-4 md:right-8 bg-primary text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-4xl font-bold text-accent">20+</div>
                <div className="text-sm text-white/80 mt-1">Ans d'experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-bordeaux text-sm font-semibold tracking-wider uppercase">Cabinet Juridique Professionnel & Experimente</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">Vous etes au bon endroit</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ITALYAFRICA VRL est un cabinet de conseil juridique international, avec ses partenaires, est la garantie de votre entreprise. Grace a sa presence dans plusieurs pays africains, il offre une assistance professionnelle multidisciplinaire, sur mesure et de qualite pour les particuliers et les entreprises qui souhaitent investir sur le continent africain.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Notre objectif principal est d'offrir a nos clients un partenaire solide et transparent, operant dans le plein respect des reglementations et des principes ethiques.
              </p>
              <div className="space-y-4 mb-8">
                {['Proven track record of success', 'Client-focused and compassionate approach', 'Expertise across a wide range of legal services', 'Transparent communication and ethical representation'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0"><div className="w-2 h-2 rounded-full bg-accent" /></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-accent-dark hover:shadow-lg group">
                Nos services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Nos Valeurs</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">Nos Valeurs</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle, title: 'Competence', desc: 'Une expertise reconnue dans chaque domaine pour vous offrir les meilleures solutions juridiques.' },
              { icon: Zap, title: 'Proactivite', desc: 'Nous anticipons vos besoins et agissons avant que les problemes ne surviennent.' },
              { icon: Target, title: 'Efficacite', desc: 'Des resultats concrets et mesurables, obtenus dans les meilleurs delais.' },
              { icon: Eye, title: 'Transparence', desc: 'Une communication claire et honnete a chaque etape de notre collaboration.' },
              { icon: Award, title: 'Qualite', desc: "Des standards d'excellence appliques a chacune de nos prestations." },
              { icon: Leaf, title: 'Durabilite', desc: "Des solutions pensees pour le long terme, respectueuses de l'environnement." },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-6"><v.icon className="text-bordeaux" size={28} /></div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partenaires" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Nos Partenaires</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">Des partenaires de confiance a nos cotes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'CCI ITALIA', desc: 'Camera di Commercio Italiana in Marocco', sub: 'CCI MAROC' },
              { name: 'COIN CHIC', desc: 'Chez Vicky', sub: 'RESTAURANT COIN CHIC' },
              { name: 'AVILA', desc: 'Mining', sub: 'AVILA MINING' },
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center"><span className="font-serif font-bold text-2xl text-primary">{p.name.charAt(0)}</span></div>
                <h3 className="font-serif text-lg font-bold text-primary">{p.name}</h3>
                <p className="text-gray-500 text-xs mt-1">{p.desc}</p>
                <span className="inline-block mt-3 px-4 py-1 bg-cream rounded-full text-xs text-gray-600">{p.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
