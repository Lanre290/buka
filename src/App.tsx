import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import RestaurantProfile from "./Pages/restaurantProfile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/restaurant" element={<RestaurantProfile />} />
    </Routes>
  );
}
