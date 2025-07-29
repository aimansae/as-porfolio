import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="min-h-screen text-base flex flex-col gap-y-10 p-8 pb-20 sm:p-20 bg-gradient-to-br text-white container mx-auto">
      <header>
        <h1 className="text-4xl font-bold text-purple-300">About Me</h1>
      </header>

      <section className="space-y-4">
        <p>
          My journey into frontend development began in 2022 when I enrolled in
          a Full Stack Development course with the{" "}
          <a
            href="https://codeinstitute.net/global/"
            className="text-red-400 underline"
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

      <article className="space-y-4">
        <header>
          <a
            href="https://aimansae.github.io/p1-getfit-gym/"
            className="text-2xl rounded-md bg-primary-500/20 text-purple-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GetFit Gym Website
          </a>
        </header>
        <p>
          My very first project required me to build a live site using only HTML
          and CSS. I created GetFit Gym Website, which helped me become familiar
          with these key concepts:
        </p>
        <ul className="p-2 grid lg:grid-cols-2  gap-4 list-disc list-inside">
          <li>
            <a
              className="font-semibold"
              href="https://www.w3schools.com/html/html_intro.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML
            </a>{" "}
            fundamentals like elements, attributes, forms, accessibility (ARIA),
            metadata, responsiveness, and the HTTP model.
          </li>
          <li>
            <a
              className="font-semibold"
              href="https://www.w3schools.com/css/css_intro.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS
            </a>{" "}
            basics: selectors, box model, inheritance, responsiveness, dev
            tools.
          </li>
          <li>
            Clear documentation through{" "}
            <a
              className="font-semibold"
              href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Readme.md
            </a>
          </li>
          <li>
            Introduction to version control using Git and GitHub: cloning,
            commits, branching.
          </li>
        </ul>
        <div>
          <Link
            href="https://github.com/aimansae/p1-getfit-gym"
            className="inline-block rounded-md  px-2 py-2 mt-2 bg-primary-500/20 text-purple-200 border border-purple-500/30 hover:border-purple-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </Link>
        </div>
      </article>

      <article className="space-y-4">
        <header>
          <a
            href="https://aimansae.github.io/p2-trivia-quiz/"
            className="text-2xl rounded-md bg-primary-500/20 text-purple-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            JS Trivia Quiz
          </a>{" "}
        </header>
        <p>
          This beginner project helped me understand JavaScript logic including
          variables, loops, conditionals, arrays, and DOM manipulation.
        </p>
        <ul className="p-2 grid lg:grid-cols-2  gap-4 list-disc list-inside">
          <li>
            JS fundamentals: let, const, if/else, loops, DOM, event handling
          </li>
          <li>
            Advanced topics: arrow functions, spread operator, map/filter/reduce
          </li>
          <li>jQuery basics and testing with Jest</li>
        </ul>
        <div>
          <Link
            href="https://github.com/aimansae/p2-trivia-quiz"
            className="inline-block rounded-md px-2 py-2 mt-2 bg-primary-500/20 text-purple-200 border border-purple-500/30 hover:border-purple-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </Link>
        </div>
      </article>

      <article className="space-y-4">
        <header>
          <a
            href="https://github.com/aimansae/p3-tic-tac-toe?tab=readme-ov-file"
            className="text-2xl font-semibold"
          >
            Tic Tac Toe (Python) - Live Site temporarily N/A
          </a>
        </header>
        <p>
          Built using Python and deployed on Heroku, this game introduced me to
          syntax, OOP, and control flow.
        </p>
        <ul className="p-2 grid lg:grid-cols-2  gap-4 list-disc list-inside">
          <li>
            Python syntax, OOP principles, functions, loops, error handling
          </li>
          <li>Heroku and deployment concepts </li>
        </ul>
        <div>
          <Link
            href="https://github.com/aimansae/p3-tic-tac-toe?tab=readme-ov-file"
            className="inline-block rounded-md px-2 py-2 mt-2 bg-primary-500/20 text-purple-200 border border-purple-500/30 hover:border-purple-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </Link>
        </div>
      </article>

      <article className="space-y-4">
        <header>
          <a
            href="https://github.com/aimansae/p3-tic-tac-toe?tab=readme-ov-file"
            className="text-2xl font-semibold"
          >
            Django REST + React Final Project - Live Site temporarily N/A
          </a>
        </header>
        <p>
          My most challenging and rewarding build. Combined Django REST for the
          backend and React for the UI.
        </p>
        <ul className="p-2 grid lg:grid-cols-2  gap-4 list-disc list-inside">
          <li>React component architecture, hooks, state handling</li>
          <li>Event logic, API integration, and error handling</li>
          <li>React Bootstrap UI and Context API</li>
        </ul>
        <Link
          href="https://github.com/aimansae/reviewme"
          className="inline-block rounded-md px-2 py-2 mt-2 bg-primary-500/20 text-purple-200 border border-purple-500/30 hover:border-purple-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </Link>
      </article>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold"> My Growth Moments</h2>
        <p>
          There were many times I felt completely stuck,days spent debugging
          only to wake up with the solution. These challenges taught me
          patience, the value of breaks, and the importance of curiosity.
        </p>
        <ul className="p-2 grid lg:grid-cols-2  gap-4 list-disc list-inside">
          <li>
            I now build responsive apps, understand full-stack logic, and debug
            with confidence.
          </li>
          <li>
            I’ve embraced not knowing everything choosing growth over fear,
            thanks to encouragement from my mentor Amal K.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What’s Next?</h2>
        <p>
          I &apos;m ready to join the industry as a Junior Frontend Developer,
          collaborate in real-world projects, and keep learning every day. It’s
          time to step out of my comfort zone and grow even further.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
