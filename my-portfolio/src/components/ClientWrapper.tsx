"use client";

import { usePathname } from "next/navigation";

export function ClientWrapper({
  hero,
  grid,
}: {
  hero: React.ReactNode;
  grid: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && (
        <>
          {hero}
          {grid}
        </>
      )}
    </>
  );
}
