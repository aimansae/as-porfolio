// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";

// const navLinks = [
//   { label: "Projects", href: "#projects" },
//   { label: "About Me", href: "#about" },
//   { label: "Blog", href: "#blog" },
//   { label: "Contact Me", href: "#contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="absolute top-0 left-0 z-50 w-full">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
//         <Link href="/" className="text-xl font-extrabold tracking-widest">
//           A.S
//         </Link>

//         <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
//           {navLinks.map((link) => (
//             <Link
//               key={link.label}
//               href={link.href}
//               className="transition hover:text-orange-400"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur"
//           aria-label="Toggle menu"
//         >
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {open && (
//         <div className="mx-4 rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur md:hidden">
//           <nav className="flex flex-col gap-4 text-sm font-medium uppercase">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className="transition hover:text-orange-400"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }