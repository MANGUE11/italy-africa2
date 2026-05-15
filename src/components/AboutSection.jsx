import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Qui sommes nous</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">
            À propos de nous
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Office"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-4 md:right-8 bg-primary text-white rounded-2xl p-6 shadow-2xl">
              <div className="text-4xl font-bold text-accent">20+</div>
              <div className="text-sm text-white/80 mt-1">Ans d'expérience</div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-bordeaux text-sm font-semibold tracking-wider uppercase">
              Cabinet Juridique Professionnel & Expérimenté
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
              Vous êtes au bon endroit
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              ITALYAFRICA VRL est un cabinet de conseil juridique international, avec ses partenaires, 
              est la garantie de votre entreprise. Grâce à sa présence dans plusieurs pays africains, 
              il offre une assistance professionnelle multidisciplinaire, sur mesure et de qualité pour 
              les particuliers et les entreprises qui souhaitent investir sur le continent africain.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Notre objectif principal est d'offrir à nos clients un partenaire solide et transparent, 
              opérant dans le plein respect des réglementations et des principes éthiques.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                'Proven track record of success',
                'Client-focused and compassionate approach',
                'Expertise across a wide range of legal services',
                'Transparent communication and ethical representation'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="text-accent" size={24} />
                </div>
                <div>
                  <div className="font-bold text-primary">20 Ans d'expérience</div>
                  <p className="text-sm text-gray-500">Une expertise reconnue au service de vos projets internationaux</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="text-accent" size={24} />
                </div>
                <div>
                  <div className="font-bold text-primary">Définir le Succès</div>
                  <p className="text-sm text-gray-500">Des solutions sur mesure qui transforment vos ambitions en résultats concrets</p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-accent-dark hover:shadow-lg group"
            >
              En savoir plus
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
