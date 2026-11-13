import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'default', showSubtitle = true, variant = 'full', className = '' }) {
  // Size presets
  const sizeMap = {
    small: { icon: 'w-8 h-8', title: 'text-base', sub: 'text-[9px]' },
    default: { icon: 'w-10 h-10', title: 'text-lg md:text-xl', sub: 'text-[10px]' },
    large: { icon: 'w-16 h-16', title: 'text-2xl md:text-3xl', sub: 'text-xs' },
    hero: { icon: 'w-24 h-24 md:w-32 md:h-32', title: 'text-3xl md:text-5xl', sub: 'text-sm md:text-base' }
  };

  const currentSize = sizeMap[size] || sizeMap.default;

  return (
    <Link to="/" className={`flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Custom Emblem SVG */}
      <div className={`relative ${currentSize.icon} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">
          <defs>
            <linearGradient id="goldSheen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BF953F" />
              <stop offset="30%" stopColor="#FCF6BA" />
              <stop offset="60%" stopColor="#B38728" />
              <stop offset="100%" stopColor="#AA771C" />
            </linearGradient>
            <linearGradient id="innerBg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1C222C" />
              <stop offset="100%" stopColor="#0B0D10" />
            </linearGradient>
          </defs>

          {/* Hexagonal Shield Outline */}
          <polygon 
            points="50,4 92,20 92,80 50,96 8,80 8,20" 
            fill="url(#innerBg)" 
            stroke="url(#goldSheen)" 
            strokeWidth="2.5" 
          />
          
          <polygon 
            points="50,10 86,24 86,76 50,90 14,76 14,24" 
            fill="none" 
            stroke="url(#goldSheen)" 
            strokeWidth="0.8" 
            strokeDasharray="3 2" 
            opacity="0.8"
          />

          {/* Crossed Scissors & Razor Lines */}
          <line x1="28" y1="28" x2="72" y2="72" stroke="#CBD5E1" strokeWidth="1.8" opacity="0.45" />
          <line x1="72" y1="28" x2="28" y2="72" stroke="url(#goldSheen)" strokeWidth="1.8" opacity="0.45" />
          
          {/* Top Star */}
          <polygon points="50,14 52,19 57,19 53,22 55,27 50,24 45,27 47,22 43,19 48,19" fill="url(#goldSheen)" />

          {/* Roman Serif 'C' */}
          <text 
            x="50" 
            y="64" 
            fontFamily="'Cinzel', 'Playfair Display', serif" 
            fontSize="44" 
            fontWeight="800" 
            textAnchor="middle" 
            fill="url(#goldSheen)"
          >
            C
          </text>
        </svg>
      </div>

      {/* Typography */}
      {variant !== 'crest' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-serif font-bold tracking-[0.2em] text-white uppercase transition-colors group-hover:text-gold-400 ${currentSize.title}`}>
              Catrines
            </span>
          </div>
          {showSubtitle && (
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className={`font-sans font-semibold tracking-[0.28em] text-gold-500 uppercase ${currentSize.sub}`}>
                Mens Salon
              </span>
              <span className="text-slate-500 text-[10px] hidden sm:inline">•</span>
              <span className="text-slate-400 tracking-wider text-[9px] uppercase hidden sm:inline">
                Durham, NC
              </span>
            </div>
          )}
        </div>
      )}
    </Link>
  );
}
