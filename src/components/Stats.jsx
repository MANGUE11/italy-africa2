import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { Scale, Users, Handshake, Trophy } from 'lucide-react'

const statsData = [
  { icon: Scale, value: 500, suffix: '+', label: 'Dossiers traités', delay: 0 },
  { icon: Users, value: 50, suffix: '+', label: 'Experts juridiques', delay: 0.1 },
  { icon: Handshake, value: 320, suffix: '+', label: 'Clients satisfaits', delay: 0.2 },
  { icon: Trophy, value: 25, suffix: '+', label: 'Prix et distinctions', delay: 0.3 },
]

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="bg-cream py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <stat.icon className="text-accent" size={28} />
              </div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
