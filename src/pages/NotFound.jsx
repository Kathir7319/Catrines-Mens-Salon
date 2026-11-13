import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 mx-auto flex items-center justify-center">
          <Scissors className="w-10 h-10" />
        </div>
        
        <div className="space-y-2">
          <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">404 • Page Not Found</span>
          <h1 className="text-4xl font-serif font-extrabold text-white">Out of Bounds</h1>
          <p className="text-sm text-slate-400">
            Looks like this page took a wrong turn off Angier Ave. Let's get you back to the salon.
          </p>
        </div>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-gold-400 shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 rounded-xl border border-charcoal-700 text-slate-300 text-xs font-semibold hover:text-white"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
