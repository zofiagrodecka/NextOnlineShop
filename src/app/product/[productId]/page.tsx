export default async function SingleProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const res = await fetch(
    "https://naszsklep-api.vercel.app/api/products/" + params.productId
  );
  const product = (await res.json()) as { title: string; description: string };

  return (
    <main className="mx-auto max-w-xl">
      <h1 className="mb-4 text-3xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
    </main>
  );
}
