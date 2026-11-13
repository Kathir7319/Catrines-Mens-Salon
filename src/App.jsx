import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import NotFound from './pages/NotFound';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const handleOpenBooking = () => {
    setSelectedServiceId(null);
    setIsBookingOpen(true);
  };

  const handleSelectServiceAndBook = (serviceId) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-charcoal-950 text-silver-200">
        <ScrollToTop />

        {/* Global Navigation */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Main Routed Content */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onOpenBooking={handleOpenBooking} 
                  onSelectService={handleSelectServiceAndBook} 
                />
              } 
            />
            <Route 
              path="/about" 
              element={<About onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/services" 
              element={
                <Services 
                  onSelectService={handleSelectServiceAndBook} 
                  onOpenBooking={handleOpenBooking} 
                />
              } 
            />
            <Route 
              path="/gallery" 
              element={<Gallery onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/reviews" 
              element={<Reviews onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/contact" 
              element={<Contact onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/book" 
              element={<Booking />} 
            />
            <Route 
              path="*" 
              element={<NotFound />} 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Global Interactive Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          initialServiceId={selectedServiceId}
        />
      </div>
    </Router>
  );
}
