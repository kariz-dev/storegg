import "../styles/utilities.css";
import "../styles/homepage.css";
import "../styles/detail.css";
import "../styles/checkout.css";
import "../styles/complete-checkout.css";
import "../styles/sign-in.css";
import "../styles/sign-up.css";
import "../styles/sign-up-photo.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />;
}
