import Image from "next/image";
import Link from "next/link";

export default function Card({ cat }) {
  return (
    <div className="relative h-80 w-80 rounded-lg overflow-hidden">
      <Link href={`/cats/${cat.id}`}>
        <Image
          fill={true}
          src={cat.url}
          alt="cat pic"
          style={{ objectFit: "cover" }}
        />
      </Link>
    </div>
  );
}
