import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight, Send } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleNewsletter = (e) => {
    e.preventDefault()
    alert('Merci pour votre inscription !')
    setEmail('')
  }

  const quickLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Qui sommes nous', path: '/about' },
    { name: 'Italyafrica', path: '/about' },
    { name: 'Expertises', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  const expertises = [
    'Contrats & Conformite',
    'Mediation & Negociation',
    'Representation & Contentieux',
    'Business International & Developpement Economique',
    "Immobilier & Gestion d'Actifs",
    'Conseil & Assistance Juridique',
  ]

  const locations = [
    "Cote d'Ivoire - Abidjan",
    'Maroc - Casablanca',
    'Italie - Rome',
    'Senegal - Dakar',
    'Burkina Faso - Ouagadougou',
    'Centre Afrique - Bangui',
  ]

  return (
    <footer className='bg-primary text-white'>
      {/* Newsletter */}
      <div className='bg-primary-light py-10 px-4'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6'>
          <p className='text-white/90 max-w-lg text-sm md:text-base'>
            Abonnez-vous a notre newsletter mensuelle pour suivre les tendances
            juridiques et economiques entre l'Europe, le Maroc et l'Afrique.
          </p>
          <form onSubmit={handleNewsletter} className='flex w-full md:w-auto'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Votre E-mail'
              className='px-6 py-3 rounded-l-full bg-white text-gray-800 outline-none w-full md:w-64 text-sm'
              required
            />
            <button
              type='submit'
              className='bg-bordeaux hover:bg-bordeaux-light px-6 py-3 rounded-r-full transition-colors flex items-center gap-2'
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className='py-16 px-4'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Brand */}
          <div>
            <Link to='/' className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-accent rounded-lg flex items-center justify-center'>
                <span className='text-white font-serif font-bold text-lg'>
                  IA
                </span>
              </div>
              <div>
                <span className='font-serif font-bold text-lg'>
                  ITALYAFRICA
                </span>
                <span className='block text-[9px] text-white/50 tracking-widest uppercase'>
                  International Legal Consulting
                </span>
              </div>
            </Link>
            <div className='space-y-2 text-sm text-white/70'>
              {locations.map((loc, i) => (
                <div key={i} className='flex items-center gap-2'>
                  <div className='w-1.5 h-1.5 bg-accent rounded-full' />
                  {loc}
                </div>
              ))}
            </div>
            <div className='mt-6 space-y-2 text-sm text-white/70'>
              <div>info@italyafricavrl.com</div>
              <div>mkante@italyafricavrl.com</div>
            </div>
            <div className='mt-4 space-y-1 text-sm text-white/70'>
              <div>Numero Fixe : 05 22 92 82 15</div>
              <div>Numero Portable :</div>
              <div>+212 (7) 18 44 32 77</div>
              <div>+212 (6) 31 66 13 70</div>
            </div>
            <Link
              to='/contact'
              className='inline-flex items-center gap-2 bg-accent/20 text-accent px-6 py-2.5 rounded-full text-sm font-medium mt-6 hover:bg-accent hover:text-white transition-all'
            >
              Nous Contacter
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Expertises */}
          <div>
            <h4 className='font-serif font-bold text-lg mb-6'>EXPERTISES</h4>
            <ul className='space-y-3'>
              {expertises.map((item, i) => (
                <li key={i}>
                  <Link
                    to='/services'
                    className='text-white/70 text-sm hover:text-accent transition-colors'
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-serif font-bold text-lg mb-6'>LIENS RAPIDES</h4>
            <ul className='space-y-3'>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className='text-white/70 text-sm hover:text-accent transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='font-serif font-bold text-lg mb-6'>CONTACT</h4>
            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <Phone size={16} className='text-accent mt-1 flex-shrink-0' />
                <div className='text-sm text-white/70'>
                  <div>+212 (0)5 22 92 82 15</div>
                  <div>+212 (7) 18 44 32 77</div>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Mail size={16} className='text-accent mt-1 flex-shrink-0' />
                <div className='text-sm text-white/70'>
                  <div>info@italyafricavrl.com</div>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <MapPin size={16} className='text-accent mt-1 flex-shrink-0' />
                <div className='text-sm text-white/70'>Casablanca, Maroc</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-white/10 py-6 px-4'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-white/50 text-sm'>
            &copy; 2026 ITALYAFRICA. TOUS DROITS RESERVES
          </p>
          <div className='flex items-center gap-4'>
            {['whatsapp', 'linkedin', 'facebook'].map((social) => (
              <a
                key={social}
                href='#'
                className='w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors'
              >
                <span className='text-xs font-bold uppercase'>
                  {social.charAt(0)}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
