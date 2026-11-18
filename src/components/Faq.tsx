"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { CallButton } from "@/components/CTAButtons";
import { FAQ_ITEMS, FAQ_SECTION_ID, SITE_NAME } from "@/lib/constants";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={FAQ_SECTION_ID} className="section faq">
      <div className="wrap">
        <div className="faq-layout">
          <Reveal className="faq-aside from-left">
            <p className="eyebrow">Common questions</p>
            <h2>
              Answers before you take the <span className="accent">next step</span>
            </h2>
            <p className="lead">
              Straightforward details about eligibility, what treatment feels like, and how
              coverage works.
            </p>
            <figure className="faq-photo">
              <Image
                src="/images/office.webp"
                alt={`The ${SITE_NAME} office in Inverness, Illinois`}
                fill
                quality={95}
                sizes="(max-width: 1023px) 88vw, 400px"
              />
              <figcaption>
                <span className="pulse-dot" aria-hidden />
                Our Inverness office
              </figcaption>
            </figure>
            <div className="faq-call">
              <p>Still have questions? Our office staff is happy to help.</p>
              <CallButton variant="forest" />
            </div>
          </Reveal>

          <div className="faq-list">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = open === index;
              const panelId = `faq-panel-${index}`;
              const triggerId = `faq-trigger-${index}`;

              return (
                <Reveal key={item.question} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                  <div className={`faq-item${isOpen ? " is-open" : ""}`}>
                    <h3>
                      <button
                        type="button"
                        id={triggerId}
                        className="faq-trigger"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : index)}
                      >
                        <span>{item.question}</span>
                        <span className="faq-icon" aria-hidden />
                      </button>
                    </h3>
                    <div id={panelId} role="region" aria-labelledby={triggerId} className="faq-panel">
                      <div className="faq-panel-inner">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
