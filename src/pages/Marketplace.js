import RootLayout from '@/app/layout'
import ProductCard from '@/components/ProductCard'

export default function Marketplace() {
  return (
    <div className="bg-white text-black h-100 w-screen">
      <h1 className="text-2xl font-bold">Marketplace</h1>
      <div className="w-9/12 grid m-auto gap-8 md:gap-2 md:grid-cols-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}
