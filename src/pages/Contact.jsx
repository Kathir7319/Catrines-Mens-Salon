import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { salonInfo } from '../data/salonInfo';
import PageHero from '../components/PageHero';
import HoursStatusBadge from '../components/HoursStatusBadge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Navigation, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Car, 
  ExternalLink 
} from 'lucide-react';

export default function Contact({ onOpenBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Location, Hours & Direct Contact | Catrines Mens Salon Durham";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 3000);
  };

  const currentDayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];

  return (
    <div className="space-y-16 pb-16">
      {/* Subpage Header Banner with Breadcrumbs */}
      <PageHero
        badge="Section 7 • Find Us in Durham"
        title="Location, Hours &amp; Direct Contact"
        breadcrumbLabel="Contact &amp; Location"
        description="Conveniently located in East Durham at 2110 Angier Ave. Stop in or call us directly for inquiries, wait times, or directions."
        stats={[
          { label: "Street Address", value: "2110 Angier Ave" },
          { label: "City & Zip", value: "Durham, NC 27703" },
          { label: "Direct Phone", value: "(919) 672-6717" },
          { label: "Parking", value: "Free Street & On-Site" }
        ]}
      />

      {/* Main Info & Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Info & Hours Table */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-charcoal-900 border border-charcoal-800 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold text-gold-500">
                  Shop Information
                </span>
                <HoursStatusBadge />
              </div>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Catrines Mens Salon</h4>
                    <p className="text-slate-300 text-xs mt-0.5">{salonInfo.address.street}</p>
                    <p className="text-slate-400 text-xs">{salonInfo.address.city}, {salonInfo.address.state} {salonInfo.address.zip}</p>
                    <a
                      href={salonInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-gold-400 font-semibold mt-1.5 hover:underline"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-medium">Telephone</h4>
                    <a
                      href={`tel:${salonInfo.phoneRaw}`}
                      className="text-base font-bold text-white hover:text-gold-400 transition-colors"
                    >
                      {salonInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Booking */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-medium">Online Reservations</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <Link
                        to="/book"
                        className="text-xs text-gold-400 font-bold hover:underline"
                      >
                        Book on Website
                      </Link>
                      <span className="text-slate-600">•</span>
                      <a
                        href={salonInfo.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-300 hover:text-white"
                      >
                        Booksy Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Table Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-charcoal-900 border border-charcoal-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-serif font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>Hours of Operation</span>
                </h3>
                <span className="text-[11px] text-slate-400">Durham, NC Time</span>
              </div>

              <div className="space-y-2 text-xs">
                {salonInfo.hours.map((item) => {
                  const isToday = item.day === currentDayName;
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg ${
                        isToday 
                          ? 'bg-gold-500/10 text-gold-400 font-semibold border border-gold-500/30' 
                          : 'text-slate-300 bg-charcoal-850/60'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isToday && <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />}
                        <span>{item.day}</span>
                      </span>
                      <span className={item.text === 'CLOSED' ? 'text-slate-500 font-semibold' : 'text-white'}>
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-2">
                <Car className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>Complimentary parking available directly on Angier Ave &amp; side street.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-charcoal-900 border border-gold-500/20 shadow-2xl space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest font-bold text-gold-500">
                  Send A Message
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Have A Question or Group Request?
                </h3>
                <p className="text-xs text-slate-400">
                  Fill out the form below and our team will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400">
                  <CheckCircle2 className="w-10 h-10 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out to Catrines Mens Salon. One of our master barbers will reply via phone or email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Marcus Thomas"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-charcoal-850 border border-charcoal-700 rounded-xl text-white text-xs focus:border-gold-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(919) 672-6717"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-charcoal-850 border border-charcoal-700 rounded-xl text-white text-xs focus:border-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="marcus@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-charcoal-850 border border-charcoal-700 rounded-xl text-white text-xs focus:border-gold-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 bg-charcoal-850 border border-charcoal-700 rounded-xl text-white text-xs focus:border-gold-500 focus:outline-none"
                      >
                        <option value="General Inquiry">General Question</option>
                        <option value="Wedding / Groom Party">Wedding / Groom Party Grooming</option>
                        <option value="Hair Consultation">Haircut / Style Consultation</option>
                        <option value="Career / Barber Chair Rental">Barber Opportunities</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can our barbers help you today? Inquire about specific styles, timing, or group bookings..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 bg-charcoal-850 border border-charcoal-700 rounded-xl text-white text-xs focus:border-gold-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-slate-500">
                      Need immediate booking? <Link to="/book" className="text-gold-400 font-semibold underline">Book online now</Link>
                    </p>

                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-charcoal-800 shadow-2xl relative">
          <div className="h-96 w-full">
            <iframe
              title="Catrines Mens Salon Durham NC Map"
              src="https://maps.google.com/maps?q=2110+Angier+Ave,+Durham,+NC+27703&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-85 hover:opacity-100 transition-opacity"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-charcoal-950/90 border border-gold-500/30 shadow-xl backdrop-blur-md max-w-sm hidden sm:block">
            <div className="flex items-center gap-2 text-xs uppercase font-bold text-gold-400">
              <Navigation className="w-3.5 h-3.5" />
              <span>Easy Navigation</span>
            </div>
            <div className="text-sm font-semibold text-white mt-1">2110 Angier Ave, Durham, NC 27703</div>
            <div className="text-xs text-slate-400 mt-0.5">Located in East Durham near Driver St. Free street &amp; lot parking.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
