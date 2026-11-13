import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { servicesData } from '../data/servicesData';
import { barbersData } from '../data/barbersData';
import { salonInfo } from '../data/salonInfo';
import HoursStatusBadge from '../components/HoursStatusBadge';
import { 
  Calendar, 
  Clock, 
  User, 
  Scissors, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  MapPin,
  ShieldCheck
} from 'lucide-react';

export default function Booking() {
  const [selectedServiceId, setSelectedServiceId] = useState(servicesData[0].id);
  const [selectedBarberId, setSelectedBarberId] = useState('any');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [step, setStep] = useState(1);
  const [bookingMode, setBookingMode] = useState('direct'); // 'direct' or 'booksy'

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setSelectedDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const currentService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];
  const currentBarber = barbersData.find(b => b.id === selectedBarberId) || barbersData[0];

  const timeSlots = [
    '09:00 AM', '09:45 AM', '10:30 AM', '11:15 AM', 
    '12:00 PM', '01:00 PM', '01:45 PM', '02:30 PM', 
    '03:15 PM', '04:00 PM', '04:45 PM', '05:15 PM'
  ];

  const handleNextStep = (e) => {
    if (e) e.preventDefault();
    if (step === 3) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F3E5AB', '#CBD5E1', '#FFFFFF']
      });
      setStep(4);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider text-gold-400 mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>Priority Chair Reservation</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-white tracking-tight mb-4">
          Book Your Appointment
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Select your desired grooming service, pick your preferred master barber, and choose an available time slot with guaranteed zero waiting time.
        </p>
      </section>

      {/* Main Reservation Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-charcoal-900 border border-gold-500/30 shadow-2xl overflow-hidden">
          {/* Top Options Bar */}
          <div className="p-4 sm:p-6 bg-charcoal-950 border-b border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setBookingMode('direct')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  bookingMode === 'direct'
                    ? 'bg-gold-500 text-charcoal-950 shadow-md'
                    : 'bg-charcoal-850 text-slate-300 hover:text-white'
                }`}
              >
                Instant Online Booking
              </button>
              <button
                onClick={() => setBookingMode('booksy')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  bookingMode === 'booksy'
                    ? 'bg-gold-500 text-charcoal-950 shadow-md'
                    : 'bg-charcoal-850 text-slate-300 hover:text-white'
                }`}
              >
                <span>Book via Booksy Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            <HoursStatusBadge />
          </div>

          {bookingMode === 'booksy' ? (
            <div className="p-12 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 mx-auto flex items-center justify-center">
                <Scissors className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Official Booksy Appointment Gateway
                </h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto">
                  Catrines Mens Salon is officially verified on Booksy. Click below to view real-time chair calendar, live slots, and barber portfolios directly on Booksy.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={salonInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-charcoal-950 font-extrabold text-sm uppercase tracking-wider shadow-2xl hover:scale-105 transition-transform"
                >
                  <Calendar className="w-5 h-5 text-charcoal-950" />
                  <span>Open Catrines on Booksy</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs text-slate-500">
                Or <button onClick={() => setBookingMode('direct')} className="text-gold-400 underline font-semibold">use our direct instant online reservation</button> without needing an account.
              </p>
            </div>
          ) : (
            <div className="p-6 sm:p-10">
              {/* Step Progress Indicators */}
              {step < 4 && (
                <div className="flex items-center justify-between mb-8 border-b border-charcoal-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                      step >= 1 ? 'bg-gold-500 text-charcoal-950' : 'bg-charcoal-800 text-slate-400'
                    }`}>
                      1
                    </span>
                    <span className="text-xs font-semibold text-white">Select Service</span>
                  </div>
                  <div className="h-px flex-1 mx-3 bg-charcoal-800" />
                  <div className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                      step >= 2 ? 'bg-gold-500 text-charcoal-950' : 'bg-charcoal-800 text-slate-400'
                    }`}>
                      2
                    </span>
                    <span className="text-xs font-semibold text-white">Barber &amp; Time</span>
                  </div>
                  <div className="h-px flex-1 mx-3 bg-charcoal-800" />
                  <div className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                      step >= 3 ? 'bg-gold-500 text-charcoal-950' : 'bg-charcoal-800 text-slate-400'
                    }`}>
                      3
                    </span>
                    <span className="text-xs font-semibold text-white">Details &amp; SMS</span>
                  </div>
                </div>
              )}

              {/* STEP 1: Service Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm uppercase tracking-wider font-bold text-gold-500">
                      Step 1: Choose Your Grooming Experience
                    </h3>
                    <span className="text-xs text-slate-400">Durham, NC Rates</span>
                  </div>

                  <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                    {servicesData.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => setSelectedServiceId(service.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          selectedServiceId === service.id
                            ? 'border-gold-500 bg-gold-500/10 shadow-lg'
                            : 'border-charcoal-800 bg-charcoal-850/80 hover:border-charcoal-700'
                        }`}
                      >
                        <div className="space-y-1 pr-4">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm sm:text-base font-semibold text-white">{service.name}</h4>
                            {service.popular && (
                              <span className="px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-400 text-[10px] font-bold">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1">{service.description}</p>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <div className="text-base sm:text-lg font-bold font-serif text-gold-400">{service.priceDisplay}</div>
                          <div className="text-xs text-slate-500">{service.duration}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-charcoal-800 flex items-center justify-between">
                    <div className="text-xs text-slate-300">
                      Chosen: <span className="text-white font-bold">{currentService.name}</span> ({currentService.priceDisplay})
                    </div>
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
                    >
                      <span>Continue: Choose Barber &amp; Time</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Barber & Time */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider font-bold text-gold-500 mb-3">
                      Step 2: Choose Your Barber
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {barbersData.map((barber) => (
                        <div
                          key={barber.id}
                          onClick={() => setSelectedBarberId(barber.id)}
                          className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
                            selectedBarberId === barber.id
                              ? 'border-gold-500 bg-gold-500/10 shadow-lg'
                              : 'border-charcoal-800 bg-charcoal-850/80 hover:border-charcoal-700'
                          }`}
                        >
                          <img
                            src={barber.avatar}
                            alt={barber.name}
                            className="w-14 h-14 rounded-full object-cover mx-auto mb-2 border border-gold-500/30"
                          />
                          <div className="text-xs font-bold text-white line-clamp-1">{barber.name}</div>
                          <div className="text-[10px] text-gold-400 mt-0.5">{barber.role}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Select Appointment Date (Tue - Sat)
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-2.5 bg-charcoal-850 border border-charcoal-700 rounded-xl text-white text-xs focus:border-gold-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Select Preferred Time Slot
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-4 py-2.5 bg-charcoal-850 border border-charcoal-700 rounded-xl text-white text-xs focus:border-gold-500 focus:outline-none"
                      >
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-charcoal-800 flex items-center justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-xl border border-charcoal-700 text-xs font-semibold text-slate-300 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
                    >
                      <span>Continue: Contact Info</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Client Info */}
              {step === 3 && (
                <form onSubmit={handleNextStep} className="space-y-6">
                  <div className="p-4 rounded-xl bg-charcoal-850 border border-charcoal-800 text-xs text-slate-300 flex items-center justify-between">
                    <div>
                      <span className="text-white font-bold">{currentService.name}</span> with <span className="text-gold-400 font-semibold">{currentBarber.name}</span>
                    </div>
                    <div className="text-gold-400 font-bold">{selectedDate} @ {selectedTime}</div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
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
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number (for SMS confirmation) *
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
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address (Optional)
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
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Special Instructions or Requests
                      </label>
                      <input
                        type="text"
                        placeholder="Skin fade preference, beard line shape, etc."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-2.5 bg-charcoal-850 border border-charcoal-700 rounded-xl text-white text-xs focus:border-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-charcoal-800 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-xl border border-charcoal-700 text-xs font-semibold text-slate-300 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-charcoal-950 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm &amp; Lock In Appointment</span>
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 4: Confirmed State */}
              {step === 4 && (
                <div className="py-8 text-center space-y-6 animate-fadeIn">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Appointment Confirmed!</span>
                    </span>
                    <h3 className="text-3xl font-serif font-bold text-white">
                      You're On The Schedule, {formData.name || 'Gentleman'}!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Your chair at Catrines Mens Salon (2110 Angier Ave) has been successfully reserved. We look forward to providing you with Durham's premier grooming experience.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="p-6 rounded-2xl bg-charcoal-950 border border-charcoal-800 text-left space-y-3 max-w-lg mx-auto text-xs">
                    <div className="flex justify-between border-b border-charcoal-850 pb-2">
                      <span className="text-slate-400">Service:</span>
                      <span className="font-bold text-white">{currentService.name} ({currentService.priceDisplay})</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal-850 pb-2">
                      <span className="text-slate-400">Master Barber:</span>
                      <span className="font-bold text-gold-400">{currentBarber.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal-850 pb-2">
                      <span className="text-slate-400">Date &amp; Time:</span>
                      <span className="font-bold text-white">{selectedDate} at {selectedTime}</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal-850 pb-2">
                      <span className="text-slate-400">Shop Location:</span>
                      <span className="text-slate-200 font-medium">2110 Angier Ave, Durham, NC 27703</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-slate-400">Phone for updates:</span>
                      <span className="text-gold-400 font-mono">{formData.phone || '(919) 672-6717'}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => setStep(1)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-400"
                    >
                      Book Another Appointment
                    </button>

                    <a
                      href={salonInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl border border-charcoal-700 text-slate-200 text-xs font-semibold hover:text-white"
                    >
                      Get Directions to Shop
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
