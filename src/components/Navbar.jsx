import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import HoursStatusBadge from './HoursStatusBadge';
import { salonInfo } from '../data/salonInfo';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  ChevronRight,
  ExternalLink,
  Scissors
} from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Pricing', path: '/services' },
    { name: 'Portfolio Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact & Location', path: '/contact' }
  ];

  return (
    <>
      {/* Top Notification / Utility Bar */}
      <div className="bg-charcoal-950/95 border-b border-charcoal-800 text-xs text-slate-300 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href={salonInfo.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              <span>{salonInfo.address.full}</span>
            </a>
            <div className="h-3 w-px bg-charcoal-700" />
            <HoursStatusBadge />
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${salonInfo.phoneRaw}`} 
              className="flex items-center gap-1.5 font-medium text-white hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span>{salonInfo.phone}</span>
            </a>
            <span className="text-charcoal-700">|</span>
            <a 
              href={salonInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gold-400 hover:text-gold-300 transition-colors font-medium"
            >
              <span>Booksy Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-charcoal-950/95 backdrop-blur-md shadow-2xl border-b border-gold-500/20 py-3' 
            : 'bg-charcoal-950/80 backdrop-blur-sm border-b border-charcoal-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all relative py-1 ${
                    isActive
                      ? 'text-gold-400 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${salonInfo.phoneRaw}`}
              className="p-2.5 rounded-lg border border-charcoal-700 bg-charcoal-900/80 text-slate-300 hover:text-gold-400 hover:border-gold-500/50 transition-all duration-200"
              title="Call Catrines Mens Salon"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-charcoal-950 font-bold text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-charcoal-950" />
                <span>Book Appointment</span>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 text-xs font-bold uppercase rounded-md bg-gold-500 text-charcoal-950 flex items-center gap-1 shadow-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-charcoal-900 border border-charcoal-700 text-slate-200 hover:text-gold-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-charcoal-950/98 border-b border-charcoal-800 shadow-2xl backdrop-blur-xl animate-fadeIn transition-all max-h-[calc(100vh-65px)] overflow-y-auto">
            <div className="px-5 pt-4 pb-6 space-y-3">
              {/* Status & Address Bar for Mobile */}
              <div className="py-2.5 px-3 rounded-lg bg-charcoal-900/80 border border-charcoal-800 flex flex-col gap-2">
                <HoursStatusBadge />
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                  <span>2110 Angier Ave, Durham, NC 27703</span>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="divide-y divide-charcoal-800/80">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-3 px-2 text-base font-medium transition-colors ${
                        isActive
                          ? 'text-gold-400 font-semibold'
                          : 'text-slate-200 hover:text-gold-300'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </NavLink>
                ))}
              </div>

              {/* Quick Actions in Mobile Drawer */}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-charcoal-950 font-bold text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Now</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${salonInfo.phoneRaw}`}
                    className="py-2.5 px-3 rounded-lg bg-charcoal-900 border border-charcoal-700 text-slate-200 flex items-center justify-center gap-2 text-xs font-semibold hover:border-gold-500/50"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-500" />
                    <span>Call Shop</span>
                  </a>

                  <a
                    href={salonInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-lg bg-charcoal-900 border border-charcoal-700 text-slate-200 flex items-center justify-center gap-2 text-xs font-semibold hover:border-gold-500/50"
                  >
                    <MapPin className="w-3.5 h-3.5 text-gold-500" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
