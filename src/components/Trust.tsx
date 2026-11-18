import Reveal from "@/components/Reveal";
import { CardIcon, DoorIcon, PinIcon, PulseIcon } from "@/components/Icons";
import { SERVICE_AREAS, TRUST_ITEMS } from "@/lib/constants";

const ICONS = {
  pin: PinIcon,
  card: CardIcon,
  door: DoorIcon,
  pulse: PulseIcon,
} as const;

export default function Trust() {
  return (
    <section className="section trust">
      <span className="deco-leaf deco-leaf-c" aria-hidden />
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Close to home</p>
          <h2>
            A local team that makes <span className="accent">getting started easier</span>
          </h2>
          <p className="lead">
            Beginning treatment can bring up worry. Our friendly office staff softens that first
            step and has all the right answers.
          </p>
        </Reveal>

        <ul className="trust-grid">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.title}>
                <Reveal delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                  <div className="trust-card">
                    <span className="trust-icon">
                      <Icon className="icon" />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="areas zoom">
          <p className="areas-label">Proudly serving</p>
          <ul className="areas-list">
            {SERVICE_AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
