import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/normalize.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  );
}
