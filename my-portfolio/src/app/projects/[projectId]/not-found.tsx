"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const projectId = pathname.split("/")[2];
  return (
    <div>
      <h1>Details not found for Project-{projectId}</h1>
    </div>
  );
}
