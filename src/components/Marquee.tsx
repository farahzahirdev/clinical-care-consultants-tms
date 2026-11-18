import { MARQUEE_ITEMS } from "@/lib/constants";

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <ul key={group} className="marquee-group">
            {MARQUEE_ITEMS.map((item) => (
              <li key={item}>
                <span className="marquee-leaf" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
