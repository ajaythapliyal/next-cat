import Image from "next/image";

export default function Card({ cat }) {
  return (
    <div className="relative h-80 w-80 rounded-lg overflow-hidden">
      <Image
        fill={true}
        src={cat.url}
        alt="cat pic"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
