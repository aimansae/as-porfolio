import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="container mx-auto flex h-full max-w-6xl flex-col p-4 md:p-8 lg:px-4 lg:py-8">
      {/* Roadmap */}
      <section>
        <h1>Roadmap of My Journey</h1>
        <p className="py-6 text-sm font-semibold tracking-wide text-gray-200 sm:text-base">
          Here’s a step-by-step roadmap of all the skills and concepts I’ve
          learned and practiced throughout my journey into frontend and
          fullstack development:
        </p>
        <ul className="grid gap-4 py-6 text-sm text-gray-200 sm:text-base md:grid-cols-2 md:gap-6">
          <li className="listStyle">
            {" "}
            <strong className="text-orange-500">Foundations:</strong> HTML
            (elements, forms, accessibility), CSS (box model, flexbox, grid,
            responsive design), Git & GitHub.
          </li>
          <li className="listStyle">
            <strong className="text-orange-500">JavaScript Essentials:</strong>{" "}
            variables, loops, functions, DOM manipulation, ES6+ features, async
            (<code>setTimeout</code>, <code>async/await</code>), array methods (
            <code>map</code>, <code>filter</code>, <code>reduce</code>).
          </li>
          <li className="listStyle">
            <strong className="text-orange-500">Testing & Libraries:</strong>{" "}
            Jest basics, jQuery utilities.
          </li>
          <li className="listStyle">
            <strong className="text-orange-500">Backend & Python:</strong>{" "}
            syntax, functions, OOP, control flow, deployment on Heroku.
          </li>
          <li className="listStyle">
            <strong className="text-orange-500">Advanced Frontend:</strong>{" "}
            React (components, hooks, state, props), Context API, API
            integration, React Bootstrap, Tailwind CSS.
          </li>
          <li className="listStyle">
            <strong className="text-orange-500">Fullstack Development:</strong>{" "}
            Django REST APIs, serializers, React + Django integration,
            authentication & error handling.
          </li>
          <li className="listStyle">
            <strong className="text-orange-500">Growth Mindset:</strong>{" "}
            debugging strategies, patience, collaboration, mentorship, and
            curiosity.
          </li>
          <li className="listStyle">
            <strong className="text-orange-500">What’s Next:</strong>{" "}
            TypeScript, Next.js, databases (PostgreSQL, MongoDB), testing
            frameworks, and cloud deployment (Netlify, Vercel, AWS).
          </li>
        </ul>
      </section>

      {/* Growth Moments */}

      {/* What's Next */}
      <section className="py-6">
        <h2 className="py-6 [font-family:var(--font-bungee)] text-xl tracking-wide sm:text-2xl">
          What’s Next?
        </h2>
        <p className="text-sm font-semibold tracking-wide text-gray-300 sm:text-base">
          I’m ready to join the industry as a Junior Frontend Developer,
          collaborate on real-world projects, and keep learning every day. It’s
          time to step out of my comfort zone and grow even further.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
