import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react'

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

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({
    nom: '', email: '', telephone: '', entreprise: '', sujet: '', message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Merci pour votre message ! Nous vous contacterons sous un jour ouvrable.')
    setFormData({ nom: '', email: '', telephone: '', entreprise: '', sujet: '', message: '' })
  }

  const contactInfo = [
    { icon: Phone, label: 'Telephone', value: '+212 (0)5 22 92 82 15' },
    { icon: Mail, label: 'Email', value: 'info@italyafrica.com' },
    { icon: MapPin, label: 'Adresse', value: 'Casablanca, Maroc' },
    { icon: Clock, label: 'Horaires', value: 'Lun-Ven: 9h - 18h' },
  ]

  return (
    <main>
      <PageHeader title="Contact" subtitle="Contact" />

      <section ref={ref} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <span className="text-accent text-sm font-medium tracking-widest uppercase">Contactez-nous</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">Entrons en contact</h2>
              <p className="text-gray-600 mb-10">Echangez avec nos experts pour obtenir des conseils personnalises et des solutions adaptees a vos besoins.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Votre nom" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telephone</label>
                    <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="+212 ..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                    <select name="sujet" value={formData.sujet} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white">
                      <option value="">Selectionnez un sujet</option>
                      <option value="conseil">Conseil Juridique</option>
                      <option value="contrats">Contrats</option>
                      <option value="finance">Banque et Finance</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Votre Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Decrivez votre besoin..." rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none" required />
                </div>
                <button type="submit" className="bg-primary text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-primary-light hover:shadow-lg flex items-center gap-2 group">
                  Envoyer le message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-lg h-80">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.56000612275!2d-7.6693949!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Maroc!5e0!3m2!1sfr!2s!4v1700000000000!5m2!1sfr!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map" />
              </div>
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-cream rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0"><info.icon className="text-accent" size={18} /></div>
                    <div>
                      <div className="text-xs text-gray-500">{info.label}</div>
                      <div className="text-sm font-medium text-primary mt-0.5">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
