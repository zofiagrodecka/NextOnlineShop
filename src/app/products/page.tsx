export default async function ProductsPage() {
  const res = await fetch("https://naszsklep-api.vercel.app/api/products");
  const products = (await res.json()) as { id: string; title: string }[];

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
