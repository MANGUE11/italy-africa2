import { Phone, MapPin, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'

const TopBar = () => {
  return (
    <div className="bg-primary text-white py-2.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <a href="tel:+212522928215" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={14} />
            <span>+212 (0)5 22 92 82 15</span>
          </a>
          <span className="hidden md:flex items-center gap-2">
            <MapPin size={14} />
            <span>Casablanca, Maroc</span>
          </span>
          <a href="mailto:info@italyafrica.com" className="hidden lg:flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={14} />
            <span>info@italyafrica.com</span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="text-white/60">|</span>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={14} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Linkedin size={14} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
