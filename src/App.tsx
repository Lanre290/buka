import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
