import type { ReactNode } from "react";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-16 bg-[#16171d] px-5 pt-16 pb-24 sm:gap-[72px] sm:px-6">
      {children}
    </main>
  );
}
