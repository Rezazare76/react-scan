import { FOOTER_LINK } from "../../lib/styles";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 sm:flex-row sm:justify-between">
      <span>
        Built by <span className="font-medium text-zinc-200">Reza Zare</span> to
        pair with the article ✦
      </span>
      <nav className="flex items-center gap-5">
        <a
          className={FOOTER_LINK}
          href="https://github.com/Rezazare76/react-scan"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
        <a
          className={FOOTER_LINK}
          href="https://www.linkedin.com/in/rezazare76"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        <a
          className={FOOTER_LINK}
          href="https://medium.com/@rezazare2088/how-to-detect-and-fix-react-re-renders-a0c6a1bdbb6a"
          target="_blank"
          rel="noreferrer"
        >
          Medium ↗
        </a>
      </nav>
    </footer>
  );
}
