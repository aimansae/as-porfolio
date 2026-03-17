// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import { SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript } from "react-icons/si";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen bg-black text-white">
//       {/* Background glow */}
    
//       <div className="relative mx-auto grid min-h-screen max-w-7xl items-center px-6 pt-28 pb-12 md:grid-cols-2 md:px-10 md:pt-24">
//         {/* LEFT CONTENT */}
//         <div className="z-20 order-2 mt-[-5rem] md:order-1 md:mt-0 md:max-w-xl">
//           <p className="mb-3 text-lg text-white/75 md:text-2xl">
//             Hi, I&apos;m <span className="font-bold text-white">Aiman</span>👋
//           </p>

//           <h1 className="max-w-md text-5xl font-extrabold leading-tight md:text-7xl">
//             Junior Frontend Developer
//           </h1>

//           <p className="mt-5 max-w-md text-base leading-7 text-white/75 md:text-xl">
//             I build accessible, responsive web apps with React &amp; Next.js
//           </p>

//           <div className="mt-6 flex items-center gap-3">
//             <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/80">
//               <SiNextdotjs size={22} />
//             </div>
//             <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-blue-400">
//               <SiTypescript size={22} />
//             </div>
//             <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-cyan-400">
//               <SiTailwindcss size={22} />
//             </div>
//             <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-yellow-400">
//               <SiJavascript size={22} />
//             </div>
//           </div>

//           <div className="mt-8">
//             <button className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-700 to-orange-500 px-6 py-4 text-lg font-bold shadow-[0_0_30px_rgba(255,115,0,0.35)] transition hover:scale-[1.02]">
//               View Projects
//               <ArrowRight className="transition group-hover:translate-x-1" />
//             </button>
//           </div>

//           <div className="mt-8 hidden items-center gap-4 md:flex">
//             <a href="#" className="text-white/80 hover:text-orange-400">
//               <FaGithub size={22} />
//             </a>
//             <a href="#" className="text-white/80 hover:text-orange-400">
//               <FaLinkedin size={22} />
//             </a>
//             <a href="#" className="text-white/80 hover:text-orange-400">
//               <FaEnvelope size={22} />
//             </a>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative order-1 flex items-center justify-center md:order-2">
//           <div className="relative h-[520px] w-[320px] sm:h-[620px] sm:w-[380px] md:h-[720px] md:w-[500px]">
//             <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-3xl" />
//             <Image
//               src="/assets/backgroundImg.png"
//               alt="Portrait"
//               fill
//               priority
//               className="object-contain drop-shadow-[0_0_40px_rgba(255,120,0,0.35)]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }