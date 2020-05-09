import "../styles/global.scss";
import { useEffect } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log("wtf");

    const AOS = require("aos");
    AOS.init({
      offset: 0,
      duration: 1700,
      easing: "outexpo",
      delay: 200,
    });

    if (AOS) {
      AOS.refresh();
    }
  }, []);
  return <Component {...pageProps} />;
}
