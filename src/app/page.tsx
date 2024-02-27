const products = [
  { id: 1, name: "Product 1", price: "$10" },
  { id: 2, name: "Product 2", price: "$20" },
  { id: 3, name: "Product 3", price: "$30" },
  { id: 4, name: "Product 4", price: "$40" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div data-testid="products-list">
        <h1>Products List</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
