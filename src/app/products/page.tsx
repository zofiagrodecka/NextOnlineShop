import { ProductsList } from "./productsList";

export default async function ProductsPage() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Lista produktów</h2>
      <ul>
        <ProductsList page={1} />
        <ProductsList page={2} />
      </ul>
    </div>
  );
}
