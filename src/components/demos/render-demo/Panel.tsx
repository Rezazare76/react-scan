import { useState } from "react";

export function Panel({
  label,
  broadcast,
}: {
  label: string;
  broadcast: number;
}) {
  const [local, setLocal] = useState(0);
  const renders = 1 + local + broadcast;

  return (
    <button
      onClick={() => setLocal((n) => n + 1)}
      className="relative flex flex-col gap-1 rounded-xl border border-zinc-800 bg-zinc-900/40 px-3.5 py-4 text-left transition hover:border-accent/50"
    >
      <span className="text-[15px] font-medium text-zinc-100">{label}</span>
      <span className="font-mono text-xs text-zinc-400">
        local {local} · shared {broadcast}
      </span>
      <span
        key={renders}
        className="absolute -top-2.5 right-2.5 animate-[pop_0.45s_ease-out] rounded-md bg-accent px-1.5 py-0.5 font-mono text-[11px] text-white"
      >
        ×{renders}
      </span>
    </button>
  );
}
