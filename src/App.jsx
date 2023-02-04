import "./App.css";
import { Providers_ } from "./components/Providers";
import { Windows95_ } from "./components/Windows95";
import { Controls_ } from "./components/Controls";

function App() {
  return (
    <>
      <Providers_.React95>
        <Windows95_.Layout>
          <Windows95_.IconList />
        </Windows95_.Layout>
      </Providers_.React95>
      <Controls_.Control1 />
    </>
  );
}

export default App;
