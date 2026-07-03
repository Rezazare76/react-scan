const FEATURES = [
  {
    icon: "▣",
    title: "Outlines renders",
    body: "Every re-render is boxed in real time, left on top of your UI.",
  },
  {
    icon: "×n",
    title: "Counts them",
    body: "A label shows how many times each component rendered. Big numbers = trouble.",
  },
  {
    icon: "fps",
    title: "Tracks FPS",
    body: "A live meter reveals the exact moment your app starts dropping frames.",
  },
];

export function HowItWorks() {
  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {FEATURES.map((f) => (
        <div
          key={f.title}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5"
        >
          <span className="mb-3.5 inline-flex h-10 min-w-10 items-center justify-center rounded-xl bg-accent/10 px-2.5 font-mono text-[15px] text-accent">
            {f.icon}
          </span>
          <h3 className="mb-1.5 text-[17px] font-medium text-zinc-100">
            {f.title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400">{f.body}</p>
        </div>
      ))}
    </section>
  );
}
