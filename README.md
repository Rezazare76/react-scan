# react-scan-vite

📖 Read this article on Medium: 👉 [How to Detect and Fix React Re-renders](https://medium.com/@rezazare2088/how-to-detect-and-fix-react-re-renders-a0c6a1bdbb6a)

Interactive demo and starter project for learning how to detect and fix React re-renders with **React Scan** and Chrome DevTools rendering tools.

Built with **Vite**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## Project Setup

Before you dive in, get the project running locally:

```bash
git clone https://github.com/Rezazare76/react-scan-vite.git
cd react-scan-vite
npm install
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`). React Scan is already wired up — look for the toolbar in the top-left corner.

| Resource                   | Link                                                                                   |
| -------------------------- | -------------------------------------------------------------------------------------- |
| This repository            | [github.com/Rezazare76/react-scan-vite](https://github.com/Rezazare76/react-scan-vite) |
| React Scan (npm)           | [npmjs.com/package/react-scan](https://www.npmjs.com/package/react-scan)               |
| React Scan (official site) | [react-scan.com](https://react-scan.com)                                               |
| Live demo (Next.js)        | [react-scan-nextjs-demo.vercel.app](https://react-scan-nextjs-demo.vercel.app)         |

---

## Why This Matters

React performance issues rarely appear on day one.

Your application works. Everything feels smooth. You keep shipping new features. Then, one day…

- Opening a menu feels sluggish.
- Typing inside an input lags.
- Scrolling becomes less responsive.
- A simple state update causes dozens of components to re-render.

At this point, finding the source of the problem can be surprisingly difficult.

Most developers start by adding `console.log()` inside components:

```tsx
function Sidebar() {
  console.log("Sidebar rendered");
  return ...
}
```

Then they interact with the UI and count how many times the message appears. It works… but once your application grows, this approach quickly becomes tedious and unreliable.

Fortunately, there are much better tools. This project and the [Medium article](https://medium.com/@rezazare2088/how-to-detect-and-fix-react-re-renders-a0c6a1bdbb6a) cover two of them:

- **React Scan** — React component re-renders
- **Chrome DevTools Rendering Panel** — browser rendering & painting

Together, they provide a much clearer picture of what's happening inside your application.

---

## What's Inside This Demo

| Section         | What it shows                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------- |
| **Render demo** | Click one panel → one re-render. Hit "Re-render all" → every panel flashes at once.             |
| **FPS demo**    | Compare **Heavy (React)** vs **Smooth (CSS)** animation. Same dots, very different frame rates. |
| **Setup**       | How React Scan is initialized in this Vite project.                                             |

---

## Part 1 — React Scan

React Scan is a lightweight development tool that automatically detects unnecessary React re-renders. Instead of manually placing logs everywhere, it visually highlights components whenever they render.

### Installation

```bash
npm i react-scan
```

### Setup (Vite / CRA)

Import React Scan **before** importing `react-dom`:

```tsx
// main.tsx (Vite / CRA)

if (import.meta.env.DEV) {
  import("react-scan").then(({ scan }) => {
    scan({
      enabled: true,
    });
  });
}

// ... render your app
```

In this repo, see [`src/main.tsx`](src/main.tsx) for the live setup.

### Setup (Next.js App Router)

Create a client component that initializes React Scan:

```tsx
// app/react-scan-init.tsx
"use client";

if (process.env.NODE_ENV === "development") {
  import("react-scan").then(({ scan }) => {
    scan({ enabled: true });
  });
}

export default function ReactScanInit() {
  return null;
}
```

Include it in your root layout:

```tsx
// app/layout.tsx
import ReactScanInit from "./react-scan-init";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ReactScanInit />
        {children}
      </body>
    </html>
  );
}
```

That's it. No configuration. No wrappers. No DevTools extension. Start your application and React Scan immediately begins monitoring component renders.

### Why It's Useful

Instead of guessing which components render — or adding dozens of `console.log()` statements — React Scan instantly shows:

- Which components render
- How often they render
- Which re-renders are unnecessary
- Where rendering hotspots occur

You can catch performance issues while you're building features instead of discovering them after deployment.

---

## Part 2 — Browser Rendering Tools

React renders are only one piece of the puzzle. Sometimes the slowdown isn't caused by React itself. It may come from:

- CSS animations
- Layout recalculations
- Paint operations
- GPU compositing
- Expensive visual effects

For these cases, Chrome DevTools provides an excellent built-in rendering debugger.

Open DevTools and press **Ctrl + Shift + P** (or **Cmd + Shift + P** on macOS), then search for **Show Rendering**. This opens the Rendering panel.

### Paint Flashing

Enable **Paint Flashing**. Chrome highlights every part of the page that gets repainted — hover effects, CSS transitions, shadow updates, background color changes, and more. It's an excellent way to understand how expensive your visual updates actually are.

### Frame Rendering Stats

Enable **Frame Rendering Stats** to see real-time rendering statistics, including FPS. If your application drops below a stable frame rate during interactions, you'll notice it immediately. Especially useful when testing large lists, complex animations, drag & drop, heavy dashboards, and canvas applications.

Try the **FPS demo** in this project alongside Chrome's Frame Rendering Stats to see the difference between React-driven and CSS-driven animation.

---

## React Scan vs Browser Rendering

Although both tools visualize rendering activity, they operate at different stages of the rendering pipeline.

| Tool               | What it monitors                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **React Scan**     | React's **render phase** — highlights components whenever they re-render, even if that render never results in a visible update on screen. |
| **Paint Flashing** | The browser's **paint phase** — shows only the areas that are actually repainted on screen.                                                |

A React render does not always lead to a browser paint. React first renders components into the Virtual DOM. During the commit phase, it decides whether any changes need to be applied to the real DOM. If those changes don't affect the visual output, the browser has nothing to repaint.

In other words:

- **React Scan** answers: _"Which React components rendered?"_
- **Paint Flashing** answers: _"Which pixels were actually repainted?"_

Using both tools together gives you a much clearer understanding of where performance issues originate — whether they're caused by unnecessary React renders or by expensive browser rendering work.

---

## Why You Should Start Early

Performance problems usually don't appear all at once. They accumulate gradually. A component that re-renders unnecessarily today might not be noticeable. Months later, after dozens of new features, that same component could trigger hundreds of renders whenever a user opens a menu or types into an input.

By profiling your application from the beginning, these issues become much easier to catch — and much cheaper to fix.

Performance isn't just about optimization before release. It's a habit that should be part of your development workflow from day one.

---

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the development server        |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview the production build        |
| `npm run lint`    | Run ESLint                          |

---

## Tech Stack

- [Vite](https://vite.dev/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Scan](https://react-scan.com/)
- [React Compiler](https://react.dev/learn/react-compiler) (enabled via Babel)

---

## Let's Connect

If you'd like to check out more projects or connect:

- [LinkedIn — Reza Zare](https://www.linkedin.com/in/rezazare76)
- [GitHub — Reza Zare](https://github.com/Rezazare76)

---

## License

This project is open source and available for learning and experimentation.
