"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const projectId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      <h1>
        Review {reviewId} not found for Project Id {projectId}
      </h1>
    </div>
  );
}
