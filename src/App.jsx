import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Services from "./Pages/Services";
import Careers from "./Pages/Careers";
import Projects from "./Pages/Projects";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About-us" element={<Aboutus />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Careers" element={<Careers />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
