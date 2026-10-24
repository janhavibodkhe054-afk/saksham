
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

export default function SmoothScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
      lerp: 0.08,
      autoRaf: true,
      anchors: {
        offset: -110,
      },
    });

    window.__sakshamLenis = lenis;

    return () => {
      lenis.destroy();
      delete window.__sakshamLenis;
    };
  }, []);

  // REACT ROUTER PAGE / HASH SCROLLING
  useEffect(() => {
    let frameId;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scrollToDestination = () => {
      const lenis = window.__sakshamLenis;

      if (hash) {
        const id = decodeURIComponent(hash.slice(1));
        const target = document.getElementById(id);

        if (!target) return;

        if (lenis && !reducedMotion) {
          lenis.scrollTo(target, {
            offset: -110,
            duration: 1.2,
          });
        } else {
          target.scrollIntoView({
            behavior: "auto",
            block: "start",
          });
        }
      } else {
        if (lenis && !reducedMotion) {
          lenis.scrollTo(0, {
            immediate: true,
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: "auto",
          });
        }
      }
    };

    frameId = requestAnimationFrame(scrollToDestination);

    return () => cancelAnimationFrame(frameId);
  }, [pathname, hash]);

  return null;
}
