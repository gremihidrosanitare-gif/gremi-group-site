import Link from 'next/link';

export default function HidrosanitarePromo() {
  return (
    <div className="bg-stone-100 border-t border-stone-200 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-500 text-center sm:text-left">
          Need luxury bathroom imports, tiles, or professional air conditioning systems?
        </p>
        <Link href="/hidrosanitare" className="text-xs font-semibold text-amber-600 hover:text-amber-700 tracking-wider uppercase whitespace-nowrap">
          Switch to Gremi Hidrosanitare &rarr;
        </Link>
      </div>
    </div>
  );
}
