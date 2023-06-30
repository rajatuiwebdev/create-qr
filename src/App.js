import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Create from "./pages/Create";
import Docs from "./pages/Docs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/create" element={ <Create/>} />
        <Route path="/docs" element={ <Docs/>} />
      </Routes>     
    </div>
  );
}

export default App;