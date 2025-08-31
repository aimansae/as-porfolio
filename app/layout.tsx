import type { Metadata } from "next";
import { Poppins, Bungee, Roboto } from "next/font/google";
import "../app/globals.css";
import LayoutWrapper from "./components/LayoutWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungee",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-roboto",
});
export const metadata: Metadata = {
  title: "Aiman's Portfolio | Junior Frontend Developer",
  description:
    "Explore my portfolio showcasing projects built with Next.js, TypeScript, and Tailwind CSS. Passionate about clean UI, responsive design, and modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} ${bungee.variable} ${roboto.variable} flex min-h-screen flex-col bg-black text-slate-50 antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
