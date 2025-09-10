"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // If the route starts with /admin, skip Nav and Footer
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <div className="flex min-h-dvh flex-col">
      {/* Header */}
      <Nav />
      {/* Main */}
      <main className="container mx-auto flex w-full max-w-6xl flex-1 justify-center">
        {children}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
