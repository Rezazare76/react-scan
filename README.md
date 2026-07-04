# React Scan Demo

Interactive demo for learning how to detect unnecessary React re-renders using **React Scan** and Chrome DevTools Rendering tools.

Built with **Vite**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

📖 **Read the full tutorial on Medium**
[Medium — Reza Zare](https://medium.com/@rezazare2088/how-to-detect-and-fix-react-re-renders-a0c6a1bdbb6a)

🌐 **Live Demo**
https://rezazare76.github.io/react-scan/

---

## ✨ Features

- 🔍 Detect unnecessary React re-renders
- ⚡ React Scan integration
- 🎨 Browser Paint Flashing demo
- 📊 FPS (Frame Rendering Stats) demo
- ⚛️ React vs Browser rendering comparison
- 🚀 Ready-to-use starter project

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/Rezazare76/react-scan.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser:

```
http://localhost:5173
```

---

## 📂 Project Overview

This project demonstrates two essential tools for React performance debugging.

### React Scan

React Scan automatically highlights React component re-renders while you develop.

Instead of manually adding dozens of `console.log()` statements, you instantly see:

- Which components rendered
- How often they rendered
- Potential unnecessary re-renders

---

### Chrome DevTools Rendering

The project also demonstrates Chrome's built-in Rendering panel.

Useful features include:

- 🎨 Paint Flashing
- 📊 Frame Rendering Stats (FPS)

These tools help visualize what the browser is actually repainting, making them a perfect complement to React Scan.

---

## ⚛️ React Scan Setup

Install:

```bash
npm i react-scan
```

Initialize before rendering your application:

```tsx
if (import.meta.env.DEV) {
  import("react-scan").then(({ scan }) => {
    scan({
      enabled: true,
    });
  });
}
```

For a complete Next.js setup, configuration options, and best practices, see the Medium article below.

---

## 📖 Learn More

This repository accompanies my in-depth article:

# 👉 How to Detect and Fix React Re-renders

The article covers:

- Why unnecessary re-renders happen
- React Scan setup
- Next.js App Router integration
- Browser Rendering tools
- Paint Flashing
- Frame Rendering Stats
- React Render vs Browser Paint
- Performance debugging workflow

📖 Read the full article:
[Medium — Reza Zare](https://medium.com/@rezazare2088/how-to-detect-and-fix-react-re-renders-a0c6a1bdbb6a)

---

## 🛠 Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- React Scan
- React Compiler

---

## 📚 Resources

- React Scan
  https://react-scan.com/

- React Scan (npm)
  https://www.npmjs.com/package/react-scan

- Chrome DevTools Rendering
  https://developer.chrome.com/docs/devtools/rendering

---

## 🤝 Connect

If you enjoyed this project, feel free to connect with me.

💼
[LinkedIn — Reza Zare](https://www.linkedin.com/in/rezazare76)

💻 [GitHub — Reza Zare](https://github.com/Rezazare76)

📖 [Medium — Reza Zare](https://medium.com/@rezazare2088)

---

## ⭐ Support

If this project helped you, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates me to create more open-source content.

---

## 📄 License

This project is open source and available under the MIT License.
