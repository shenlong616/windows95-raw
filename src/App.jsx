import "./App.css";
import { Uncategorized_ } from "./components/Uncategorized";
import React, { Suspense } from "react";

const Windows95 = React.lazy(() => import("./components/Windows95"));

function App() {
  return (
    <>
      <Uncategorized_.HeadTag />
      <Suspense fallback={<div>Loading...</div>}>
        <Windows95 />
      </Suspense>
      <Uncategorized_.GitHub />
    </>
  );
}

export default App;
