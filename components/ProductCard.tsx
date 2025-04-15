
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-slate-800 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer">
        <h2 className="text-lg font-semibold text-blue-300">{product.name}</h2>
        <p className="text-sm text-slate-400 mt-1">{product.shortDescription}</p>
      </div>
    </Link>
  );
}
