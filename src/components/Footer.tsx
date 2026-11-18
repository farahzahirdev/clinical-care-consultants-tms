import Image from "next/image";
import {
  ADDRESS_LINES,
  FAQ_SECTION_ID,
  FORM_SECTION_ID,
  LOGO_URL,
  MAPS_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE_NAME,
  TMS_SECTION_ID,
  WEBSITE_LABEL,
  WEBSITE_URL,
  WHY_SECTION_ID,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Image
              src={LOGO_URL}
              alt={`${SITE_NAME}, Counselors Who Care`}
              width={226}
              height={204}
              unoptimized
              className="footer-logo"
            />
            <p className="footer-about">
              Counseling, psychiatry, and TMS therapy in Inverness, IL, with telehealth available
              to Illinois residents.
            </p>
          </div>

          <div>
            <p className="footer-label">Explore</p>
            <ul className="footer-list">
              <li>
                <a href={`#${TMS_SECTION_ID}`}>What is TMS</a>
              </li>
              <li>
                <a href={`#${WHY_SECTION_ID}`}>Why CCC</a>
              </li>
              <li>
                <a href={`#${FAQ_SECTION_ID}`}>FAQ</a>
              </li>
              <li>
                <a href={`#${FORM_SECTION_ID}`}>Find out if you Qualify</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-label">Contact</p>
            <ul className="footer-list">
              <li>
                <a href={PHONE_HREF}>{PHONE_NUMBER}</a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  {ADDRESS_LINES[0]}
                  <br />
                  {ADDRESS_LINES[1]}
                </a>
              </li>
              <li>
                <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer">
                  {WEBSITE_LABEL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer-disclaimer">
          This page is for general information and is not medical advice. TMS is not right for
          everyone, and individual results vary. A clinical evaluation is required to determine
          eligibility. Insurance coverage depends on your plan and is not guaranteed. If you are
          in crisis or thinking about harming yourself, call or text 988 or go to your nearest
          emergency room.
        </p>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </span>
          <span>Inverness · Palatine · Schaumburg · Hoffman Estates · Rolling Meadows</span>
        </div>
      </div>
    </footer>
  );
}
