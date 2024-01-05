import { WidgetItem } from "@/components";
import { Product, products } from "@/products/data/products";
import { ItemCard } from "@/shopping-cart/components/ItemCard";
import { cookies } from "next/headers";

export const metadata = {
   title: "Carrito de compras",
};

interface ProductInCart {
   product: Product;
   quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {
   const productsInCart: ProductInCart[] = [];

   for (const id of Object.keys(cart)) {
      const product = products.find((prod) => prod.id === id);
      if (product) {
         productsInCart.push({ product: product, quantity: cart[id] });
      }
   }

   return productsInCart;
};

export default function CartPage() {
   const cookiesStore = cookies();
   const cart = JSON.parse(cookiesStore.get("cart")?.value ?? "{}");
   const productsInCart = getProductsInCart(cart);
   const totalToPay = productsInCart.reduce(
      (prev, curr) => curr.product.price * curr.quantity + prev,
      0
   );

   return (
      <div className="text-black">
         <h1 className="text-5xl">Productos en el carrito</h1>
         <hr className="my-2" />

         <div className="flex flex-col sm:flex-row gap-2 w-full mt-10">
            <div className="flex flex-col sm:w-8/12 gap-2 w-full">
               {productsInCart.map(({ product, quantity }) => (
                  <ItemCard
                     key={product.id}
                     product={product}
                     quantity={quantity}
                  />
               ))}
            </div>
            <>
               <WidgetItem title="Total A pagar">
                  <h3 className="text-3xl font-bold">
                     ${(totalToPay * 1.15).toFixed(2)}
                  </h3>
                  <h4 className="font-bold text-center text-gray-600">
                     Tax 15% : ${(totalToPay * 0.15).toFixed(2)}
                  </h4>
               </WidgetItem>
            </>
         </div>
      </div>
   );
}
