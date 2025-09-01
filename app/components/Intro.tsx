import Link from "next/link";
import React from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";

const Intro = () => {
  return (
    <section className={`flex flex-col gap-2`}>
      <div className="md: hidden tracking-wider">
        <p className="[font-family:var(--font-roboto)] text-xs font-semibold sm:text-base">
          I design and build responsive, user-friendly web interfaces using
          modern technologies. Passionate about clean code and new learnings.
        </p>
      </div>
      {/* Tech stack */}
      <div className={`overflow-hidden`}>
        <div className="flex items-center gap-2">
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiNextdotjs className="h-4 w-4 text-white sm:h-6 sm:w-6" />
          </Link>

          <Link
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiTypescript className="h-4 w-4 text-blue-500 sm:h-6 sm:w-6" />
          </Link>

          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiTailwindcss className="h-4 w-4 text-sky-400 sm:h-6 sm:w-6" />
          </Link>
          <Link
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiReact className="h-4 w-4 text-cyan-400 sm:h-6 sm:w-6" />
          </Link>

          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiJavascript className="h-3 w-3 text-yellow-400 sm:h-5 sm:w-5" />
          </Link>

          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiHtml5 className="h-4 w-4 text-orange-500 sm:h-6 sm:w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
