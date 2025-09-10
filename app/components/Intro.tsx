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
      {/* Tech stack */}
      <div className={`overflow-hidden`}>
        <div className="grid w-max grid-cols-3 gap-3 sm:grid-cols-6">
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiNextdotjs className="h-6 w-6 text-white" />
          </Link>

          <Link
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiTypescript className="h-6 w-6 text-blue-500" />
          </Link>

          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiTailwindcss className="h-6 w-6 text-sky-400" />
          </Link>
          <Link
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiReact className="h-6 w-6 text-cyan-400" />
          </Link>

          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiJavascript className="h-6 w-6 text-yellow-400 sm:h-5 sm:w-5" />
          </Link>

          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <SiHtml5 className="h-6 w-6 text-orange-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
