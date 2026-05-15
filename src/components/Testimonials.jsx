import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Georgia Turcotte',
    role: 'Cliente',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    text: 'ITALYAFRICA a combattu sans relâche pour mon cas et a assuré que la justice soit rendue. Je suis reconnaissante pour leur soutien inébranlable et leur expertise.',
    rating: 5,
  },
  {
    name: 'Mr. Hazel Kris',
    role: 'Client',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    text: 'Grâce à leur excellent service, leur tarification compétitive et leur approche client personnalisée, je n\'hésite pas à les recommander.',
    rating: 5,
  },
  {
    name: 'Mr. Tommie Fay',
    role: 'CEO de Lawify',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    text: 'Cela est dû à leur excellent service, leur tarification compétitive et leur approche client personnelle et digne de confiance.',
    rating: 4,
  },
]

const Testimonials = () => {
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
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Témoignages</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">
            Ce que nos clients disent
          </h2>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-3xl p-8 shadow-sm h-full flex flex-col">
                  <Quote className="text-accent/30 mb-4" size={32} />
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? 'text-accent fill-accent' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
