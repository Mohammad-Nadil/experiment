import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Physics2DPlugin, ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import StackCard from "./page/StackCard.jsx";
import SmoothParallax from "./page/SmoothParallax.jsx";
import MountainParallax from "./page/MountainParallax.jsx";
import Mask from "./page/Mask.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText, Physics2DPlugin);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/running" element={<MountainParallax />} />
      <Route path="/parallax" element={<SmoothParallax />} />
      <Route path="/stackcard" element={<StackCard />} />
      <Route path="/mask" element={<Mask />} />
    </Routes>
  </BrowserRouter>
);
