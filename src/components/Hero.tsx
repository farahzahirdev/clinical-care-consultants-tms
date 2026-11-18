import Image from "next/image";
import { CallButton, QualifyButton } from "@/components/CTAButtons";
import Marquee from "@/components/Marquee";
import {
  CheckIcon,
  HeartIcon,
  LeafIcon,
  PinIcon,
  PulseIcon,
  ShieldIcon,
  SparkIcon,
} from "@/components/Icons";
import { HERO_IMAGE, HERO_IMAGE_ALT, TAGLINE, TMS_FACTS } from "@/lib/constants";

const PROOF = ["No medication", "No sedation or downtime", "Insurance assistance"] as const;

const STRIP_ICONS = [LeafIcon, ShieldIcon, SparkIcon, PinIcon] as const;

export default function Hero() {
  return (
    <>
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <span className="hero-glow" aria-hidden />
      <span className="hero-leafshape" aria-hidden />

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="hero-pill rise rise-1">
            <span className="pulse-dot" aria-hidden />
            <PinIcon className="icon-xs" />
            Inverness, IL · Serving the northwest suburbs
          </p>

          <h1 id="hero-heading" className="hero-title">
            <span className="hero-line rise rise-2">When depression</span>{" "}
            <span className="hero-line rise rise-3">won&apos;t lift, there&apos;s a</span>{" "}
            <span className="hero-line rise rise-4">
              <span className="hero-mark">
                gentler way
                <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden>
                  <path
                    pathLength={1}
                    d="M4 13 C 60 3, 120 17, 176 9 S 262 5, 296 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              forward.
            </span>
          </h1>

          <p className="hero-lede rise rise-5">
            TMS therapy is a non-invasive treatment option for adults who haven&apos;t found
            enough relief from medication or therapy alone. It is offered here by licensed,
            experienced clinicians who truly care.
          </p>

          <div className="hero-actions rise rise-6">
            <QualifyButton className="btn-glow" />
            <CallButton variant="forest" />
          </div>

          <ul className="hero-proof rise rise-7">
            {PROOF.map((item) => (
              <li key={item}>
                <span className="tick">
                  <CheckIcon className="icon-xs" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <span className="hero-outline" aria-hidden />
          <div className="hero-frame">
            <Image
              src={HERO_IMAGE}
              alt={HERO_IMAGE_ALT}
              fill
              priority
              quality={95}
              sizes="(max-width: 1023px) 86vw, 480px"
              className="hero-pic"
            />
          </div>

          <div className="hero-card hero-card-a" aria-hidden>
            <span className="hero-card-num">19</span>
            <span className="hero-card-text">
              years in the field,
              <br />
              on average, per clinician
            </span>
          </div>

          <div className="hero-card hero-card-b" aria-hidden>
            <span className="hero-card-icon">
              <PulseIcon className="icon-sm" />
            </span>
            <span className="hero-card-text">
              <strong>Non-invasive TMS</strong>
              Awake and comfortable
              <svg className="hero-wave" viewBox="0 0 160 28" fill="none">
                <path
                  pathLength={1}
                  d="M0 14h26l6-10 10 20 8-16 6 6h20l6-12 10 24 8-18 6 6h54"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <div className="hero-card hero-card-c" aria-hidden>
            <span className="hero-card-icon hero-card-icon-soft">
              <HeartIcon className="icon-sm" />
            </span>
            <span className="hero-card-script">{TAGLINE}</span>
          </div>
        </div>
      </div>

      <div className="wrap hero-strip-wrap">
        <ul className="hero-strip rise rise-8">
          {TMS_FACTS.map((item, index) => {
            const Icon = STRIP_ICONS[index];
            return (
              <li key={item.value} className="hero-strip-item">
                <span className="hero-strip-icon">
                  <Icon className="icon-sm" />
                </span>
                <span>
                  <span className="hero-strip-value">{item.value}</span>
                  <span className="hero-strip-label">{item.label}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Soft curve into the marquee strip that closes the hero */}
      <div className="hero-base">
      <svg className="hero-curve" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="curve-leaf" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#4a7f1f" />
            <stop offset="30%" stopColor="#a8db7c" />
            <stop offset="55%" stopColor="#79c040" />
            <stop offset="80%" stopColor="#c5e8a4" />
            <stop offset="100%" stopColor="#4a7f1f" />
          </linearGradient>
        </defs>
        <path d="M0 64V34C240 6 480 0 720 10s480 34 720 24v30H0Z" fill="#3c7218" />
        <g className="curve-draw" fill="none" stroke="url(#curve-leaf)">
          <path
            d="M0 26C240 -2 480 -8 720 2s480 34 720 24"
            strokeOpacity="0.55"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M0 34C240 6 480 0 720 10s480 34 720 24"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>
      <Marquee />
      </div>
    </section>
    </>
  );
}
