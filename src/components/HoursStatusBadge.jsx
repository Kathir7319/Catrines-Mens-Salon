import React, { useState, useEffect } from 'react';
import { getShopLiveStatus } from '../data/salonInfo';
import { Clock } from 'lucide-react';

export default function HoursStatusBadge({ className = '', showIcon = true }) {
  const [status, setStatus] = useState(getShopLiveStatus());

  useEffect(() => {
    // Refresh status every minute
    const interval = setInterval(() => {
      setStatus(getShopLiveStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${status.badgeColor} ${className}`}>
      {showIcon && <Clock className="w-3.5 h-3.5" />}
      <span className="relative flex h-2 w-2">
        {status.isOpen && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${status.isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
      </span>
      <span>{status.message}</span>
    </div>
  );
}
