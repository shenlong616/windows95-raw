import "./App.css";
import { Uncategorized } from "./components/Uncategorized";
import { lazy, Suspense } from "react";

const Windows95 = lazy(() => import("./components/Windows95"));

function App() {
  return (
    <>
      <Uncategorized.HeadTag />
      <Suspense fallback={<div>Loading...</div>}>
        <Windows95 />
      </Suspense>
      <Uncategorized.GitHub />
    </>
  );
}

export default App;
