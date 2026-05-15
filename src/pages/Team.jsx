import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Linkedin, Mail, ArrowRight } from 'lucide-react'

const PageHeader = ({ title, subtitle }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section ref={ref} className='relative py-32 overflow-hidden'>
      <div className='absolute inset-0'>
        <img
          src='https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80'
          alt=''
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-primary/90' />
      </div>
      <div className='relative z-10 container-custom text-center text-white'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='font-serif text-5xl md:text-6xl font-bold mb-4'
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex items-center justify-center gap-2 text-white/70'
        >
          <Link to='/' className='hover:text-accent transition-colors'>
            Accueil
          </Link>
          <span>&gt;</span>
          <span className='text-accent'>{subtitle}</span>
        </motion.div>
      </div>
    </section>
  )
}

const team = [
  {
    name: 'Moussa Kante',
    role: 'Associe Fondateur',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: "Expert en droit international avec plus de 20 ans d'experience.",
  },
  {
    name: 'Sofia Esposito',
    role: 'Associee',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Specialiste en droit des affaires et conformite europeenne.',
  },
  {
    name: 'Amadou Diallo',
    role: 'Associe',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Expert en droit africain et investissements internationaux.',
  },
  {
    name: 'Chiara Romano',
    role: 'Associee',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Specialiste en mediation et resolution des conflits.',
  },
  {
    name: 'Robert Simmons',
    role: 'CEO & Fondateur',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Stratege en developpement commercial international.',
  },
  {
    name: 'Emma Johnson',
    role: 'Experte en Droit de la Famille',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Experte en droit de la famille et successions internationales.',
  },
  {
    name: 'Alexander Smith',
    role: 'Consultant Juridique',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Consultant en droit fiscal et planification strategique.',
  },
  {
    name: 'Hannah Grace',
    role: "Droit de l'Immigration",
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: "Specialiste en droit de l'immigration et visas d'affaires.",
  },
]

const Team = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main>
      <PageHeader title='Notre Equipe' subtitle='Equipe' />

      <section ref={ref} className='section-padding bg-white'>
        <div className='container-custom'>
          <div className='text-center mb-16'>
            <span className='text-accent text-sm font-medium tracking-widest uppercase'>
              Notre Equipe
            </span>
            <h2 className='font-serif text-4xl md:text-5xl font-bold text-primary mt-3'>
              Experts Juridiques de Confiance
            </h2>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='group'
              >
                <div className='relative rounded-2xl overflow-hidden mb-4'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                  <div className='absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0'>
                    <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors'>
                      <Linkedin size={16} />
                    </button>
                    <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors'>
                      <Mail size={16} />
                    </button>
                  </div>
                </div>
                <h3 className='font-serif text-xl font-bold text-primary group-hover:text-accent transition-colors'>
                  {member.name}
                </h3>
                <p className='text-accent text-sm font-medium mt-1'>
                  {member.role}
                </p>
                <p className='text-gray-500 text-sm mt-2'>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Team
