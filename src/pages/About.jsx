import React from 'react';
import { salonInfo } from '../data/salonInfo';
import { barbersData } from '../data/barbersData';
import HoursStatusBadge from '../components/HoursStatusBadge';
import { 
  Scissors, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Coffee, 
  Clock, 
  MapPin, 
  Calendar,
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';

export default function About({ onOpenBooking }) {
  const teamMembers = barbersData.filter(b => b.id !== 'any');

  const salonPillars = [
    {
      icon: Scissors,
      title: "Master Craftsmanship",
      description: "Our barbers are seasoned artisans with decades of combined experience, mastering precision scissor cuts, skin-tight fades, and razor architecture."
    },
    {
      icon: ShieldCheck,
      title: "Medical-Grade Hygiene",
      description: "Every tool is sanitized between clients with hospital-grade Barbicide and UV sterilizers. Fresh straight razor blades are used for every single client."
    },
    {
      icon: Coffee,
      title: "Unmatched Atmosphere",
      description: "Kick back in custom leather hydraulic chairs, enjoy great music, cold beverages, and an unhurried vibe built specifically for Durham gentlemen."
    },
    {
      icon: HeartHandshake,
      title: "Transparent & Welcoming",
      description: "No ego, no guesswork. We listen closely during consultations, communicate clearly, and take genuine pride in boosting your confidence."
    }
  ];

  const faqs = [
    {
      q: "Do you accept walk-ins or are appointments required?",
      a: "We welcome walk-ins whenever an open chair is available! However, to guarantee zero wait time, we highly recommend reserving your slot either directly on our website or through our Booksy page."
    },
    {
      q: "Where exactly are you located in Durham?",
      a: "We are located at 2110 Angier Ave, Durham, NC 27703 in vibrant East Durham, with plenty of free, hassle-free parking right in front and along the street."
    },
    {
      q: "What products do you use in your cuts and beard treatments?",
      a: "We exclusively use professional-grade pomades, natural essential beard oils, eucalyptus steamed towels, and cooling skin tonics designed to protect your scalp and prevent razor bumps."
    },
    {
      q: "Do you cut children's hair and seniors?",
      a: "Yes! We cater to all generations with specialized services like the Young Gentleman Cut (12 & under) and Senior Distinguished Cuts (65+)."
    }
  ];

  return (
    <div className="space-y-24 py-8">
      {/* Page Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider text-gold-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Catrines Tradition</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-white tracking-tight mb-6">
          Crafting Durham's Sharpest Men
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          At Catrines Mens Salon, grooming is not a quick chore—it is an investment in your personal confidence, self-respect, and presence.
        </p>
      </section>

      {/* Origin Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=800&auto=format&fit=crop&q=80"
                alt="Catrines Barber Craftsmanship Durham"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 p-5 rounded-2xl bg-charcoal-900 border border-gold-500/30 shadow-2xl hidden sm:block max-w-xs">
              <div className="text-xs font-bold text-gold-400 uppercase tracking-wider">Rooted in Durham</div>
              <div className="text-sm font-semibold text-white mt-1">2110 Angier Ave, Durham, NC</div>
              <div className="text-xs text-slate-400 mt-1">Serving local professionals, students, and families with pride.</div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-gold-500">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              A Dedicated Space Built Exclusively for Men's Grooming
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Located at 2110 Angier Ave in the heart of East Durham, Catrines Mens Salon was founded to bridge the gap between old-school barbershop camaraderie and modern high-end grooming luxury.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              From traditional fades and classic cuts to precise beard detailing and modern texturizing, our expert barbers and stylists blend sharp attention to detail with standard-setting customer care. We cater to newcomers and regulars alike, focusing on quality, consistency, and an atmosphere where you can kick back and walk out looking your absolute best.
            </p>

            <div className="p-4 rounded-xl bg-charcoal-900/90 border border-charcoal-800 space-y-2">
              <div className="flex items-center gap-2 text-gold-400 font-semibold text-sm">
                <Award className="w-4 h-4" />
                <span>Our Uncompromising Promise</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                "We never rush a chair. We measure lines with surgical precision, test blade sharpness relentlessly, and ensure you feel revitalized from the moment you sit down until the final towel."
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
              >
                <Calendar className="w-4 h-4" />
                <span>Book With Our Master Barbers</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-gold-500">
            Why Gentlemen Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            The Catrines Standard of Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {salonPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-charcoal-900/80 border border-charcoal-800 hover:border-gold-500/40 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Meet the Master Barbers Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-gold-500">
            The Artisans Behind The Blades
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Meet Our Master Barbers
          </h2>
          <p className="text-slate-300 text-sm">
            Trained, licensed, and passionate professionals dedicated to their craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((barber) => (
            <div
              key={barber.id}
              className="rounded-2xl bg-charcoal-900 border border-charcoal-800 overflow-hidden hover:border-gold-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/4] overflow-hidden">
                  <img
                    src={barber.avatar}
                    alt={barber.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-charcoal-950/90 text-gold-400 text-[10px] font-bold uppercase tracking-wider border border-gold-500/30">
                      {barber.experience}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                      {barber.name}
                    </h3>
                    <p className="text-xs font-semibold text-gold-400 uppercase tracking-wider mt-0.5">
                      {barber.role}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {barber.bio}
                  </p>

                  <div className="pt-2 border-t border-charcoal-800 text-xs">
                    <span className="text-slate-400 font-medium">Specialty: </span>
                    <span className="text-slate-200">{barber.specialty}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 rounded-xl bg-charcoal-800 hover:bg-gold-500 text-slate-200 hover:text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book With {barber.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs uppercase tracking-widest font-bold text-gold-500">
            Clear Answers
          </span>
          <h2 className="text-3xl font-serif font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-charcoal-900/80 border border-charcoal-800 space-y-2 hover:border-gold-500/30 transition-colors"
            >
              <h3 className="text-base font-semibold text-white flex items-start gap-2">
                <span className="text-gold-400 font-bold">Q:</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
