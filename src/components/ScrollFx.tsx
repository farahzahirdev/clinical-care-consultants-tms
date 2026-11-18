"use client";

import { useEffect } from "react";

/**
 * Scroll-linked effects: a reading progress bar and a `--sy` variable
 * (scroll offset in px) that drives the hero parallax.
 */
export default function ScrollFx() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = root.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      root.style.setProperty("--progress", max > 0 ? String(Math.min(y / max, 1)) : "0");
      root.style.setProperty("--sy", String(Math.min(y, 1200)));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden />;
}
