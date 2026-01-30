import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    window.addEventListener("resize", ScrollTrigger.refresh);

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", ScrollTrigger.refresh);
    };
  }, []);

  return <>{children}</>;
}
