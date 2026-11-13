import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import HoursStatusBadge from './HoursStatusBadge';
import { salonInfo } from '../data/salonInfo';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  ExternalLink,
  Navigation,
  Heart
} from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const currentYear = new Date().getFullYear();
  const currentDayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];

  return (
    <footer className="bg-charcoal-950 text-slate-400 border-t border-charcoal-800/80 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle gold glow behind footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gold-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-charcoal-800">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Logo size="large" />
            <p className="text-sm text-slate-400 leading-relaxed pr-2">
              Durham’s premier men's grooming & styling destination. Delivering standard-setting precision haircuts, beard detailing, and hot towel treatments in East Durham.
            </p>
            <div className="pt-2">
              <HoursStatusBadge />
            </div>

            {/* Social / Booking Platforms */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={salonInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-charcoal-900 border border-charcoal-700 hover:border-gold-500/50 text-xs font-semibold text-gold-400 hover:text-white transition-all flex items-center gap-1.5"
              >
                <span>Booksy Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={salonInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-charcoal-900 border border-charcoal-700 hover:border-gold-500/50 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                <span>Facebook</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-gold-500 font-bold">
              Explore Salon
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
                  <span>Home & Welcome</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
                  <span>About Our Shop & Barbers</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
                  <span>Service Menu & Pricing</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
                  <span>Stylist Portfolio Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
                  <span>Customer Testimonials</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
                  <span>Location & Contact</span>
                </Link>
              </li>
              <li>
                <button 
                  onClick={onOpenBooking} 
                  className="text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-2 pt-1"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Appointment</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours of Operation */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-gold-500 font-bold flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Shop Hours</span>
            </h3>
            <div className="space-y-1.5 text-xs">
              {salonInfo.hours.map((item) => {
                const isToday = item.day === currentDayName;
                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-1 px-2 rounded ${
                      isToday 
                        ? 'bg-gold-500/10 text-gold-400 font-semibold border border-gold-500/20' 
                        : 'text-slate-400'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {isToday && <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />}
                      <span>{item.day}</span>
                    </span>
                    <span className={item.text === 'CLOSED' ? 'text-slate-500' : 'text-slate-200'}>
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-[11px] text-slate-500 italic">
              Walk-ins warmly welcomed when chairs are available. Appointments strongly recommended for zero wait times.
            </p>
          </div>

          {/* Column 4: Contact & Directions */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-gold-500 font-bold flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Visit Us In Durham</span>
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">{salonInfo.name}</p>
                  <p className="text-slate-300">{salonInfo.address.street}</p>
                  <p className="text-slate-400">{salonInfo.address.city}, {salonInfo.address.state} {salonInfo.address.zip}</p>
                  <p className="text-xs text-gold-500/90 mt-0.5">{salonInfo.address.area}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a 
                  href={`tel:${salonInfo.phoneRaw}`} 
                  className="text-white font-medium hover:text-gold-400 transition-colors"
                >
                  {salonInfo.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={salonInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-charcoal-900 border border-charcoal-700 hover:border-gold-500/50 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all hover:bg-charcoal-850"
              >
                <Navigation className="w-3.5 h-3.5 text-gold-500" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-gold-600 to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-transform"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Catrines Mens Salon. All Rights Reserved. Durham, North Carolina.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <span>Crafted for modern men with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              <span>in Durham, NC</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
