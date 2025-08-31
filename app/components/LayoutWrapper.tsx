"use client";

import { usePathname } from "next/navigation";
import Nav2 from "./Nav";
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
    <div className="container mx-auto flex min-h-screen max-w-6xl flex-col">
      <Nav2 />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
