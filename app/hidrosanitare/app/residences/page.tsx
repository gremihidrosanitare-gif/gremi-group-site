import Link from 'next/link';
import HidrosanitarePromo from '../components/HidrosanitarePromo';

export default function ResidencesBooking() {
  const BOOKING_WHATSAPP = "355683777157";
  const RESIDENCES_EMAIL = "residencesgremi@gmail.com";
  
  const DIRECT_URL = "https://gremiresidences.dtravel.com/";
  const BOOKING_URL = "https://www.booking.com/hotel/al/gremi-residences-by-the-sea.html";
  const AIRBNB_URL = "https://airbnb.com/h/gremiresidencesvlore";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col justify-between">
      <header className="border-b border-stone-200 sticky top-0 z-50 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-medium tracking-widest text-stone-900">
            GREMI <span className="text-amber-600 font-light">RESIDENCES</span>
          </Link>
          <a href={DIRECT_URL} target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs md:text-sm px-5 py-2.5 rounded-lg shadow-md">
            Book Direct (Save 20%)
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16 w-full">
        <div className="text-center mb-16 bg-gradient-to-br from-stone-900 to-neutral-950 text-white p-8 md:p-12 rounded-3xl shadow-xl">
          <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase block mb-3">Guaranteed Best Rates</span>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
            Bypass Platform Fees. <span className="font-normal text-amber-500">Save 20%.</span>
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-xl mx-auto mb-8">
            Book directly through our certified secure engine to secure direct-owner rates instantly, avoiding excessive third-party markups.
          </p>
          <a href={DIRECT_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-stone-900 font-semibold px-8 py-3.5 rounded-xl hover:bg-stone-200 transition-all">
            Open Live Booking Calendar
          </a>
        </div>

        <div className="space-y-12">
          {/* Vlora Destination */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase">Premium Destination</span>
              <h2 className="text-2xl md:text-3xl font-normal text-stone-900">Vlorë Coastal Accommodation</h2>
              <p className="text-stone-500 italic text-sm">Pristine Sea View layouts equipped with High-Speed Wi-Fi, modern climate control, and rapid beach access.</p>
            </div>
            <div className="lg:col-span-5 bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-3">
              <a href={DIRECT_URL} target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 bg-stone-900 text-white text-center rounded-lg text-sm font-medium">Book Direct Instantly</a>
              <a href={`https://wa.me/${BOOKING_WHATSAPP}?text=Hi%20Gremi%20Residences,%20I'm%20inquiring%20about%20stay%20dates%20in%20Vlora.`} className="block w-full py-2.5 bg-white border border-stone-300 text-stone-700 text-center rounded-lg text-sm font-medium">Inquire via WhatsApp</a>
            </div>
          </div>

          {/* Pogradec Destination */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase">Premium Destination</span>
              <h2 className="text-2xl md:text-3xl font-normal text-stone-900">Pogradec Lakeside Accommodation</h2>
              <p className="text-stone-500 italic text-sm">Serene Lake Ohrid views, fully climate-controlled interior luxury, designed for peaceful short and long stays.</p>
            </div>
            <div className="lg:col-span-5 bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-3">
              <a href={DIRECT_URL} target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 bg-stone-900 text-white text-center rounded-lg text-sm font-medium">Book Direct Instantly</a>
              <a href={`https://wa.me/${BOOKING_WHATSAPP}?text=Hi%20Gremi%20Residences,%20I'm%20inquiring%20about%20stay%20dates%20in%20Pogradec.`} className="block w-full py-2.5 bg-white border border-stone-300 text-stone-700 text-center rounded-lg text-sm font-medium">Inquire via WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-stone-200 pt-12 text-center">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">Also Fully Verified On</p>
          <div className="flex justify-center gap-8 opacity-60">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-blue-800 font-bold hover:underline">Booking.com</a>
            <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="text-rose-500 font-bold hover:underline">Airbnb</a>
          </div>
        </div>
      </main>

      {/* Embedded Mini Switch Banner */}
      <HidrosanitarePromo />
    </div>
  );
}
