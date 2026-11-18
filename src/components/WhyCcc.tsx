import Image from "next/image";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { CallButton, QualifyButton } from "@/components/CTAButtons";
import { HeartIcon, LeafIcon, ShieldIcon, SparkIcon } from "@/components/Icons";
import { TAGLINE, WHY_IMAGE, WHY_ITEMS, WHY_SECTION_ID, WHY_STATS } from "@/lib/constants";

const ICONS = {
  shield: ShieldIcon,
  spark: SparkIcon,
  heart: HeartIcon,
  leaf: LeafIcon,
} as const;

type Delay = 1 | 2 | 3 | 4;

export default function WhyCcc() {
  return (
    <section id={WHY_SECTION_ID} className="section care">
      <span className="care-glow" aria-hidden />

      <div className="wrap">
        <Reveal className="care-head">
          <p className="eyebrow">Why CCC</p>
          <h2>
            Where <span className="accent">care, compassion and expertise</span> come together
          </h2>
          <p className="lead">
            Starting something new can feel daunting. At Clinical Care Consultants you are cared
            for by seasoned clinicians and a staff that makes the whole process feel human.
          </p>
        </Reveal>

        <div className="care-bento">
          <Reveal className="care-tile care-photo zoom">
            <Image
              src={WHY_IMAGE}
              alt="A hand placing the final puzzle piece over the words Self Discovery"
              fill
              quality={90}
              sizes="(max-width: 1023px) 92vw, 500px"
              className="care-photo-img"
            />
            <span className="care-photo-badge">
              <span className="pulse-dot" aria-hidden />
              Now welcoming new clients
            </span>
          </Reveal>

          <Reveal className="care-tile care-quote zoom" delay={1}>
            <LeafIcon className="care-quote-leaf" />
            <span className="care-quote-script">{TAGLINE}</span>
            <p>
              We believe every client is capable and deserving of being satisfied, fulfilled and
              happy.
            </p>
          </Reveal>

          {WHY_STATS.map((stat, index) => (
            <Reveal
              key={stat.label}
              className="care-tile care-stat"
              delay={(index + 1) as Delay}
            >
              <span className="care-stat-num">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="care-stat-label">{stat.label}</span>
            </Reveal>
          ))}

          {WHY_ITEMS.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal
                key={item.title}
                className="care-tile care-feature"
                delay={(index + 1) as Delay}
              >
                <span className="care-feature-top">
                  <span className="care-feature-icon">
                    <Icon className="icon" />
                  </span>
                  <span className="care-feature-num" aria-hidden>
                    0{index + 1}
                  </span>
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="care-actions">
            <QualifyButton />
            <CallButton variant="forest" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
