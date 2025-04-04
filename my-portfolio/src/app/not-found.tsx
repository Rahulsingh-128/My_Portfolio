"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 0); // Redirect after 3 seconds
  }, [router]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-lg opacity-75">
        Redirecting you to the homepage...
      </p>
    </div>
  );
}
