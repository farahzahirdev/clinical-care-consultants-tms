"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CallButton, QualifyButton } from "@/components/CTAButtons";
import { PhoneIcon } from "@/components/Icons";
import {
  FAQ_SECTION_ID,
  LOGO_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE_NAME,
  TMS_SECTION_ID,
  VISIT_SECTION_ID,
  WHY_SECTION_ID,
} from "@/lib/constants";

const NAV = [
  { href: `#${TMS_SECTION_ID}`, label: "What is TMS" },
  { href: `#${WHY_SECTION_ID}`, label: "Why CCC" },
  { href: `#${FAQ_SECTION_ID}`, label: "FAQ" },
  { href: `#${VISIT_SECTION_ID}`, label: "Visit" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", menuOpen);
    return () => document.documentElement.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
    {menuOpen ? (
      <button
        type="button"
        className="mobile-nav-backdrop"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={close}
      />
    ) : null}
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-open" : ""}`}>
      <div className="wrap site-header-bar">
        <a href="#top" className="brand" aria-label={SITE_NAME} onClick={close}>
          <Image
            src={LOGO_URL}
            alt={`${SITE_NAME}, Counselors Who Care`}
            width={226}
            height={204}
            priority
            unoptimized
            className="brand-logo"
          />
        </a>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="site-nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          <a href={PHONE_HREF} className="site-phone" aria-label={`Call ${PHONE_NUMBER}`}>
            <span className="site-phone-icon">
              <PhoneIcon className="icon-sm" />
            </span>
            <span className="site-phone-text">
              <span className="site-phone-label">Call us</span>
              <span className="site-phone-number">{PHONE_NUMBER}</span>
            </span>
          </a>
          <QualifyButton arrow={false} className="site-header-cta" />
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span className="menu-toggle-bars" aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-nav" className="mobile-nav" hidden={!menuOpen}>
        <nav className="wrap mobile-nav-inner" aria-label="Mobile">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="mobile-nav-link" onClick={close}>
              {item.label}
            </a>
          ))}
          <div className="mobile-nav-actions" onClick={close}>
            <QualifyButton />
            <CallButton variant="forest" />
          </div>
        </nav>
      </div>
    </header>
    </>
  );
}
