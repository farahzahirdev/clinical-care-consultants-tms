import Image from "next/image";
import Reveal from "@/components/Reveal";
import PathSteps from "@/components/PathSteps";
import { QualifyButton } from "@/components/CTAButtons";
import { BrainIcon, CheckIcon } from "@/components/Icons";
import { DEVICE_NAME, HELPS_ITEMS, TMS_IMAGE, TMS_SECTION_ID } from "@/lib/constants";

const POINTS = [
  "No medication",
  "No anesthesia or sedation",
  "Drive yourself home",
] as const;

export default function TmsSection() {
  return (
    <section id={TMS_SECTION_ID} className="section tms">
      <span className="deco-leaf deco-leaf-a" aria-hidden />
      <span className="deco-leaf deco-leaf-b" aria-hidden />

      <div className="wrap">
        <div className="tms-grid">
          <Reveal className="tms-copy from-left">
            <p className="eyebrow">What is TMS</p>
            <h2>
              A treatment that <span className="accent">works with your brain</span>, not against
              your day
            </h2>
            <p className="lead">
              Transcranial magnetic stimulation (TMS) uses gentle magnetic pulses to stimulate
              the areas of the brain involved in mood. A small coil rests against your head while
              you sit comfortably, awake the whole time.
            </p>
            <p className="tms-body">
              TMS is FDA-cleared for adults with depression that has not improved enough with
              antidepressant medication. At CCC, treatment is delivered in our Inverness office
              with the {DEVICE_NAME} TMS system, and you can drive yourself home afterward.
            </p>
            <ul className="tms-points">
              {POINTS.map((point) => (
                <li key={point}>
                  <span className="tick">
                    <CheckIcon className="icon-xs" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="tms-cta">
              <QualifyButton />
            </div>
          </Reveal>

          <Reveal className="photo-reveal tms-visual" delay={1}>
            <span className="photo-outline" aria-hidden />
            <div className="photo-frame tms-frame">
              <Image
                src={TMS_IMAGE}
                alt="The AMPA TMS system used for treatment at Clinical Care Consultants"
                fill
                quality={90}
                sizes="(max-width: 1023px) 90vw, 520px"
                className="photo-img tms-device"
              />
            </div>
            <div className="photo-badge tms-badge">
              <span className="pulse-dot" aria-hidden />
              The AMPA TMS system
            </div>
            <div className="photo-card tms-card">
              <span className="photo-card-icon">
                <BrainIcon className="icon" />
              </span>
              <span>
                <strong>Awake, seated and comfortable</strong>
                <svg className="tms-pulse" viewBox="0 0 220 28" fill="none" aria-hidden>
                  <path
                    pathLength={1}
                    d="M0 14h40l6-10 10 20 8-16 6 6h30l6-12 10 24 8-18 6 6h30l6-8 8 16 6-8h34"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Reveal>
        </div>

        <div className="helps">
          <Reveal className="helps-head">
            <p className="script helps-script">Sound familiar?</p>
            <h3 className="helps-title">TMS may be worth exploring if you recognize yourself here</h3>
          </Reveal>
          <ul className="helps-list">
            {HELPS_ITEMS.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                  <div className="helps-item">
                    <span className="helps-num">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <PathSteps />
      </div>
    </section>
  );
}
