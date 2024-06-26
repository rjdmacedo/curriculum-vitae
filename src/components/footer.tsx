"use client";

export function Footer() {
  const buildNumber = process.env.NEXT_PUBLIC_BUILD_NUMBER;

  if (!buildNumber) {
    return null;
  }

  return (
    <footer className="my-2 text-center text-xs text-muted-foreground">
      <p>build: {process.env.NEXT_PUBLIC_BUILD_NUMBER}</p>
    </footer>
  );
}
