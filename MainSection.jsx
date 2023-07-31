import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import Doggo from "./Doggo";

const MainSection = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/" element={<Home />} index />
        <Route path="/doggy" element={<Doggo />} />
      </Routes>
    </div>
  );
};
export default MainSection;
