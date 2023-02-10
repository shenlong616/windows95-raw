import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Uncategorized_ } from "./components/Uncategorized";
import React, { Suspense } from "react";

const Windows95 = React.lazy(() => import("./components/Windows95"));

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

      <Suspense fallback={<div>Loading...</div>}>
        <Windows95 />
      </Suspense>
      <Uncategorized_.GitHub />
    </>
  );
}

export default App;
