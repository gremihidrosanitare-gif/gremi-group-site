import Link from 'next/link';

export default function ResidencesPromo() {
  return (
    <div className="bg-slate-950 border-t border-slate-800 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400 text-center sm:text-left">
          Planning a premium vacation? Explore our curated beachfront and lakeside holiday stays.
        </p>
        <Link href="/residences" className="text-xs font-semibold text-sky-400 hover:text-sky-300 tracking-wider uppercase whitespace-nowrap">
          Switch to Gremi Residences &rarr;
        </Link>
      </div>
    </div>
  );
}
