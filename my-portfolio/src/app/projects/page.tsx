"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Projects() {
  const [projectId, setProjectId] = useState("");
  const router = useRouter();

  const handleNavigate = () => {
    if (projectId.trim() !== "") {
      router.push(`/projects/${projectId}`);
    }
  };

  return (
    <div className="min-h-[200vh] text-white">
      <h1 className="text-2xl font-bold">Project List</h1>

      <div className="mt-4 space-y-2">
        <h2>
          <Link href="/projects/1" className="text-blue-500 underline">
            Project 1
          </Link>
        </h2>
        <h2>
          <Link href="/projects/2" className="text-blue-500 underline">
            Project 2
          </Link>
        </h2>
        <h2>
          <Link href="/projects/3" className="text-blue-500 underline">
            Project 3
          </Link>
        </h2>
      </div>

      {/* Input field for manual project navigation */}
      <div className="mt-6 flex gap-2">
        <input
          type="number"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          placeholder="Enter project number"
          className="p-2 border border-gray-500 rounded text-white"
        />
        <button
          onClick={handleNavigate}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700"
        >
          Go to Project
        </button>
      </div>
    </div>
  );
}
