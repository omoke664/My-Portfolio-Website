import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold text-[#4CAF50] mb-4">404</h1>
      <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="btn-primary">Go Home</Link>
    </div>
  );
} 