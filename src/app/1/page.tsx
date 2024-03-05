import Link from "next/link";

export default function Page1() {
  return (
    <div>
      Strona 1<Link href="/2">Przejdź na stronę 2</Link>
    </div>
  );
}
