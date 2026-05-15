import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Linkedin } from 'lucide-react'

const team = [
  { name: 'Moussa Kanté', role: 'Associé Fondateur', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
  { name: 'Sofia Esposito', role: 'Associée', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { name: 'Amadou Diallo', role: 'Associé', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Chiara Romano', role: 'Associée', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
]

const TeamSection = () => {
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
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Notre Équipe</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">
              L'Équipe du Cabinet
            </h2>
          </div>
          <Link
            to="/team"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-primary hover:text-white group"
          >
            Voir toute l'équipe
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Social Link */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <Linkedin size={18} className="text-primary" />
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-primary group-hover:text-accent transition-colors">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
