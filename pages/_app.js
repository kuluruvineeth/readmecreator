import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import NextNProgress from "nextjs-progressbar";
import { green } from "tailwindcss/colors.js";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress color={green[500]} height={4} />
      <Component {...pageProps} />;
    </>
  );
};

export default appWithTranslation(App);
