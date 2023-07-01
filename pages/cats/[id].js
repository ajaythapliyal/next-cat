import Card from "@/components/Card";

export default function Cat({ cat }) {
  return (
    <div className="flex justify-center items-center mt-12">
      <Card cat={cat}></Card>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/${params.id}`,
    { headers: { "x-api-key": process.env.API_KEY } }
  );
  const cat = await response.json();
  return {
    props: {
      cat,
    },
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}
