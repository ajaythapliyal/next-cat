import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/normalize.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-tertiary min-h-screen">
      <Header></Header>
      <Component {...pageProps} />
    </div>
  );
}
