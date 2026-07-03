import type { ReactNode } from "react";

export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-zinc-800/70 px-1.5 py-0.5 font-mono text-[0.9em] text-zinc-100">
      {children}
    </code>
  );
}
