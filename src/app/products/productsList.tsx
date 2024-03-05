import Link from "next/dist/client/link";

export async function ProductsList({ page }: { page: number }) {
  const take = 10;
  const offset = 10 * (page - 1);
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?offset=${offset}&take=${take}`
  );
  const products = (await res.json()) as { id: string; title: string }[];
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await wait(5000 * Math.random());

  return (
    <>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/product/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </>
  );
}
