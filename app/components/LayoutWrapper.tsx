"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
      <Navbar />

      {/* Main */}
      <main className="flex-1  ">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
