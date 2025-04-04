// app/projects/[projectId]/page.tsx
"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";

export default function ProjectDetail({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;
  const searchParams = useSearchParams();

  const lang = searchParams.get("lang") || "en";
  const theme = searchParams.get("theme") || "light";

  if (parseInt(projectId) > 1000) {
    notFound();
  }

  return (
    <div
      className={`min-h-[200vh] ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="mb-3">Project Detail Page #{projectId}</h2>
      <p>Language selected: {lang}</p>
      <p>Theme: {theme}</p>

      <div className="space-x-2 mt-4 mb-4">
        {/* Links with query strings */}
        <Link
          href={`/projects/${projectId}?lang=en&theme=light`}
          className="underline text-blue-500"
        >
          English / Light
        </Link>
        <Link
          href={`/projects/${projectId}?lang=es&theme=dark`}
          className="underline text-blue-500"
        >
          Spanish / Dark
        </Link>
        <Link
          href={`/projects/${projectId}?lang=fr&theme=light`}
          className="underline text-blue-500"
        >
          French / Light
        </Link>
      </div>

      <Link
        href={`/projects/${projectId}/reviews`}
        className="inline mt-6 text-white bg-blue-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500 hover:scale-105 hover:underline border-2 border-white"
      >
        All Reviews
      </Link>
    </div>
  );
}
