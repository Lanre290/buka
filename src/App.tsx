import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
