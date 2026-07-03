import { useEffect, useState } from "react";
import { BTN, BTN_PRIMARY, CARD, HINT } from "../../../lib/styles";

function busyWork(iterations: number) {
  let acc = 0;
  for (let i = 0; i < iterations; i++) acc += Math.sin(i) * Math.cos(i * 0.5);
  return acc;
}

export function FpsDemo() {
  const [count, setCount] = useState(900);
  const [heavy, setHeavy] = useState(true);
  const [running, setRunning] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!running || !heavy) return;
    let raf = 0;
    const loop = () => {
      setTick((t) => t + 1);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [running, heavy]);

  return (
    <section className={CARD}>
      <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div>
          <h2 className="mb-1.5 text-[22px] font-medium text-zinc-100">
            2 · Feel the frame rate
          </h2>
          <p className="max-w-lg text-[15px] leading-relaxed text-zinc-400">
            Press <b>Start</b> in <b>heavy</b> mode: every dot re-renders
            through React each frame and the FPS meter dives. Flip to{" "}
            <b>smooth</b> — same motion, done in CSS — and it climbs back to 60.
          </p>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-4">
        <button
          onClick={() => setRunning((r) => !r)}
          className={running ? BTN : BTN_PRIMARY}
        >
          {running ? "⏹ Stop" : "▶ Start"}
        </button>

        <div className="inline-flex overflow-hidden rounded-xl border border-zinc-800">
          <button
            onClick={() => setHeavy(true)}
            className={`px-4 py-2.5 text-sm ${
              heavy ? "bg-accent text-white" : "text-zinc-500"
            }`}
          >
            Heavy (React)
          </button>
          <button
            onClick={() => setHeavy(false)}
            className={`px-4 py-2.5 text-sm ${
              !heavy ? "bg-accent text-white" : "text-zinc-500"
            }`}
          >
            Smooth (CSS)
          </button>
        </div>

        <label className="flex items-center gap-3 font-mono text-[13px] text-zinc-500">
          <span className="w-20 tabular-nums">{count} dots</span>
          <input
            type="range"
            min={100}
            max={3000}
            step={100}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-44 accent-accent"
          />
        </label>
      </div>

      <div className="flex h-56 flex-wrap content-start gap-2 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
        {Array.from({ length: count }).map((_, i) => {
          if (heavy) {
            const noise = busyWork(350 + (i % 5));
            const t = tick / 22 + i * 0.35;
            const x = Math.sin(t) * 32;
            const y = Math.cos(t * 0.9) * 32;
            const s = 1 + Math.sin(t * 2) * 0.4;
            const glow = 8 + Math.sin(t) * 6 + (noise % 1) * 0.0001;
            return (
              <span
                key={i}
                className="h-2.5 w-2.5 rounded-full bg-accent"
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${s})`,
                  boxShadow: `0 0 ${glow}px var(--color-accent)`,
                }}
              />
            );
          }
          return (
            <span
              key={i}
              className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)] animate-[wobble_1.8s_ease-in-out_infinite]"
              style={{
                animationDelay: `${(i % 40) * -0.06}s`,
                animationPlayState: running ? "running" : "paused",
              }}
            />
          );
        })}
      </div>

      <p className={HINT}>
        💡 The dots are identical — only <b>how</b> they move changes. Crank the
        count up while running <b>heavy</b> and watch the gauge (and
        react-scan’s own FPS meter) drop.
      </p>
    </section>
  );
}
