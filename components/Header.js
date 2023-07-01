import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-primary">
      <Link href={"/cats"}>
        <p className="text-3xl text-accent py-2 ml-2">Cats</p>
      </Link>
    </div>
  );
}
