"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import { PhoneIcon, PinIcon } from "@/components/Icons";
import {
  ADDRESS_LINES,
  FORM_HEIGHT,
  FORM_ID,
  FORM_IFRAME_ID,
  FORM_NAME,
  FORM_SECTION_ID,
  MAPS_URL,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/lib/constants";
import { mountAndBindGhlForm, unmountGhlEmbed } from "@/lib/ghlEmbed";

const FORM_MIN_HEIGHT = "900px";

const POINTS = [
  "Share a few details about you and what you've tried",
  "Our office staff reviews your answers and insurance",
  "We reach out to talk through your options",
] as const;

export default function QualifyForm() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const unbind = mountAndBindGhlForm(host, {
      id: FORM_ID,
      name: FORM_NAME,
      height: FORM_HEIGHT,
      iframeId: FORM_IFRAME_ID,
      minHeight: FORM_MIN_HEIGHT,
      borderRadius: "14px",
    });

    const iframe = host.querySelector("iframe");
    if (iframe) {
      iframe.setAttribute("data-cookie-consent", "true");
      iframe.setAttribute("data-cookie-consent-provider", "auto");
    }

    return () => {
      unbind();
      unmountGhlEmbed(host);
    };
  }, []);

  return (
    <section id={FORM_SECTION_ID} className="section qualify">
      <div className="wrap">
        <div className="embed-layout">
          <Reveal className="embed-copy from-left">
            <p className="eyebrow">Eligibility</p>
            <h2>
              Find out if you <span className="accent">Qualify</span>
            </h2>
            <p className="lead">
              TMS is generally considered for adults living with depression who have not found
              enough relief from medication. Answer a few quick questions and our team will
              follow up about eligibility and coverage.
            </p>

            <ol className="embed-steps">
              {POINTS.map((point, index) => (
                <li key={point}>
                  <span className="embed-step-num">{index + 1}</span>
                  {point}
                </li>
              ))}
            </ol>

            <p className="embed-private">Private and confidential. Takes about two minutes.</p>

            <ul className="contact-list">
              <li>
                <a href={PHONE_HREF} className="contact-item">
                  <span className="contact-icon">
                    <PhoneIcon className="icon-sm" />
                  </span>
                  <span>
                    <span className="contact-label">Prefer to talk first?</span>
                    <span className="contact-value">{PHONE_NUMBER}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="contact-item">
                  <span className="contact-icon">
                    <PinIcon className="icon-sm" />
                  </span>
                  <span>
                    <span className="contact-label">Visit us</span>
                    <span className="contact-value">{ADDRESS_LINES.join(", ")}</span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={2} className="embed-panel from-right">
            <div
              ref={hostRef}
              className="embed-host"
              style={{ minHeight: FORM_MIN_HEIGHT }}
              aria-label="Qualification form"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
