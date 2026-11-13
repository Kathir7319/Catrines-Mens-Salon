import React from 'react';
import { Clock, Check, Scissors, Sparkles, ChevronRight } from 'lucide-react';

export default function ServiceCard({ service, onSelectService }) {
  return (
    <div className="relative group rounded-2xl bg-charcoal-900/90 border border-charcoal-800 hover:border-gold-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      {/* Popular Badge */}
      {service.badge && (
        <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 text-charcoal-950 font-bold text-[10px] tracking-wider uppercase shadow-md flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          <span>{service.badge}</span>
        </div>
      )}

      {service.popular && !service.badge && (
        <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 font-semibold text-[10px] tracking-wider uppercase">
          Top Pick
        </div>
      )}

      {/* Top Details */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
              {service.name}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5 text-gold-500" />
              <span>{service.duration}</span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-2xl font-bold font-serif text-gold-400">
              {service.priceDisplay}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {service.description}
        </p>

        {/* Included features list */}
        {service.included && service.included.length > 0 && (
          <div className="pt-2 border-t border-charcoal-800/80 space-y-2">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
              Includes:
            </span>
            <ul className="space-y-1.5">
              {service.included.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <div className="w-3.5 h-3.5 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-gold-400" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="pt-6 mt-4 border-t border-charcoal-800">
        <button
          onClick={() => onSelectService(service.id)}
          className="w-full py-2.5 px-4 rounded-xl bg-charcoal-800 hover:bg-gold-500 text-slate-200 hover:text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 group-hover:bg-gold-500 group-hover:text-charcoal-950"
        >
          <Scissors className="w-3.5 h-3.5" />
          <span>Book This Service</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
