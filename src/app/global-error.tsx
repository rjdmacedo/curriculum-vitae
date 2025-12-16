"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google"; // Match layout font
import "./globals.css"; // Ensure styles are loaded

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">Something went wrong!</h2>
            <p className="text-muted-foreground">
              A critical error occurred. The error has been logged.
            </p>
          </div>
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </body>
    </html>
  );
}
