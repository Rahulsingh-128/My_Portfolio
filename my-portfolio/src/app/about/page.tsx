"use client";

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div className="min-h-[200vh] overflow-y-auto p-5">
      <h2 className="text-white text-2xl">About Me Page</h2>

      {/* Navigation Button */}
      <button
        onClick={() => router.push("/")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Go to Dashboard
      </button>
    </div>
  );
}
