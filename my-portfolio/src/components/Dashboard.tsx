"use client";

import { useTheme } from "next-themes";

export default function Dashboard() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          Toggle Dark Mode
        </button>
      </div>
    </main>
  );
}
