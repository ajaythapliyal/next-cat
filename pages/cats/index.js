import Card from "@/components/Card";
import { useIsScrolledToBottom } from "@/hooks/hooks";
import { useEffect, useState } from "react";

export default function Cats({ cats }) {
  const [storedCats, setStoredCats] = useState(cats);
  const isScrolledToBottom = useIsScrolledToBottom();

  useEffect(() => {
    (async () => {
      if (isScrolledToBottom) {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=15",
          { headers: { "x-api-key": process.env.API_KEY } }
        );
        const catsResp = await response.json();
        setStoredCats([...storedCats, ...catsResp]);
      }
    })();
  }, [isScrolledToBottom]);

  return (
    <div
      id="cat-container"
      className="flex flex-wrap justify-center gap-3 my-5"
    >
      {storedCats.map((cat, index) => (
        <Card key={index} cat={cat} />
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
