import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="container mx-auto flex max-w-6xl flex-col space-y-8 py-4">
      {/* Header */}
      <header>
        <h1 className="[font-family:var(--font-bungee)] text-xl tracking-wide sm:text-2xl md:text-3xl">
          My Journey
        </h1>
      </header>

      {/* Intro */}
      <section className="space-y-4 leading-relaxed">
        <p>
          My journey into frontend development began in 2022 when I enrolled in
          a Full Stack Development course with{" "}
          <a
            href="https://codeinstitute.net/global/"
            className="text-[#da5824] underline transition hover:text-orange-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code Institute
          </a>
          .
        </p>
        <p>
          With no prior experience in tech, I was initially unfamiliar with even
          the most basic concepts like the CSS box model, but I was determined
          to learn and grow.
        </p>
      </section>

      {/* Projects */}
      {[
        {
          title: "GetFit Gym Website",
          url: "https://aimansae.github.io/p1-getfit-gym/",
          repo: "https://github.com/aimansae/p1-getfit-gym",
          desc: "My very first project required me to build a live site using only HTML and CSS. I created GetFit Gym Website, which helped me become familiar with these key concepts:",
          points: [
            "HTML fundamentals: elements, attributes, forms, accessibility (ARIA), metadata, responsiveness.",
            "CSS basics: selectors, box model, inheritance, dev tools.",
            "Clear documentation via Readme.md",
            "Intro to Git/GitHub: cloning, commits, branching.",
          ],
        },
        {
          title: "JS Trivia Quiz",
          url: "https://aimansae.github.io/p2-trivia-quiz/",
          repo: "https://github.com/aimansae/p2-trivia-quiz",
          desc: "This beginner project helped me understand JavaScript logic including variables, loops, conditionals, arrays, and DOM manipulation.",
          points: [
            "JS fundamentals: let, const, if/else, loops, DOM, events.",
            "Advanced: arrow functions, spread, map/filter/reduce.",
            "jQuery basics & testing with Jest.",
          ],
        },
        {
          title: "Tic Tac Toe (Python) – Live Site N/A",
          url: null,
          repo: "https://github.com/aimansae/p3-tic-tac-toe",
          desc: "Built using Python and deployed on Heroku, this game introduced me to syntax, OOP, and control flow.",
          points: [
            "Python syntax, OOP principles, functions, loops.",
            "Heroku deployment basics.",
          ],
        },
        {
          title: "Django REST + React Final Project (Live Site N/A)",
          url: null,
          repo: "https://github.com/aimansae/reviewme",
          desc: "My most challenging and rewarding build. Combined Django REST for the backend and React for the UI.",
          points: [
            "React components, hooks, state handling.",
            "API integration & error handling.",
            "React Bootstrap UI and Context API.",
          ],
        },
      ].map((proj, i) => (
        <article
          key={i}
          className="space-y-4 border-l-4 border-orange-500 pl-4"
        >
          <header>
            {proj.url ? (
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="[font-family:var(--font-bungee)] text-xl text-[#da5824] hover:underline sm:text-2xl"
              >
                {proj.title}
              </a>
            ) : (
              <h2 className="[font-family:var(--font-bungee)] text-xl text-[#da5824] sm:text-2xl">
                {proj.title}
              </h2>
            )}
          </header>
          <p>{proj.desc}</p>
          <ul className="grid list-inside list-disc gap-3 p-2 text-sm sm:text-base md:grid-cols-2">
            {proj.points.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
          <Link
            href={proj.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-[#bc4414] px-4 py-2 text-sm text-white shadow-md transition hover:bg-[#993209] sm:text-base"
          >
            GitHub Repository
          </Link>
        </article>
      ))}

      {/* Growth Moments */}
      <section className="space-y-4">
        <h2 className="[font-family:var(--font-bungee)] text-xl sm:text-2xl md:text-3xl">
          My Growth Moments
        </h2>
        <p>
          Many times I felt completely stuck, days debugging only to wake up
          with the solution. These challenges taught me patience, the value of
          breaks, and the importance of curiosity.
        </p>
        <ul className="grid list-inside list-disc gap-3 p-2 md:grid-cols-2">
          <li>Now I build responsive apps and debug with confidence.</li>
          <li>
            I’ve embraced not knowing everything choosing growth over fear,
            thanks to my mentor Amal K.
          </li>
        </ul>
      </section>

      {/* What's Next */}
      <section className="space-y-4">
        <h2 className="[font-family:var(--font-bungee)] text-xl sm:text-2xl md:text-3xl">
          What’s Next?
        </h2>
        <p>
          I’m ready to join the industry as a Junior Frontend Developer,
          collaborate on real-world projects, and keep learning every day. It’s
          time to step out of my comfort zone and grow even further.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
