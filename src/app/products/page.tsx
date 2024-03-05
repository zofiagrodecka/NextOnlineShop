import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsList } from "./productsList";

export const metadata: Metadata = {
  title: "Products",
};

export default async function ProductsPage() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Lista produktów</h2>

      <ul>
        <Suspense>
          <ProductsList page={1} />
        </Suspense>
        <Suspense>
          <ProductsList page={2} />
        </Suspense>
      </ul>
    </div>
  );
}
