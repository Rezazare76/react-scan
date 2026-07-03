export function ScannerMock() {
  const node =
    "relative rounded-lg bg-zinc-800/60 p-3 text-[13px] text-zinc-200 outline outline-2 -outline-offset-2 outline-transparent";
  const badge =
    "absolute -top-2.5 left-2 rounded bg-accent px-1.5 py-0.5 font-mono text-[10px] text-white";

  return (
    <div
      aria-hidden
      className="mt-3 w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-md"
    >
      <div className="flex items-center gap-1.5 border-b border-zinc-800 px-3.5 py-2.5">
        <i className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <i className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <i className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="ml-2.5 font-mono text-xs text-zinc-500">my-app</span>
      </div>

      <div className="relative grid h-[190px] grid-cols-3 gap-3 p-4">
        <div
          className={`col-span-3 ${node} animate-[flash_2.4s_ease-in-out_infinite]`}
        >
          <span
            className={`${badge} animate-[flash-label_2.4s_ease-in-out_infinite]`}
          >
            ×3
          </span>
          Navbar
        </div>
        <div
          className={`${node} animate-[flash_3.1s_ease-in-out_infinite_0.4s]`}
        >
          <span
            className={`${badge} animate-[flash-label_3.1s_ease-in-out_infinite_0.4s]`}
          >
            ×1
          </span>
          Sidebar
        </div>
        <div
          className={`col-span-2 ${node} animate-[flash_1.3s_ease-in-out_infinite_0.2s]`}
        >
          <span
            className={`${badge} animate-[flash-label_1.3s_ease-in-out_infinite_0.2s]`}
          >
            ×24
          </span>
          Feed
        </div>
        <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 animate-[sweep_3s_linear_infinite] bg-linear-to-r from-transparent via-accent to-transparent" />
      </div>
    </div>
  );
}
