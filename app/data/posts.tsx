import Link from "next/link";
export const posts = [
  {
    id: "post1",
    title: `Dev diary: What I'm working on`,
    subtitle: [
      "A challenge from my mentor:",
      <>
        {" "}
        Building a{" "}
        <Link
          href="https://t3.chat/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-purple-300 hover:text-purple-400"
        >
          T3Chat
        </Link>{" "}
        clone using Next.js and AI (Gemini API){" "}
      </>,
      "Exploring how modern chat systems work from user prompt to AI response.",
    ],
    description: {
      intro:
        "As part of a new challenge given by my mentor, I’ve started working on a T3Chat clone to deepen my understanding of how AI-powered chat systems operate similar to how ChatGPT responds to user prompts.",
      sectionTitle: "The project involves:",
      list: [
        "Next.js for the frontend and routing",
        "Gemini API for AI-powered responses",
        "Handling user input, managing real-time chat flow, and API integration",
      ],
      outro: [
        "My goal is to stay up to date with evolving technologies and better understand how to integrate AI into web applications.",
        "I'm becoming more comfortable with working with AI APIs and aim to use this project to sharpen my skills in both frontend development and AI integration.",
      ],
    },
    closingText:
      "This project goes beyond simply recreating a chat app, it’s about laying the groundwork for what’s next. As AI continues to reshape the way we interact, I’m driven to understand and contribute to that evolution. With each line of code, I move closer to building something not just functional, but impactful and intelligent.",
    date: "2025-07-29",
  },

  {
    id: "post2",
    title: `Behind the scenes: How I built Shop Dawn Project`,
    subtitle: [
      " Building a full e-commerce site using Next.js and pushing boundaries of design, logic, and persistence",
      <>
        {" "}
        <Link
          href="https://theme-dawn-demo.myshopify.com/cart"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-purple-300 hover:text-purple-400"
        >
          Shop Dawn
        </Link>{" "}
      </>,
      "Exploring how modern chat systems work from user prompt to AI response.",
    ],
    description: {
      intro:
        "Shop dawn  was part of another challenge given by my mentor Amal K. This has been, so far, my most ambitious project and the one I’m most proud of.",
      sectionTitle: "Here's what I tackled and learned:",
      list: [
        "Started with the navigation bar. I quickly realized how important spacing is and how essential a hamburger menu is for smaller devices.",
        "Made the navbar reusable for both mobile and desktop. I had to account for different layouts while keeping the content consistent, including the cart and current location features.",
        "Implemented global cart functionality using `CartContext`, so I could access cart data across components, no matter where I was in the app.",
        "Used `CountryContext` to handle dynamic pricing and currency logic based on user location.",
        "The hero image was tricky. I had to explore Next.js's built-in `Image` component, learning how to handle ratios, sizing, and the `fill` property.",
        "Positioning content over the hero image forced me to revisit basic CSS concepts like `position`, `z-index`, and `flex layout`.",
        "Storing product data was another decision point. I created a centralized JSON file to keep things simple and reusable, worked well for local development.",
        "The product section was smooth thanks to `.map()` and structured JSON data. I kept it clean, modular, and responsive.",
        "Currency conversion was originally based on an external API, but I hit rate limits. I switched to storing currency rates in a local file and retrieving them directly, not perfect, but it works for now.",
        "For visual storytelling, I added a video using the `<video>` tag and styled it accordingly.",
        "Footer implementation was straightforward, so I focused on structure and responsiveness.",
        "The collections page was where the real challenge began. I had to figure out filtering by color, search query, and relevance,all while syncing the UI with the URL via Next.js's `useSearchParams` and `URLSearchParams`.",
        "The filtering logic was complex. I needed to rework input components to ensure they were usable and accessible on both small and medium screens.",
        "I created separate input UIs for mobile and desktop, but ensured the filtering logic stayed consistent underneath.",
        "When I started mocking the payment form, I ran into deployment issues. The email subscription and payment form didn’t work after deployment, so I switched to using MongoDB Atlas to store that data, and I'm proud to say it works now.",
      ],
      outro: [
        "This project pushed me to grow as a developer. Not just technically, but mentally. I now write better-structured code, think ahead about reusability, and know how to troubleshoot and debug without panicking.",
        "I used to feel overwhelmed when I didn’t know something. Now I pause, research, and solve it step by step. That mindset change is what I value the most from this experience.",
        "Shop Dawn reminded me that challenges aren't setbacks they’re part of the process. And every bug I solved made me a little more confident.",
      ],
    },
    closingText:
      "This project was a deep, practical journey into real-world frontend architecture. I’m proud of what I’ve built and even more excited about what I’ll create next. And it goes without saying: a special thanks to my mentor, whose advice, patience, and knowledge were truly priceless.",
    date: "2025-07-29",
  },
];
