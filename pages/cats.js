import Card from "@/components/Card";

export default function Cats({ cats }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-5">
      {cats.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=30",
    { headers: { "x-api-key": process.env.API_KEY } }
  );
  const cats = await response.json();
  return {
    props: {
      cats,
    },
  };
}
