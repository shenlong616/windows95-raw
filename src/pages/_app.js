import "@/styles/globals.css";
import { Provider } from "@/components/provider";
import { Font } from "@/components/font";
import { Dynamic } from "@/components/dynamic";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Dynamic.GlobalStyle.StyleReset />
      <Font.MsSansSerif>
        <Provider.React95>
          <Component {...pageProps} />
        </Provider.React95>
      </Font.MsSansSerif>
    </>
  );
}
