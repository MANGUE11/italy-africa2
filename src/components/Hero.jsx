import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Scale, FileText, Building2, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
          alt="Justice background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-accent" />
                <span className="text-accent text-sm font-medium tracking-widest uppercase">
                  Engagés à accompagner la réussite de nos clients
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Votre sécurité{' '}
              <span className="text-accent italic">juridique</span>{' '}
              d'abord.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
            >
              ITALYAFRICA VRL est un cabinet de conseil juridique international, 
              avec ses partenaires, est la garantie de votre entreprise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-xl flex items-center gap-2 group"
              >
                Nous consulter
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white/40 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10 hover:border-white flex items-center gap-2"
              >
                Nos services
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-4 mt-10"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-1 text-accent">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 text-sm mt-1">4.9/5 (200+ avis clients)</p>
              </div>
            </motion.div>
          </div>

          {/* Right - Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:grid gap-4"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Conseil & Assistance Juridique</h3>
                  <p className="text-white/60 text-sm">Expertise juridique complète pour votre entreprise</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Gestion Administrative & Formation</h3>
                  <p className="text-white/60 text-sm">Accompagnement administratif et formations sur mesure</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Business & Gestion d'Actifs</h3>
                  <p className="text-white/60 text-sm">Solutions stratégiques pour vos investissements</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 pt-8 border-t border-white/20 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2 text-white/70">
            <MapPin size={18} className="text-accent" />
            <span className="text-sm">Notre siège : Casablanca, Maroc</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Phone size={18} className="text-accent" />
            <span className="text-sm">Consultation gratuite : +212 (0)5 22 92 82 15</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
