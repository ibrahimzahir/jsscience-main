import "../styles/index.css";
import "tailwindcss/tailwind.css";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
