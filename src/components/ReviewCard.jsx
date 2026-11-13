import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export default function ReviewCard({ review }) {
  return (
    <div className="relative rounded-2xl bg-charcoal-900/80 border border-charcoal-800 p-6 flex flex-col justify-between hover:border-gold-500/30 transition-all duration-300">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-charcoal-800 pointer-events-none" />

      <div>
        {/* Rating Stars & Platform */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-gold-400">
            {[...Array(review.rating || 5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold-400" />
            ))}
          </div>

          <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 bg-charcoal-800/80 px-2.5 py-1 rounded-full border border-charcoal-700/60">
            <ShieldCheck className="w-3 h-3 text-gold-400" />
            <span>{review.platform}</span>
          </div>
        </div>

        {/* Review Quote */}
        <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
          "{review.quote}"
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-charcoal-800/80">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover border border-gold-500/30"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-white truncate">
            {review.name}
          </h4>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>{review.location}</span>
            <span>•</span>
            <span className="text-gold-400/90 truncate">{review.service}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
