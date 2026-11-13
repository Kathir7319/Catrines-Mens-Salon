import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { servicesData } from '../data/servicesData';
import { barbersData } from '../data/barbersData';
import { salonInfo } from '../data/salonInfo';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Scissors, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialServiceId = null }) {
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId || servicesData[0].id);
  const [selectedBarberId, setSelectedBarberId] = useState('any');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [step, setStep] = useState(1); // 1: Select Service & Barber, 2: Date & Time, 3: Client Info, 4: Confirmed
  const [activeTab, setActiveTab] = useState('direct'); // 'direct' or 'booksy'

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  // Set default date to next open business day
  useEffect(() => {
    const today = new Date();
    // Default to tomorrow or next business day
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    // Format YYYY-MM-DD
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setSelectedDate(`${yyyy}-${mm}-${dd}`);
    setSelectedTime('10:00 AM');
  }, []);

  if (!isOpen) return null;

  const currentService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];
  const currentBarber = barbersData.find(b => b.id === selectedBarberId) || barbersData[0];

  // Available sample time slots
  const timeSlots = [
    '09:00 AM', '09:45 AM', '10:30 AM', '11:15 AM', 
    '12:00 PM', '01:00 PM', '01:45 PM', '02:30 PM', 
    '03:15 PM', '04:00 PM', '04:45 PM', '05:15 PM'
  ];

  const handleNextStep = (e) => {
    if (e) e.preventDefault();
    if (step === 3) {
      // Fire confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F3E5AB', '#CBD5E1', '#FFFFFF']
      });
      setStep(4);
    } else {
      setStep(step + 1);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Dialog Container */}
      <div 
        className="relative w-full max-w-2xl bg-charcoal-900 border border-gold-500/30 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-charcoal-950 border-b border-charcoal-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-serif font-bold text-white tracking-wide">
                Book Your Grooming Session
              </h2>
              <p className="text-xs text-slate-400">
                Catrines Mens Salon • 2110 Angier Ave, Durham
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-charcoal-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher: Direct Instant Booking vs Booksy Widget */}
        <div className="px-6 pt-3 pb-2 bg-charcoal-950/50 border-b border-charcoal-800/80 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('direct')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'direct'
                ? 'bg-gold-500 text-charcoal-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-charcoal-800/60'
            }`}
          >
            Instant Online Reservation
          </button>
          <button
            onClick={() => setActiveTab('booksy')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'booksy'
                ? 'bg-gold-500 text-charcoal-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-charcoal-800/60'
            }`}
          >
            <span>Book via Booksy Profile</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>

        {/* Tab 2: Booksy Direct Link Option */}
        {activeTab === 'booksy' ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 mx-auto flex items-center justify-center text-gold-400">
              <Scissors className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">Prefer to use your Booksy App?</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                You can easily view all live barber availability, select specific add-ons, and book through the official Catrines Mens Salon Booksy storefront.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={salonInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-charcoal-950 font-bold text-sm tracking-wider uppercase shadow-xl hover:scale-105 transition-transform"
              >
                <span>Open Catrines on Booksy</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-slate-500">
              Or switch back to <button onClick={() => setActiveTab('direct')} className="text-gold-400 underline font-medium">Instant Online Reservation</button> to book without a Booksy account.
            </p>
          </div>
        ) : (
          /* Tab 1: Multi-Step Interactive Flow */
          <div className="p-6">
            {/* Step Indicators */}
            {step < 4 && (
              <div className="flex items-center justify-between mb-6 border-b border-charcoal-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                    step >= 1 ? 'bg-gold-500 text-charcoal-950' : 'bg-charcoal-800 text-slate-400'
                  }`}>
                    1
                  </span>
                  <span className="text-xs font-medium text-slate-300">Service</span>
                </div>
                <div className="h-px w-8 bg-charcoal-800" />
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                    step >= 2 ? 'bg-gold-500 text-charcoal-950' : 'bg-charcoal-800 text-slate-400'
                  }`}>
                    2
                  </span>
                  <span className="text-xs font-medium text-slate-300">Date & Barber</span>
                </div>
                <div className="h-px w-8 bg-charcoal-800" />
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                    step >= 3 ? 'bg-gold-500 text-charcoal-950' : 'bg-charcoal-800 text-slate-400'
                  }`}>
                    3
                  </span>
                  <span className="text-xs font-medium text-slate-300">Your Info</span>
                </div>
              </div>
            )}

            {/* STEP 1: Select Service */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    Select Grooming Service
                  </h3>
                  <span className="text-xs text-gold-400">
                    Transparent Pricing • Durham, NC
                  </span>
                </div>

                <div className="max-h-[300px] overflow-y-auto space-y-2 pr-1">
                  {servicesData.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        selectedServiceId === service.id
                          ? 'border-gold-500 bg-gold-500/10 shadow-sm'
                          : 'border-charcoal-800 bg-charcoal-850 hover:border-charcoal-700'
                      }`}
                    >
                      <div className="space-y-1 pr-3">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-white">{service.name}</h4>
                          {service.popular && (
                            <span className="px-2 py-0.5 text-[10px] rounded-full bg-gold-500/20 text-gold-400 font-medium">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1">{service.description}</p>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <div className="text-sm font-bold text-gold-400">{service.priceDisplay}</div>
                        <div className="text-[11px] text-slate-500">{service.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-charcoal-800">
                  <div className="text-xs text-slate-400">
                    Selected: <span className="text-white font-medium">{currentService.name}</span> ({currentService.priceDisplay})
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold-600 to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:scale-105 transition-transform"
                  >
                    <span>Next: Choose Barber</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Choose Barber, Date & Time */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                    Select Your Preferred Barber
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {barbersData.map((barber) => (
                      <div
                        key={barber.id}
                        onClick={() => setSelectedBarberId(barber.id)}
                        className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${
                          selectedBarberId === barber.id
                            ? 'border-gold-500 bg-gold-500/10'
                            : 'border-charcoal-800 bg-charcoal-850 hover:border-charcoal-700'
                        }`}
                      >
                        <img 
                          src={barber.avatar} 
                          alt={barber.name} 
                          className="w-12 h-12 rounded-full object-cover mx-auto mb-1.5 border border-gold-500/30"
                        />
                        <div className="text-xs font-semibold text-white line-clamp-1">{barber.name}</div>
                        <div className="text-[10px] text-gold-400">{barber.role}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                      Select Date (Tue - Sat)
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3 py-2 bg-charcoal-850 border border-charcoal-700 rounded-lg text-white text-sm focus:border-gold-500 focus:outline-none"
                    />
                    <p className="text-[10px] text-slate-500 mt-1">Shop is closed on Sunday & Monday</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                      Select Time Slot
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-3 py-2 bg-charcoal-850 border border-charcoal-700 rounded-lg text-white text-sm focus:border-gold-500 focus:outline-none"
                    >
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-charcoal-800">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2 rounded-lg border border-charcoal-700 text-xs font-medium text-slate-300 hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold-600 to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:scale-105 transition-transform"
                  >
                    <span>Next: Your Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Client Info */}
            {step === 3 && (
              <form onSubmit={handleNextStep} className="space-y-4">
                <div className="p-3 rounded-lg bg-charcoal-850 border border-charcoal-800 text-xs text-slate-300 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white">{currentService.name}</span> with{' '}
                    <span className="text-gold-400">{currentBarber.name}</span>
                  </div>
                  <div className="text-gold-400 font-bold">{selectedDate} at {selectedTime}</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        placeholder="Marcus Thomas"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-charcoal-850 border border-charcoal-700 rounded-lg text-white text-sm focus:border-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number (for SMS Reminder) *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        required
                        placeholder="(919) 555-0192"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-charcoal-850 border border-charcoal-700 rounded-lg text-white text-sm focus:border-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      placeholder="marcus@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-charcoal-850 border border-charcoal-700 rounded-lg text-white text-sm focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Special Grooming Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specific fade height, beard shape request, or sensitive skin notes..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-2.5 bg-charcoal-850 border border-charcoal-700 rounded-lg text-white text-xs focus:border-gold-500 focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-charcoal-800">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 rounded-lg border border-charcoal-700 text-xs font-medium text-slate-300 hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirm Booking</span>
                  </button>
                </div>
              </form>
            )}

            {/* STEP 4: Confirmed State */}
            {step === 4 && (
              <div className="py-6 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Appointment Reserved!</span>
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    We'll See You in the Chair, {formData.name || 'Friend'}!
                  </h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Your appointment has been locked in at Catrines Mens Salon. A confirmation text has been prepared for {formData.phone || '(919) 672-6717'}.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="p-4 rounded-xl bg-charcoal-950 border border-charcoal-800 text-left space-y-2 max-w-md mx-auto text-xs">
                  <div className="flex justify-between border-b border-charcoal-850 pb-2">
                    <span className="text-slate-400">Service:</span>
                    <span className="font-semibold text-white">{currentService.name} ({currentService.priceDisplay})</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal-850 pb-2">
                    <span className="text-slate-400">Barber:</span>
                    <span className="font-semibold text-gold-400">{currentBarber.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal-850 pb-2">
                    <span className="text-slate-400">Date & Time:</span>
                    <span className="font-semibold text-white">{selectedDate} at {selectedTime}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-400">Location:</span>
                    <span className="text-slate-300 font-medium">2110 Angier Ave, Durham, NC</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={resetAndClose}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-400"
                  >
                    Done & Close
                  </button>

                  <a
                    href={salonInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-charcoal-700 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    View Directions on Map
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
