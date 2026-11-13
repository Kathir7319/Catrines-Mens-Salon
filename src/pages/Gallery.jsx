import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { galleryData, galleryCategories } from '../data/galleryData';
import { salonInfo } from '../data/salonInfo';
import PageHero from '../components/PageHero';
import { 
  Sparkles, 
  Eye, 
  Calendar, 
  ExternalLink, 
  Camera, 
  X,
  ChevronLeft,
  ChevronRight,
  Scissors
} from 'lucide-react';

export default function Gallery({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  useEffect(() => {
    document.title = "Stylist Portfolio Gallery | Catrines Mens Salon Durham";
  }, []);

  const filteredItems = galleryData.filter((item) => 
    activeCategory === 'all' || item.category === activeCategory
  );

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="space-y-16 pb-16">
      {/* Subpage Header Banner with Breadcrumbs */}
      <PageHero
        badge="Section 5 • Real Portfolio Work"
        title="Stylist Portfolio Gallery"
        breadcrumbLabel="Portfolio Gallery"
        description="High-precision haircuts and beard trims pulled directly from our Catrines Facebook and Booksy client profiles. Featuring sharp skin fades, crisp edge-ups, and styled hair finishes."
        stats={[
          { label: "Portfolio Items", value: "8+ Curated Cuts" },
          { label: "Fade Blends", value: "Drop, Skin, Shadow" },
          { label: "Beard Lines", value: "Straight Razor Sharp" },
          { label: "Shop Atmosphere", value: "Vintage Hydraulic Chairs" }
        ]}
      />

      {/* Category Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-gold-500 text-charcoal-950 font-bold shadow-md'
                  : 'bg-charcoal-900 text-slate-300 hover:text-white border border-charcoal-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/50 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-charcoal-950/80 border border-gold-500/30 text-gold-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  {item.badge}
                </div>

                {/* Hover overlay icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-gold-500 text-charcoal-950 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Caption */}
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
      </section>

      {/* Social Live Feeds Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-charcoal-900 border border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-white">
                Follow Daily Chair Action on Facebook &amp; Booksy
              </h3>
              <p className="text-xs text-slate-400">
                Fresh daily cut videos, client transformations, and community updates straight from 2110 Angier Ave.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={salonInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 hover:border-gold-500/40 text-slate-200 text-xs font-semibold flex items-center gap-2 hover:text-white transition-all"
            >
              <span>Catrines Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <Link
              to="/book"
              className="px-5 py-2.5 rounded-xl bg-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-gold-400 transition-all shadow-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Fullscreen Interactive Lightbox Modal */}
      {currentItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/95 backdrop-blur-md animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-charcoal-900 border border-charcoal-700 text-slate-300 hover:text-white hover:bg-charcoal-800 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left / Right Nav buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-charcoal-900/80 border border-charcoal-700 text-slate-200 hover:text-white hover:bg-gold-500 hover:text-charcoal-950 transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-charcoal-900/80 border border-charcoal-700 text-slate-200 hover:text-white hover:bg-gold-500 hover:text-charcoal-950 transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dialog Container */}
          <div 
            className="relative max-w-2xl w-full bg-charcoal-900 border border-gold-500/30 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-black">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal-950/80 border border-gold-500/30 text-gold-400 text-xs font-semibold backdrop-blur-sm">
                {currentItem.badge}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                  Barber: {currentItem.barber}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  {currentItem.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2">
                  {currentItem.description}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-charcoal-800">
                <span className="text-xs text-slate-400">
                  Item {activeLightboxIndex + 1} of {filteredItems.length}
                </span>

                <Link
                  to="/book"
                  onClick={closeLightbox}
                  className="px-6 py-2.5 rounded-xl bg-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-gold-400 transition-colors shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Style With Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
