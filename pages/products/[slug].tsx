
import { useRouter } from 'next/router';
import products from '../../data/products.json';

export default function ProductDetail() {
  const router = useRouter();
  const product = products.find((p) => p.slug === router.query.slug);

  if (!product) return <p className="text-white">Ürün bulunamadı.</p>;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold text-blue-400">{product.name}</h1>
      <p className="mt-2 text-slate-300">{product.description}</p>
    </div>
  );
}
