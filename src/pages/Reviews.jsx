import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { reviewsData as initialReviews } from '../data/reviewsData';
import ReviewCard from '../components/ReviewCard';
import PageHero from '../components/PageHero';
import { salonInfo } from '../data/salonInfo';
import { 
  Star, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  ExternalLink, 
  Send,
  CheckCircle2,
  ThumbsUp,
  User,
  Calendar
} from 'lucide-react';

export default function Reviews({ onOpenBooking }) {
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: 'Durham, NC',
    service: 'Signature Mens Haircut',
    rating: 5,
    quote: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "What Durham Men Are Saying | Reviews • Catrines Mens Salon";
  }, []);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return;

    const created = {
      id: Date.now(),
      name: newReview.name,
      location: newReview.location || 'Durham, NC',
      service: newReview.service,
      rating: Number(newReview.rating),
      date: 'Just now',
      platform: 'Verified Visitor',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      quote: newReview.quote,
      featured: true
    };

    setReviewsList([created, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowReviewForm(false);
      setNewReview({
        name: '',
        location: 'Durham, NC',
        service: 'Signature Mens Haircut',
        rating: 5,
        quote: ''
      });
    }, 2000);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Subpage Header Banner with Breadcrumbs */}
      <PageHero
        badge="Section 6 • Community Voices"
        title="What Durham Men Are Saying"
        breadcrumbLabel="Customer Reviews"
        description="Unvarnished, verified reviews from regular Durham clients and newcomers who trust Catrines Mens Salon with their weekly grooming. Read why we are rated 4.9 out of 5 stars."
        stats={[
          { label: "Overall Rating", value: "4.9 / 5.0 ★" },
          { label: "Verified Reviews", value: "180+ Reviews" },
          { label: "5-Star Ratio", value: "96% Positive" },
          { label: "Platforms", value: "Booksy & Google" }
        ]}
      />

      {/* Ratings Dashboard & Write Review Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-charcoal-900 border border-charcoal-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Big Score */}
          <div className="md:col-span-4 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-charcoal-800 pb-6 md:pb-0 md:pr-8">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-5xl font-serif font-extrabold text-white">4.9</span>
              <div className="text-left">
                <div className="flex text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Based on 180+ Verified Reviews</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Consistently rated #1 for sharp line-ups, skin fades, and clean shop environment in Durham, NC.
            </p>
          </div>

          {/* Breakdown bars */}
          <div className="md:col-span-5 space-y-2 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-12 text-slate-400 font-medium">5 Stars</span>
              <div className="flex-1 h-2 bg-charcoal-800 rounded-full overflow-hidden">
                <div className="w-[96%] h-full bg-gold-500 rounded-full" />
              </div>
              <span className="w-8 text-right text-slate-300 font-semibold">96%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-slate-400 font-medium">4 Stars</span>
              <div className="flex-1 h-2 bg-charcoal-800 rounded-full overflow-hidden">
                <div className="w-[4%] h-full bg-gold-500/70 rounded-full" />
              </div>
              <span className="w-8 text-right text-slate-300 font-semibold">4%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-slate-400 font-medium">3 Stars</span>
              <div className="flex-1 h-2 bg-charcoal-800 rounded-full overflow-hidden">
                <div className="w-[0%] h-full bg-slate-600 rounded-full" />
              </div>
              <span className="w-8 text-right text-slate-500 font-semibold">0%</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="md:col-span-3 text-center md:text-right">
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{showReviewForm ? 'Close Review Form' : 'Write A Review'}</span>
            </button>
            <div className="text-[11px] text-slate-500 mt-2">
              Instant submission • No account required
            </div>
          </div>
        </div>

        {/* Interactive Review Form */}
        {showReviewForm && (
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-charcoal-900 border border-gold-500/40 shadow-2xl animate-fadeIn">
            <h3 className="text-xl font-serif font-bold text-white mb-2">
              Share Your Catrines Experience
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Your feedback helps Durham gentlemen find the best barber in town.
            </p>

            {submitted ? (
              <div className="p-6 text-center space-y-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
                <CheckCircle2 className="w-8 h-8 mx-auto" />
                <h4 className="font-bold text-base">Thank you for your review!</h4>
                <p className="text-xs text-slate-300">Your feedback has been posted below.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jason R."
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full px-3.5 py-2 bg-charcoal-850 border border-charcoal-700 rounded-lg text-white text-xs focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Location</label>
                    <input
                      type="text"
                      placeholder="e.g. East Durham / RTP"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      className="w-full px-3.5 py-2 bg-charcoal-850 border border-charcoal-700 rounded-lg text-white text-xs focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Service Availed</label>
                    <select
                      value={newReview.service}
                      onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                      className="w-full px-3.5 py-2 bg-charcoal-850 border border-charcoal-700 rounded-lg text-white text-xs focus:border-gold-500 focus:outline-none"
                    >
                      <option value="Signature Mens Haircut">Signature Mens Haircut</option>
                      <option value="Skin Fade & Taper">Skin Fade & Taper</option>
                      <option value="Line-Up & Edging">Line-Up & Edging</option>
                      <option value="Beard Trim & Sculpting">Beard Trim & Sculpting</option>
                      <option value="The Executive Combo">The Executive Combo</option>
                      <option value="The Catrines VIP Experience">The Catrines VIP Experience</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Star Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="p-1 focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReview.rating
                              ? 'text-gold-400 fill-gold-400'
                              : 'text-charcoal-700'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs text-gold-400 font-semibold ml-2">
                      {newReview.rating} of 5 Stars
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Review *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about the barber, the sharpness of the cut, the vibe, or the booking experience..."
                    value={newReview.quote}
                    onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                    className="w-full p-3 bg-charcoal-850 border border-charcoal-700 rounded-lg text-white text-xs focus:border-gold-500 focus:outline-none resize-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="px-4 py-2 rounded-lg border border-charcoal-700 text-xs font-medium text-slate-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg bg-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-gold-400 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Publish Review</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </section>

      {/* Reviews Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      {/* External Verified Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-charcoal-900 border border-charcoal-800 text-center space-y-4">
          <h3 className="text-xl font-serif font-bold text-white">
            Ready to Experience Catrines for Yourself?
          </h3>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            Book online to secure your preferred barber and chair time at 2110 Angier Ave.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={salonInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-charcoal-850 border border-charcoal-700 hover:border-gold-500/50 text-gold-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:text-white"
            >
              <span>View Booksy Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              to="/book"
              className="px-6 py-3 rounded-xl bg-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-400 transition-colors shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
