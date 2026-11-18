import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CallButton, QualifyButton } from "@/components/CTAButtons";
import { PhoneIcon, PinIcon } from "@/components/Icons";
import {
  ADDRESS_LINES,
  ADDRESS_NOTE,
  FINAL_IMAGE,
  MAPS_EMBED_URL,
  MAPS_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE_NAME,
  TAGLINE,
  VISIT_SECTION_ID,
} from "@/lib/constants";

export default function FinalCta() {
  return (
    <section className="section final">
      <div className="wrap">
        <Reveal className="zoom">
          <div className="final-split">
            <div className="final-copy">
              <p className="script final-script">{TAGLINE}</p>
              <h2>Relief may be closer than it feels today</h2>
              <p className="lead">
                Take two minutes to see whether TMS could be right for you, or call and talk with
                our welcoming office staff.
              </p>
              <div className="final-actions">
                <QualifyButton className="btn-glow" />
                <CallButton variant="forest" />
              </div>
            </div>
            <div className="final-media">
              <span className="final-media-outline" aria-hidden />
              <div className="final-media-frame">
              <Image
                src={FINAL_IMAGE}
                alt="A woman with her arms raised, smiling in the sea breeze"
                fill
                quality={90}
                sizes="(max-width: 899px) 92vw, 600px"
              />
              </div>
            </div>
          </div>
        </Reveal>

        <div id={VISIT_SECTION_ID} className="visit-grid">
          <Reveal className="visit-info from-left">
            <p className="eyebrow">Visit us</p>
            <h3>{SITE_NAME}</h3>
            <ul className="visit-list">
              <li>
                <span className="contact-icon">
                  <PinIcon className="icon-sm" />
                </span>
                <span>
                  <span className="contact-label">Office</span>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="visit-link">
                    {ADDRESS_LINES[0]}
                    <br />
                    {ADDRESS_LINES[1]}
                  </a>
                  <span className="visit-note">{ADDRESS_NOTE}</span>
                </span>
              </li>
              <li>
                <span className="contact-icon">
                  <PhoneIcon className="icon-sm" />
                </span>
                <span>
                  <span className="contact-label">Phone</span>
                  <a href={PHONE_HREF} className="visit-link">
                    {PHONE_NUMBER}
                  </a>
                </span>
              </li>
            </ul>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Get directions
            </a>
          </Reveal>

          <Reveal delay={1} className="visit-map from-right">
            <iframe
              src={MAPS_EMBED_URL}
              title={`Map to ${SITE_NAME}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
