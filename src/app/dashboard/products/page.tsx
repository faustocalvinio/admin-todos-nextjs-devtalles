import { ProductCard } from "@/products";
import { products } from "@/products/data/products";

export default function ProductsPage() {
   return (
      <div className="text-black grid grid-cols-1 sm:grid-cols-3 gap-2">
         {/* <h1>Hello Products Page</h1> */}
         {products.map((product) => (
            <ProductCard key={product.id} {...product} />
         ))}
         {/* <ProductCard /> */}
      </div>
   );
}
