"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { STEPS } from "@/lib/constants";

/** Vertical timeline: the rail fills and each step lights up as it scrolls past. */
export default function PathSteps() {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.62;
      const rect = list.getBoundingClientRect();
      const progress = Math.min(Math.max((line - rect.top) / rect.height, 0), 1);
      list.style.setProperty("--p", progress.toFixed(4));

      let count = 0;
      list.querySelectorAll<HTMLElement>(".path-num").forEach((num) => {
        const box = num.getBoundingClientRect();
        if (box.top + box.height / 2 <= line) count += 1;
      });
      setActive(count);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="path">
      <div className="path-side">
        <p className="path-title">
          <span className="script">Your path</span> from first call to first session
        </p>
        <figure className="path-photo">
          <Image
            src="/images/growth.webp"
            alt="Hands gently planting a young green seedling"
            fill
            quality={95}
            sizes="(max-width: 1023px) 88vw, 460px"
          />
          <figcaption>A Place to Grow</figcaption>
        </figure>
      </div>

      <ol ref={listRef} className="path-list">
        {STEPS.map((step, index) => (
          <li key={step.title} className={`path-step${index < active ? " is-active" : ""}`}>
            <span className="path-num">{index + 1}</span>
            <div className="path-card">
              <span className="path-kicker">Step {index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
