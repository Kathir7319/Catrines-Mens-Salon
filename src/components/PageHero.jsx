import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import { Sparkles } from 'lucide-react';

export default function PageHero({ 
  badge, 
  title, 
  description, 
  breadcrumbLabel, 
  children,
  stats
}) {
  return (
    <section className="relative pt-10 pb-14 border-b border-charcoal-800/80 bg-charcoal-900/40 overflow-hidden">
      {/* Background glow and subtle mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gold-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: breadcrumbLabel || title }]} />

        <div className="max-w-3xl space-y-4">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider text-gold-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}

          {children}
        </div>

        {/* Optional Quick Stats Row */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-charcoal-800">
            {stats.map((s, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-charcoal-850/60 border border-charcoal-800">
                <div className="text-lg font-serif font-bold text-gold-400">{s.value}</div>
                <div className="text-xs text-slate-300 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
