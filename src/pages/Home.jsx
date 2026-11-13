import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { salonInfo } from '../data/salonInfo';
import HoursStatusBadge from '../components/HoursStatusBadge';
import { 
  Calendar, 
  Phone, 
  MapPin, 
  Scissors, 
  Star, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Award,
  Users,
  Image as ImageIcon,
  MessageSquare,
  Navigation,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function Home({ onOpenBooking, onSelectService }) {
  useEffect(() => {
    document.title = "Catrines Mens Salon | Durham's Premier Grooming & Styling Experience";
  }, []);

  const pagePortals = [
    {
      title: "Services & Transparent Pricing",
      path: "/services",
      badge: "Full Service Menu",
      icon: Scissors,
      description: "Explore our transparent price menu for signature cuts, skin-tight fades, beard sculpting, and royal hot towel shaves.",
      actionText: "Browse Full Price Menu",
      highlight: "From $20.00 • No Hidden Fees"
    },
    {
      title: "About Our Shop & Master Barbers",
      path: "/about",
      badge: "Our Heritage",
      icon: Users,
      description: "Learn about our shop at 2110 Angier Ave, our craftsmanship philosophy, and meet Master Barbers Catrine, Marcus, and Dante.",
      actionText: "Meet Our Master Barbers",
      highlight: "12+ Years Combined Experience"
    },
    {
      title: "Stylist Portfolio Gallery",
      path: "/gallery",
      badge: "Real Client Cuts",
      icon: ImageIcon,
      description: "View our portfolio of sharp fades, clean edge-ups, textured pompadours, and straight-razor beard finishes.",
      actionText: "View Stylist Gallery",
      highlight: "High-Res Lightbox Showcase"
    },
    {
      title: "What Durham Men Are Saying",
      path: "/reviews",
      badge: "Verified Testimonials",
      icon: Star,
      description: "Read honest feedback from Durham professionals, students, and regulars on Booksy and Google. Submit your review.",
      actionText: "Read Client Reviews",
      highlight: "4.9★ Average • 180+ Reviews"
    },
    {
      title: "Location, Hours & Direct Contact",
      path: "/contact",
      badge: "East Durham Shop",
      icon: MapPin,
      description: "Find us at 2110 Angier Ave, Durham, NC. Interactive Google Map, live operating hours status, and direct message inquiry.",
      actionText: "Get Directions & Hours",
      highlight: "Free Street & On-Site Parking"
    },
    {
      title: "Online Appointment Booking",
      path: "/book",
      badge: "Zero Waiting Time",
      icon: Calendar,
      description: "Reserve your chair with your preferred barber and time slot, or access our official Booksy storefront.",
      actionText: "Book Your Appointment",
      highlight: "Instant Confirmation & SMS"
    }
  ];

  return (
    <div className="space-y-20 md:space-y-28">
      {/* 1. HERO SECTION (Above the Fold) */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
        {/* Background Image with Deep Obsidian / Charcoal Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&auto=format&fit=crop&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/90 to-charcoal-950/75 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-charcoal-950/60 to-charcoal-950" />
        </div>

        {/* Ambient Gold Halo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-gold-500/30 text-xs font-semibold tracking-wider uppercase text-gold-400 mb-6 shadow-lg animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Durham's Premier Grooming Sanctuary</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">2110 Angier Ave</span>
          </div>

          {/* Main Headline from brief */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white tracking-tight max-w-5xl mx-auto leading-[1.1] mb-6">
            Durham's Premium Men's Grooming &amp; Styling Experience
          </h1>

          {/* Subtitle Copy from brief */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Precision haircuts, sharp beard trims, and top-tier grooming tailored for the modern man. Step in for a premium experience right here in East Durham.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              to="/book"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-charcoal-950 font-extrabold text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Calendar className="w-5 h-5 text-charcoal-950" />
              <span>Book Appointment Now</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-charcoal-900/90 border border-charcoal-700 hover:border-gold-500/50 text-white font-bold text-sm uppercase tracking-widest hover:bg-charcoal-850 transition-all flex items-center justify-center gap-2"
            >
              <Scissors className="w-4 h-4 text-gold-400" />
              <span>Explore Services &amp; Rates</span>
            </Link>

            <a
              href={`tel:${salonInfo.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-4 rounded-xl border border-charcoal-800 text-slate-300 hover:text-gold-400 hover:border-charcoal-700 transition-colors flex items-center justify-center gap-2 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-gold-500" />
              <span>{salonInfo.phone}</span>
            </a>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-charcoal-800/80">
            {salonInfo.stats.map((stat, idx) => (
              <div key={idx} className="p-3 text-center rounded-xl bg-charcoal-900/50 border border-charcoal-800/60 backdrop-blur-sm">
                <div className="text-xl md:text-2xl font-serif font-bold text-gold-400">{stat.value}</div>
                <div className="text-xs font-semibold text-white mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-slate-400">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. MULTI-PAGE DIRECTORY PORTAL (The Core Navigation Hub) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-gold-500">
            Multi-Page Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white">
            Explore Catrines Mens Salon
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Select a dedicated page below to view complete menus, barber profiles, our photo gallery, authentic Durham reviews, or schedule your visit.
          </p>
        </div>

        {/* 6-Card Portal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pagePortals.map((portal, idx) => {
            const Icon = portal.icon;
            return (
              <Link
                key={idx}
                to={portal.path}
                className="group relative rounded-2xl bg-charcoal-900/90 border border-charcoal-800 hover:border-gold-500/50 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-charcoal-850 text-gold-400 text-[10px] font-bold uppercase tracking-wider border border-charcoal-700">
                      {portal.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                      {portal.title}
                    </h3>
                    <p className="text-xs text-gold-500 font-semibold mt-1">
                      {portal.highlight}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {portal.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-charcoal-800 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gold-400 group-hover:text-white transition-colors">
                  <span>{portal.actionText}</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURE SPOTLIGHT: The Executive Combo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-charcoal-900 via-charcoal-850 to-charcoal-900 border border-gold-500/30 overflow-hidden shadow-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Signature Package</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white">
                The Executive Combo (Cut &amp; Beard)
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Our signature precision haircut combined with expert beard detailing for the complete look. Includes personalized head shape assessment, hot towel eucalyptus wrap, straight razor outline, and blow-dry styling finish.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Transparent Rate</span>
                  <span className="text-3xl font-serif font-bold text-gold-400">$55.00</span>
                </div>
                <div className="h-10 w-px bg-charcoal-700 hidden sm:block" />
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Chair Duration</span>
                  <span className="text-base font-semibold text-white">60 Minutes</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/book"
                  className="px-6 py-3.5 rounded-xl bg-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-400 transition-colors flex items-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book The Executive Combo</span>
                </Link>

                <Link
                  to="/services"
                  className="px-6 py-3.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-750 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 border border-charcoal-700"
                >
                  <span>View All 10+ Services</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&auto=format&fit=crop&q=80"
                  alt="Executive Cut & Beard Catrines Mens Salon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE CATRINES PROMISE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-gold-500">
            Uncompromising Standards
          </span>
          <h2 className="text-3xl font-serif font-bold text-white">
            Why Durham Gentlemen Choose Catrines
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mx-auto sm:mx-0">
              <Scissors className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-white">Master Artisans</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Expert scissor texturizing, surgical skin fades, and symmetrical razor edgings.</p>
          </div>

          <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mx-auto sm:mx-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-white">Sanitized Safety</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Single-use razor blades and medical-grade autoclave sterilization for every client.</p>
          </div>

          <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mx-auto sm:mx-0">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-white">Zero Wait Appointments</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Book via our web platform or Booksy to step straight into the chair on time.</p>
          </div>

          <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mx-auto sm:mx-0">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-white">East Durham Pride</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Located at 2110 Angier Ave, welcoming Durham locals, professionals, and families.</p>
          </div>
        </div>
      </section>

      {/* 5. QUICK DIRECTORY FOOTER JUMP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="p-8 sm:p-10 rounded-3xl bg-charcoal-900 border border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <HoursStatusBadge />
              <span className="text-xs text-slate-400">2110 Angier Ave, Durham, NC</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">
              Ready for a Sharp Cut or Beard Detailing?
            </h3>
            <p className="text-xs text-slate-300">
              Browse our services, check portfolio pictures, or book your appointment in seconds.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services"
              className="px-5 py-3 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700 text-xs font-semibold text-white transition-colors"
            >
              Services Menu
            </Link>
            <Link
              to="/about"
              className="px-5 py-3 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700 text-xs font-semibold text-white transition-colors"
            >
              About Our Shop
            </Link>
            <Link
              to="/gallery"
              className="px-5 py-3 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700 text-xs font-semibold text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700 text-xs font-semibold text-white transition-colors"
            >
              Location &amp; Hours
            </Link>
            <Link
              to="/book"
              className="px-6 py-3 rounded-xl bg-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-400 transition-colors shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
