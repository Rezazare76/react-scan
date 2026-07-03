import { CARD, HINT } from "../../lib/styles";
import { Code } from "../ui/Code";

export function Setup() {
  return (
    <section className={CARD}>
      <h2 className="mb-1.5 text-[22px] font-medium text-zinc-100">
        Turn it on in one place
      </h2>
      <p className="text-[15px] leading-relaxed text-zinc-400">
        Import it once, in dev only. It’s already wired up in this project’s{" "}
        <Code>main.tsx</Code>:
      </p>
      <pre className="mt-4 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
        <code className="font-mono text-sm leading-relaxed whitespace-pre text-zinc-100">{`if (import.meta.env.DEV) {
  import('react-scan').then(({ scan }) => {
    scan({ enabled: true })
  })
}`}</code>
      </pre>
      <p className={HINT}>
        👀 Run the dev server and look at the top-left toolbar — that’s
        react-scan live. Now play with the demos above.
      </p>
    </section>
  );
}
