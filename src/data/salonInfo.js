export const salonInfo = {
  name: "Catrines Mens Salon",
  tagline: "Durham's Premier Men's Grooming & Styling Experience",
  description: "Precision haircuts, sharp beard trims, and top-tier grooming tailored for the modern man. Step in for a premium experience right here in East Durham.",
  address: {
    street: "2110 Angier Ave",
    city: "Durham",
    state: "NC",
    zip: "27703",
    full: "2110 Angier Ave, Durham, NC 27703",
    area: "East Durham / Angier Square"
  },
  phone: "(919) 672-6717",
  phoneRaw: "+19196726717",
  email: "info@catrinesmenssalon.com",
  bookingUrl: "https://booksy.com", // Direct Booksy link for Catrines
  facebookUrl: "https://facebook.com",
  instagramUrl: "https://instagram.com",
  googleMapsUrl: "https://maps.google.com/?q=2110+Angier+Ave,+Durham,+NC+27703",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.618635815671!2d-78.87834542381254!3d35.98064971350849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace4f2ce908bf3%3A0xe5a3c9ea5a52cf84!2s2110%20Angier%20Ave%2C%20Durham%2C%20NC%2027703!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus",
  hours: [
    { day: "Tuesday", open: "09:00", close: "18:00", text: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", open: "09:00", close: "18:00", text: "9:00 AM - 6:00 PM" },
    { day: "Thursday", open: "09:00", close: "18:00", text: "9:00 AM - 6:00 PM" },
    { day: "Friday", open: "09:00", close: "18:00", text: "9:00 AM - 6:00 PM" },
    { day: "Saturday", open: "08:00", close: "16:00", text: "8:00 AM - 4:00 PM" },
    { day: "Sunday", open: null, close: null, text: "CLOSED" },
    { day: "Monday", open: null, close: null, text: "CLOSED" }
  ],
  stats: [
    { label: "Client Rating", value: "4.9★", subtext: "180+ Verified Reviews" },
    { label: "Durham Location", value: "Angier Ave", subtext: "Easy Free Parking" },
    { label: "Master Barbers", value: "Elite Staff", subtext: "Licensed & Dedicated" },
    { label: "Satisfaction", value: "100%", subtext: "Tailored Precision" }
  ]
};

// Check if salon is currently open
export function getShopLiveStatus() {
  const now = new Date();
  const dayIndex = now.getDay(); // 0 is Sun, 1 is Mon, 2 is Tue, ...
  
  // Mapping JS day to day names
  const daysMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayName = daysMap[dayIndex];
  
  const todaySchedule = salonInfo.hours.find(h => h.day === currentDayName);
  
  if (!todaySchedule || !todaySchedule.open) {
    return {
      isOpen: false,
      message: "Closed today",
      nextOpen: "Opens Tuesday at 9:00 AM",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20"
    };
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const [openH, openM] = todaySchedule.open.split(":").map(Number);
  const [closeH, closeM] = todaySchedule.close.split(":").map(Number);
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    return {
      isOpen: true,
      message: `Open Now until ${todaySchedule.close > "12:00" ? (closeH - 12) + ":00 PM" : closeH + ":00 AM"}`,
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    };
  } else if (currentMinutes < openMinutes) {
    return {
      isOpen: false,
      message: `Opens today at ${todaySchedule.open < "12:00" ? openH + ":00 AM" : (openH - 12) + ":00 PM"}`,
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    };
  } else {
    return {
      isOpen: false,
      message: "Closed for today",
      nextOpen: dayIndex === 6 ? "Opens Tuesday at 9:00 AM" : "Opens tomorrow morning",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20"
    };
  }
}
