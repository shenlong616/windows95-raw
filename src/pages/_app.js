import "@/styles/globals.css";
import { Provider } from "@/components/provider";
import Head from "next/head";
import { GitHub } from "@/github";
import { Font } from "@/components/font";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          // https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Provider.React95>
        <Font.MsSansSerif>
          <Component {...pageProps} />
        </Font.MsSansSerif>
      </Provider.React95>
      <GitHub url="https://github.com/shenlong616/windows95-raw" />
    </>
  );
}
