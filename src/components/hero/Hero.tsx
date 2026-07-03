import { useState } from "react";
import { Code } from "../ui/Code";
import { ScannerMock } from "./ScannerMock";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText("npm i -D react-scan").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <header className="flex flex-col items-center gap-6 text-center">
      <span className="rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-[13px] text-accent">
        ⚡ performance devtool for React
      </span>

      <h1 className="mt-1 text-5xl font-semibold tracking-tight text-zinc-50 sm:text-[68px] sm:leading-[1.02]">
        See every{" "}
        <span className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent">
          render
        </span>
        .
      </h1>

      <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
        <Code>react-scan</Code> draws an outline around a component the instant
        it re-renders.
      </p>

      <button
        onClick={copy}
        className="inline-flex items-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-800/70 px-4 py-3 font-mono text-[15px] text-zinc-100 transition hover:border-accent/50 active:translate-y-px"
      >
        <span className="text-accent">$</span> npm i -D react-scan
        <span className="ml-1 border-l border-zinc-700 pl-2.5 text-xs text-zinc-500">
          {copied ? "copied ✓" : "copy"}
        </span>
      </button>

      <ScannerMock />
    </header>
  );
}
