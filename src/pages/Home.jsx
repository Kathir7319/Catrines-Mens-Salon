import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { salonInfo } from '../data/salonInfo';
import { servicesData } from '../data/servicesData';
import { reviewsData } from '../data/reviewsData';
import { galleryData } from '../data/galleryData';
import ServiceCard from '../components/ServiceCard';
import ReviewCard from '../components/ReviewCard';
import HoursStatusBadge from '../components/HoursStatusBadge';
import { 
  Calendar, 
  Phone, 
  MapPin, 
  Scissors, 
  Star, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck, 
  CheckCircle2,
  Navigation,
  Eye,
  Award
} from 'lucide-react';

export default function Home({ onOpenBooking, onSelectService }) {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);

  // Take top 4 featured services for homepage
  const featuredServices = servicesData.filter(s => s.popular).slice(0, 4);
  // Take top 4 portfolio shots for homepage
  const homePortfolio = galleryData.slice(0, 4);

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. HERO SECTION (Above the Fold) */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
        {/* Background Image with Deep Obsidian / Charcoal Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&auto=format&fit=crop&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/85 to-charcoal-950/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-charcoal-950/60 to-charcoal-950" />
        </div>

        {/* Ambient Gold Halo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-gold-500/30 text-xs font-semibold tracking-wider uppercase text-gold-400 mb-6 shadow-lg animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Durham's Premier Grooming Sanctuary</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">2110 Angier Ave</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white tracking-tight max-w-5xl mx-auto leading-[1.1] mb-6">
            Durham's Premium Men's Grooming &amp; Styling Experience
          </h1>

          {/* Subtitle Copy */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Precision haircuts, sharp beard trims, and top-tier grooming tailored for the modern man. Step in for a premium experience right here in East Durham.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-charcoal-950 font-extrabold text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Calendar className="w-5 h-5 text-charcoal-950" />
              <span>Book Appointment Now</span>
            </button>

            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-charcoal-900/90 border border-charcoal-700 hover:border-gold-500/50 text-white font-bold text-sm uppercase tracking-widest hover:bg-charcoal-850 transition-all flex items-center justify-center gap-2"
            >
              <Scissors className="w-4 h-4 text-gold-400" />
              <span>Explore Services</span>
            </Link>

            <a
              href={`tel:${salonInfo.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-4 rounded-xl border border-charcoal-800 text-slate-300 hover:text-gold-400 hover:border-charcoal-700 transition-colors flex items-center justify-center gap-2 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-gold-500" />
              <span>{salonInfo.phone}</span>
            </a>
          </div>

          {/* Key Value Props Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4 border-t border-charcoal-800/80">
            {salonInfo.stats.map((stat, idx) => (
              <div key={idx} className="p-3 text-center rounded-xl bg-charcoal-900/40 border border-charcoal-800/60 backdrop-blur-sm">
                <div className="text-xl md:text-2xl font-serif font-bold text-gold-400">{stat.value}</div>
                <div className="text-xs font-semibold text-white mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-slate-400">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ABOUT CATRINES MENS SALON SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&auto=format&fit=crop&q=80"
                alt="Catrines Mens Salon Interior Durham NC"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />
              
              {/* Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-charcoal-950/90 border border-gold-500/30 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gold-400 font-bold">Location</div>
                    <div className="text-sm font-semibold text-white">2110 Angier Ave, Durham</div>
                  </div>
                  <HoursStatusBadge />
                </div>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="hidden sm:flex absolute -top-6 -left-6 p-4 rounded-2xl bg-charcoal-900 border border-gold-500/40 shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Top Rated</div>
                <div className="text-[11px] text-gold-400">Durham, NC 27703</div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-gold-500">
                About Catrines Mens Salon
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white leading-tight">
                Grooming Is An Investment In Your Confidence
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              At Catrines Mens Salon, we believe grooming is more than just a regular haircut—it is an investment in your confidence. Located at 2110 Angier Ave, our salon provides a dedicated, professional space for men's grooming in Durham, NC.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From traditional fades and classic cuts to precise beard detailing and modern texturizing, our expert barbers and stylists blend sharp attention to detail with standard-setting customer care. We cater to newcomers and regulars alike, focusing on quality, consistency, and an atmosphere where you can kick back and walk out looking your absolute best.
            </p>

            {/* Checklist Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Sharp Attention to Detail</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Standard-Setting Customer Care</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Welcoming East Durham Vibe</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Consistent Master Barbers</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="px-6 py-3 rounded-xl bg-charcoal-900 border border-gold-500/40 text-gold-400 font-bold text-xs uppercase tracking-wider hover:bg-gold-500 hover:text-charcoal-950 transition-all flex items-center gap-2"
              >
                <span>Discover Our Story & Barbers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-400 transition-colors flex items-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule With Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE MENU & TRANSPARENT PRICING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-gold-500">
            Craftsmanship &amp; Value
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white">
            Service Menu &amp; Transparent Pricing
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            No hidden fees, no rushing in the chair. Every service includes an in-depth consultation and professional styling setup.
          </p>
        </div>

        {/* Featured Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        {/* View All Services CTA Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-charcoal-900/90 border border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-serif font-bold text-white">
              Looking for our complete list of grooming &amp; beard packages?
            </h3>
            <p className="text-sm text-slate-400">
              Explore royal hot towel shaves, kids cuts, senior discounts, and VIP grooming experiences.
            </p>
          </div>

          <Link
            to="/services"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2 shadow-lg flex-shrink-0"
          >
            <span>View Full Service Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. STYLIST PORTFOLIO GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-gold-500">
              Real Cuts • Real Precision
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white">
              Stylist Portfolio Gallery
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Showcasing the highest quality cuts pulled directly from our barbers' chairs—sharp fades, crisp edge-ups, and styled hair finishes.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors"
          >
            <span>Explore All Work (8+ Styles)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homePortfolio.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedGalleryImg(item)}
              className="group relative rounded-2xl overflow-hidden bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/50 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-charcoal-950/80 border border-gold-500/30 text-gold-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  {item.badge}
                </div>

                {/* Hover overlay zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-gold-500 text-charcoal-950 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Caption Details at Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 space-y-1">
                  <div className="text-[11px] font-semibold text-gold-400 uppercase tracking-wider">
                    {item.barber}
                  </div>
                  <h3 className="text-base font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal for Selected Image */}
        {selectedGalleryImg && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedGalleryImg(null)}
          >
            <div 
              className="relative max-w-xl w-full bg-charcoal-900 border border-gold-500/30 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedGalleryImg.image}
                alt={selectedGalleryImg.title}
                className="w-full max-h-[60vh] object-cover"
              />
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-gold-400 tracking-wider">
                    {selectedGalleryImg.barber}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-400 text-xs font-medium">
                    {selectedGalleryImg.badge}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white">
                  {selectedGalleryImg.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {selectedGalleryImg.description}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-charcoal-800">
                  <button
                    onClick={() => setSelectedGalleryImg(null)}
                    className="px-4 py-2 rounded-lg border border-charcoal-700 text-xs font-semibold text-slate-300"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedGalleryImg(null);
                      onOpenBooking();
                    }}
                    className="px-5 py-2.5 rounded-lg bg-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:bg-gold-400"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Get This Style</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 5. CUSTOMER REVIEW SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-gold-400" />
            <span>4.9 / 5.0 Average Rating</span>
            <span className="text-slate-600">•</span>
            <span>180+ Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white">
            What Durham Men Are Saying
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Verified feedback from gentlemen across Durham, RTP, and the Triangle who trust Catrines with their regular grooming.
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.slice(0, 4).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-charcoal-900 border border-charcoal-700 hover:border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-wider transition-all hover:bg-charcoal-850"
          >
            <span>Read All Verified Reviews &amp; Submit Yours</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. LOCATION, HOURS & DIRECT BOOKING CONTACT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-3xl bg-charcoal-900 border border-gold-500/30 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Panel */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest font-bold text-gold-500">
                    East Durham Barbershop
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white">
                    Location, Hours &amp; Booking
                  </h2>
                  <p className="text-slate-300 text-sm">
                    Conveniently located on Angier Ave in Durham with ample free parking. Stop by or book ahead to reserve your spot.
                  </p>
                </div>

                {/* Contact List */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-charcoal-850 border border-charcoal-700 flex items-center justify-center text-gold-400 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Address</div>
                      <div className="text-base font-medium text-white">{salonInfo.address.street}</div>
                      <div className="text-xs text-slate-300">{salonInfo.address.city}, {salonInfo.address.state} {salonInfo.address.zip}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-charcoal-850 border border-charcoal-700 flex items-center justify-center text-gold-400 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Direct Phone</div>
                      <a href={`tel:${salonInfo.phoneRaw}`} className="text-base font-bold text-white hover:text-gold-400 transition-colors">
                        {salonInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-charcoal-850 border border-charcoal-700 flex items-center justify-center text-gold-400 flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Hours of Operation</span>
                        <HoursStatusBadge />
                      </div>
                      <div className="text-xs text-slate-300 space-y-0.5">
                        <p><strong className="text-white">Tuesday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                        <p><strong className="text-white">Saturday:</strong> 8:00 AM - 4:00 PM</p>
                        <p><strong className="text-slate-500">Sunday - Monday:</strong> CLOSED</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-charcoal-800 space-y-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-charcoal-950 font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-transform"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment Now</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={salonInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-charcoal-850 border border-charcoal-700 hover:border-gold-500/40 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-gold-400" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={salonInfo.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-charcoal-850 border border-charcoal-700 hover:border-gold-500/40 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Booksy Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Map Embed */}
            <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-[500px] bg-charcoal-950">
              <iframe
                title="Catrines Mens Salon Map 2110 Angier Ave Durham"
                src="https://maps.google.com/maps?q=2110+Angier+Ave,+Durham,+NC+27703&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                allowFullScreen
              />
              <div className="absolute top-4 right-4 bg-charcoal-950/90 border border-gold-500/30 px-3 py-1.5 rounded-lg text-xs font-semibold text-white shadow-lg backdrop-blur-sm pointer-events-none">
                📍 2110 Angier Ave, Durham
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
