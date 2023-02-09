import "./App.css";
import { Windows95 } from "./components/Windows95";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Uncategorized_ } from "./components/Uncategorized";

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
      <Windows95 />
      <Uncategorized_.GitHub />
    </>
  );
}

export default App;
