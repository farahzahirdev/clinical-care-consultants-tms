"use client";

import { useEffect, useState } from "react";
import { PhoneIcon } from "@/components/Icons";
import { FORM_SECTION_ID, PHONE_HREF } from "@/lib/constants";

/** Sticky call + qualify bar for small screens. Appears after the hero. */
export default function MobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`mobile-bar${visible ? " is-visible" : ""}`}>
      <a href={PHONE_HREF} className="mobile-bar-call" tabIndex={visible ? 0 : -1}>
        <PhoneIcon className="icon-sm" />
        Call
      </a>
      <a href={`#${FORM_SECTION_ID}`} className="mobile-bar-qualify" tabIndex={visible ? 0 : -1}>
        Find out if you Qualify
      </a>
    </div>
  );
}
