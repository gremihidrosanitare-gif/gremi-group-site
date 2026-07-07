import Link from 'next/link';
import ResidencesPromo from '../components/ResidencesPromo';

export default function HidrosanitareShowroom() {
  const WHATSAPP_NUMBER = "355692089444";
  const BUSINESS_EMAIL = "gremihidrosanitare@gmail.com";
  
  const categories = [
    {
      title: "Luxury Sanitary Wear",
      description: "Premium toilets, minimalist sinks, standalone bathtubs, and designer mixers.",
      msg: "Hi Gremi Hidrosanitare, I want to see live stock photos of your current Sanitary Wear collection."
    },
    {
      title: "Advanced Climate Control",
      description: "High-efficiency air conditioning systems, multi-splits, and custom HVAC configurations.",
      msg: "Hi Gremi Hidrosanitare, I am looking for details and pricing on your available AC units."
    },
    {
      title: "Designer Tiles & Surfaces",
      description: "Large-format porcelain tiles, luxury marble finishes, and modern bathroom ceramics.",
      msg: "Hi Gremi Hidrosanitare, can you send over current pictures of your stock porcelain tiles?"
    },
    {
      title: "Modern Bathroom Furniture",
      description: "Moisture-resistant vanities, backlit LED mirrors, and smart bathroom storage.",
      msg: "Hi Gremi Hidrosanitare, I'd like to check sizes and availability for bathroom vanities."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between">
      <header className="border-b border-slate-800 backdrop-blur-md sticky top-0 z-50 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider text-white">
            GREMI <span className="text-sky-400 font-light">HIDROSANITARE</span>
          </Link>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Gremi%20Hidrosanitare,%20I%20have%20a%20showroom%20inquiry.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs md:text-sm px-5 py-2.5 rounded-full transition-all flex items-center gap-2"
          >
            🟢 Live Stock WhatsApp Chat
          </a>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
          Premium Showroom, <span className="font-semibold text-sky-400">Live Inventory</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Because our luxury imports update daily, we skip static catalogs. Tap any category below to instantly request real-time stock photos, dimensions, and wholesale pricing straight from our sales desk.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between transition-all hover:border-sky-500/30 hover:bg-slate-800">
              <div>
                <h3 className="text-xl md:text-2xl font-medium text-white mb-3">{cat.title}</h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">{cat.description}</p>
              </div>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(cat.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-slate-700/50 hover:bg-sky-500 text-white font-medium text-sm rounded-xl tracking-wide transition-all border border-slate-700"
              >
                Request Live Photos & Prices
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-sky-950 to-slate-900 border border-sky-900/40 p-8 rounded-2xl md:flex items-center justify-between">
          <div>
            <h4 className="text-lg font-medium text-white mb-1">Architect, Contractor or B2B Buyer?</h4>
            <p className="text-slate-400 text-sm">Send your project layouts or bill of quantities directly via email for rapid wholesale pricing.</p>
          </div>
          <a href={`mailto:${BUSINESS_EMAIL}?subject=B2B%20Quote%20Request`} className="inline-block bg-white text-slate-900 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-slate-200 mt-4 md:mt-0">
            Email Project Specs
          </a>
        </div>
      </section>

      {/* Embedded Mini Switch Banner */}
      <ResidencesPromo />
    </div>
  );
}
