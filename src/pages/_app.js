import "@/styles/globals.css";
import { Provider } from "@/components/provider";
import { Font } from "@/components/font";
import { GlobalStyle } from "@/components/global-style";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle.StyleReset />
      <Font.MsSansSerif>
        <Provider.React95>
          <Component {...pageProps} />
        </Provider.React95>
      </Font.MsSansSerif>
    </>
  );
}
