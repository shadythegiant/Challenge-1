import { useState } from "react";
import Acoordion from "./assets/components/Acoordion";

function App() {
  const [clicked, setClicked] = useState("false");

  return <Acoordion clicked={clicked} setClicked={setClicked} />;
}

export default App;
