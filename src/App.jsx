import "./App.css";
import { Providers_ } from "./components/Providers";
import { Windows95_ } from "./components/Windows95";
import { Controls_ } from "./components/Controls";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          {/* https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
        </Helmet>
      </HelmetProvider>
      <Providers_.React95>
        <Windows95_.Layout>
          <Windows95_.DesktopIcon />
        </Windows95_.Layout>
      </Providers_.React95>
      <Controls_.Control1 />
    </>
  );
}

export default App;
