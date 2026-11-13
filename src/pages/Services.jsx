import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData, serviceCategories } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import PageHero from '../components/PageHero';
import { 
  Scissors, 
  Sparkles, 
  Search, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle,
  Clock,
  Sparkle
} from 'lucide-react';

export default function Services({ onSelectService, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = "Service Menu & Transparent Pricing | Catrines Mens Salon Durham";
  }, []);

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Subpage Header Banner with Breadcrumbs */}
      <PageHero
        badge="Section 4 • Transparent Rates"
        title="Service Menu &amp; Transparent Pricing"
        breadcrumbLabel="Services &amp; Pricing"
        description="Precision haircuts, sharp beard trims, skin fades, and royal hot towel shaves tailored for the modern man. Every service includes an in-depth consultation and blow-dry styling finish."
        stats={[
          { label: "Pricing Policy", value: "100% Transparent" },
          { label: "Consultation", value: "Complimentary" },
          { label: "Razor Blade", value: "Sanitized Single-Use" },
          { label: "Hot Towel Prep", value: "Eucalyptus Steamed" }
        ]}
      />

      {/* Controls Bar: Category Filter Pills + Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-charcoal-900 border border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gold-500 text-charcoal-950 shadow-md font-bold'
                    : 'bg-charcoal-850 text-slate-300 hover:text-white hover:bg-charcoal-800 border border-charcoal-750'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search cuts, fades, beards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-charcoal-850 border border-charcoal-750 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={onSelectService}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-charcoal-900/50 rounded-2xl border border-charcoal-800 space-y-3">
            <Scissors className="w-8 h-8 text-gold-500 mx-auto opacity-50" />
            <h3 className="text-lg font-bold text-white">No services found matching "{searchQuery}"</h3>
            <p className="text-xs text-slate-400">Try adjusting your search query or reset category filter.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-lg bg-charcoal-800 text-xs font-semibold text-gold-400 hover:text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Service Guarantees & Preparation Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-charcoal-900 border border-gold-500/20">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-gold-500">
              The Catrines Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Every Service Includes:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">One-on-One Barber Consultation</h4>
                  <p className="text-xs text-slate-400 mt-0.5">We assess your face shape, hairline, and hair texture to recommend the optimal cut.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Straight Razor Finish</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Sanitized single-use razor edging on temples and neck taper for knife-sharp lines.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Hot Steam &amp; Essential Oils</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Eucalyptus scented hot towels soothe skin and soften hair for zero-irritation grooming.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Premium Styling Setup</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Blow-dry finish with premium matte pomade, clay, or beard butter tailored for all-day hold.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Ready to book? Select any service above or jump directly to our <Link to="/book" className="text-gold-400 font-bold underline">Appointment Booking Page</Link>.
              </div>

              <Link
                to="/book"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-400 transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve An Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
