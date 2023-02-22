import "./App.css";
import { Uncategorized } from "./components/Uncategorized";
import { lazy, Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Windows95 = lazy(() => import("./components/Windows95"));

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta
            // https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
        </Helmet>
      </HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Windows95 />
      </Suspense>
      <Uncategorized.GitHub url="https://github.com/shenlong616/windows95-raw" />
    </>
  );
}

export default App;
