import { useState } from "react";
import { BTN_PRIMARY, CARD, HINT } from "../../../lib/styles";
import { Panel } from "./Panel";

const PANELS = ["Navbar", "Sidebar", "Profile", "Feed", "Chart", "Footer"];

export function RenderDemo() {
  const [broadcast, setBroadcast] = useState(0);

  return (
    <section className={CARD}>
      <div className="mb-5 flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div>
          <h2 className="mb-1.5 text-[22px] font-medium text-zinc-100">
            1 · Watch a re-render happen
          </h2>
          <p className="max-w-lg text-[15px] leading-relaxed text-zinc-400">
            Click a single panel and only <em>that</em> box lights up. Hit
            “Re-render all” and every panel flashes at once
          </p>
        </div>
        <button
          className={`${BTN_PRIMARY} shrink-0`}
          onClick={() => setBroadcast((b) => b + 1)}
        >
          Re-render all →
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {PANELS.map((label) => (
          <Panel key={label} label={label} broadcast={broadcast} />
        ))}
      </div>

      <p className={HINT}>
        💡 One panel updates its <b>own</b> state → one render. The shared value
        touches <b>all</b> panels → six renders.
      </p>
    </section>
  );
}
