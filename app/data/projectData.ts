import { ProjectType } from "@/app/types";
export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Shop Dawn",
    githubRepo: "https://github.com/aimansae/dawn-ecommerce",
    deployedSite: "https://dawn-ecommerce.vercel.app/",
    description: `An elegant e-commerce experience built to rival top storefronts — inspired by Shopify’s Dawn theme, optimized for modern users.`,
    fullDescription: `Shop Dawn is a responsive e-commerce application built using Next.js App Router, TypeScript, Tailwind CSS, and MongoDB Atlas.  
It features dynamic filtering, real-time search, and full cart functionality with form submission and DB storage.  
Built as part of a mentor challenge, it simulates a real-world e-commerce experience with SSR and API routing.  
Includes custom hooks, secure environment handling, and responsive UI.  
Proudly hosted on Vercel with unit testing via Jest and React Testing Library.`,
    image: "/assets/shop-dawn.jpg",
    imageMobile: "/assets/shop-dawn-phone.jpg",
    tag: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    techStack: [
      "Next.js App Router",
      "TypeScript for strict typing",
      "Tailwind CSS for UI styling",
      "MongoDB Atlas for data storage",
      "Form handling with server actions",
      "Vercel for deployment",
      "Jest + React Testing Library for unit testing",
    ],
  },
  {
    id: 2,
    title: "Job Funnel",
    githubRepo: "https://github.com/aimansae/jobFunnel",
    deployedSite: "https://job-funnel.vercel.app/",
    description:
      "A responsive job application tracker with smart filters, built to improve UX and state management in real-world scenarios.",
    fullDescription: `Job Funnel is a dynamic job tracking dashboard that lets users filter listings by category, status, and country.  
It features collapsible filters, URL-syncing, mobile-first design, and a custom filtering hook.  
Built as part of a mentor challenge, it helped explore deep React concepts like controlled components and state-URL sync.  
This project emphasizes testable architecture, accessibility, and reusable components.  
Unit-tested with Jest and React Testing Library, and built with Next.js App Router.`,
    image: "/assets/job-funnel.jpg",
    imageMobile: "/assets/job-funnel-mobile.jpg",
    tag: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    techStack: [
      "React for UI development",
      "Next.js App Router for routing and server/client integration",
      "Tailwind CSS for responsive styling",
      "TypeScript for type safety",
      "Jest + React Testing Library for unit testing",
      "Custom hooks (`useSearchAndFilterParams`) for filter logic",
      "URL query state syncing for filters",
      "Accordion-style filter panels",
      "Mobile-first and accessible UI",
    ],
  },
  {
    id: 3,
    title: "Weather App",
    githubRepo: "https://github.com/aimansae/weather-app",
    deployedSite: "https://weather-app-sigma-cyan-99.vercel.app/",
    description:
      "A real-time weather tracker with city search, geolocation, and shareable URLs built for speed, clarity, and UX.",
    fullDescription: `Weather App delivers real-time forecasts using OpenWeather API with a clean, mobile-first UI.  
It supports geolocation, dynamic city search, skeleton loading states, and SSR via Next.js App Router.  
A custom search param logic lets users share live weather queries via URL.  
The app uses modular components and suspense boundaries for performance.  
Built as part of a learning challenge with scalable and testable architecture.`,
    image: "/assets/weather-app.jpg",
    imageMobile: "/assets/weather-app-mobile.jpg",

    tag: ["NextJs", "TailwindCSS", "Typescript", "OpenWeather API"],
    techStack: [
      "Next.js App Router for server/client rendering",
      "TypeScript for safer component logic",
      "Tailwind CSS for responsive styling",
      "OpenWeatherMap API for real-time data",
      "Geolocation API for location-based results",
      "React.Suspense + Skeletons for loading states",
      "useSearchParams for city-based URL filtering",
      "Reusable components with prop-based design",
      "Set() for unique city suggestions",
    ],
  },
  {
    id: 4,
    title: "Blog - Kinde Auth",
    githubRepo: "https://github.com/aimansae/next-js-kinde",
    deployedSite: "https://next-js-kinde.vercel.app/",
    description:
      "A secure blog platform with full-stack authentication, server actions, and permission-based content, powered by Kinde and Prisma.",
    fullDescription: `This full-stack blog app features Kinde Auth, server-side data handling, and conditional UI logic.  
Users can create, edit, and delete posts, all protected by proper session validation and ownership checks.  
Built with Prisma + PostgreSQL, the app demonstrates secure server actions, SSR, and a modular component system.  
React Suspense is used for loading states to boost UX.  
Designed for both developers and users with scalable, testable logic.`,
    image: "/assets/kinde-blog.jpg",
    imageMobile: "/assets/kinde-blog-mobile.jpg",
    tag: ["Next.js", "Kinde Auth", "Prisma", "Tailwind CSS"],
    techStack: [
      "Next.js App Router (v14)",
      "Kinde Auth for OAuth authentication",
      "Prisma ORM with PostgreSQL",
      "TypeScript for safer logic",
      "Tailwind CSS for styling",
      "Protected routes for authenticated actions",
      "Server Actions for post creation and validation",
      "Conditional rendering and UI permissions",
      "Secure API route for post deletion with authorization",
      "React Suspense for smooth loading experience",
    ],
  },
  {
    id: 5,
    title: "GameHub",
    githubRepo: "https://github.com/aimansae/gamehub",
    deployedSite: "https://game-hub-nine-ashy.vercel.app/",
    description:
      "A modern game discovery hub powered by the RAWG API, search, filter, and browse your next favorite game with ease.",
    fullDescription: `GameHub is a sleek, responsive gaming app built with React, TypeScript, and Chakra UI.  
It lets users explore games by genre, platform, and search queries all powered by the RAWG API.  
Custom hooks, infinite scroll, dark mode, and abortable Axios requests enhance performance and UX.  
Developed as part of the Code with Mosh series, this project sharpened my core React skills.  
Deployed on Vercel for fast and scalable access.`,
    image: "/assets/gamehub.jpg",
    imageMobile: "/assets/gamehub-mobile.jpg",
    tag: ["React", "TypeScript", "Chakra UI", "RAWG API"],
    techStack: [
      "React for interactive UI building",
      "TypeScript for strong typing and maintainability",
      "Vite for fast development setup",
      "Chakra UI for component styling and dark mode support",
      "Axios with AbortController for safe API requests",
      "RAWG API for real-time game data",
      "Custom generic hooks (useData) for reusability",
      "Search functionality using `useRef` and controlled components",
      "Responsive grid layout with loading skeletons",
      "Vercel for deployment",
    ],
  },
  {
    id: 6,
    title: "Anime App",
    githubRepo: "https://github.com/aimansae/anime",
    deployedSite:
      "https://anime-blue.vercel.app/?vercelToolbarCode=uUq8TXi4-wjm1RG",
    description:
      "An animated, responsive anime browser with infinite scroll, server actions, and clean UI, built to explore, learn, and scale.",

    fullDescription: `Anime App is a stylish and responsive web app for browsing anime, powered by the Shikimori API.  
Built with Next.js App Router and Server Actions, it offers infinite scroll, smooth animations, and clean grid-based layouts.  
Images load responsively with hover effects, and Framer Motion adds subtle staggered transitions.  
The layout balances client-server logic for performance and SEO.  
Deployed on Vercel and built as part of a JavaScript Mastery challenge.`,
    image: "/assets/anime-app.jpg",
    imageMobile: "/assets/anime-app-mobile.jpg",
    tag: ["Next.js", "TypeScript", "Tailwind CSS", "Shikimori API"],
    techStack: [
      "Next.js App Router for full-stack routing",
      "Server Actions to fetch and revalidate anime data",
      "Tailwind CSS for responsive grid-based design",
      "TypeScript for safe and scalable development",
      "Shikimori Anime API for live data",
      "Infinite scroll with IntersectionObserver",
      "Framer Motion for staggered card animations",
      "Responsive image grids using aspect-square and fill",
      "Hydration fix via server/client layout separation",
      "Deployed with Vercel for optimal performance",
    ],
  },
  {
    id: 7,
    title: "React Modal",
    githubRepo: "https://github.com/aimansae/as-modal",
    deployedSite: "https://as-modal.netlify.app/",
    description: "Reusable modal component.",
    fullDescription: `This reusable modal leverages React Portals for clean layering and proper DOM placement.  
It supports closing via button, ESC key, or overlay click, and is styled using Tailwind CSS.  
`,
    image: "/assets/modal.jpg",
    imageMobile: "/assets/openModal.pNG",

    tag: ["React", "TypeScript", "Tailwind CSS", "Portal"],
    techStack: [
      "React for UI logic and state management",
      "TypeScript for strict typing and safety",
      "Tailwind CSS for responsive and utility-first styling",
      "React Portals for rendering outside the component tree",
      "UserEvent for simulating user interactions in tests",
      "Overlay + ESC key + outside click close support",
      "Proper z-index handling and fixed positioning",
    ],
  },
  {
    id: 8,
    title: "E-commerce Cart",
    githubRepo: "https://github.com/aimansae/e-commerce-cart",
    deployedSite: "https://e-commerce-cart-lac.vercel.app/",
    description:
      "A responsive product display and cart logic demo with quantity controls, discount calculation, and pagination.",
    fullDescription: `This project simulates an e-commerce shopping flow with product listings, dynamic pricing, and a functional cart.  
Users can update quantities, calculate discounts, and preview pricing in real-time.  
Pagination, responsive design, and keyboard-accessible counters improve usability.  
Cart state is managed across components via lifted state and props.  
Built with Next.js, TypeScript, and Tailwind CSS, and deployed on Vercel.`,
    image: "/assets/ecommerce-cart.jpg",
    imageMobile: "/assets/ecommerce-cart-mobile.jpg",
    tag: ["Next.js", "TypeScript", "Tailwind CSS"],
    techStack: [
      "Next.js (App Router)",
      "TypeScript for typed state and props",
      "Tailwind CSS for responsive layout",
      "Dynamic cart logic using React state and props",
      "Quantity counter with accessibility support",
      "Discount calculation logic per product",
      "Pagination using URL params (work-in-progress)",
      "Shared state management across components",
      "Next/Image for image optimization",
      "Vercel for deployment",
      "Inspired by Frontend Mentor design",
    ],
  },
  {
    id: 9,
    title: "Product Cart",
    githubRepo: "https://github.com/aimansae/shoppingCart",
    deployedSite: "https://shopping-cart-one-tau.vercel.app/",
    description:
      "A clean and responsive shopping cart with dynamic totals, item controls, and a modal-based checkout confirmation.",

    fullDescription: `Product Cart simulates a real-world cart experience with add/remove items, live total calculation, and responsive layout.  
Users can adjust item quantities, view cart summary, and confirm orders with a modal popup.  
Cart logic is managed via React state and optimized with object-based structures.  
Flex and grid layouts adapt the UI across devices for a smooth shopping experience.  
Built with Next.js and deployed on Vercel, this project sharpens component and state management skills.`,
    image: "/assets/product-cart.jpg",
    imageMobile: "/assets/product-cart-mobile.jpg",

    tag: ["React", "CSS", "Local Storage"],
    techStack: [
      "React + Next.js for component-based structure and routing",
      "TypeScript for type-safe cart operations",
      "Tailwind CSS for mobile-first responsive design",
      "Cart state management using object-based mapping with useState",
      "Dynamic total calculation using reduce()",
      "Quantity controls with validation (no negative counts)",
      "Modal confirmation on order placement using conditional rendering",
      "Resetting state on checkout for UX flow",
      "Responsive layout using Flexbox + Grid",
      "Planned: LocalStorage, API integration, filtering, testing, pagination",
    ],
  },
  {
    id: 10,
    title: "Markdown Editor",
    githubRepo: "https://github.com/aimansae/as-markdown-editor",
    deployedSite: "https://as-markdowneditor.netlify.app/",
    description: "Live markdown previewer.",
    fullDescription:
      "A markdown editor using `react-markdown` for live preview. It includes syntax highlighting and clean layout.",
    image: "/images/markdown-editor.png",
    tag: ["React", "Tailwind CSS", "React Markdown"],
    techStack: ["w", ""],
  },
  {
    id: 11,
    title: "Accordion Component",
    githubRepo: "https://github.com/aimansae/as-accordion",
    deployedSite: "https://as-accordion.netlify.app/",
    description: "Simple accordion UI component.",
    fullDescription:
      "Reusable accordion component built with React and Tailwind. Focuses on accessibility and ease of reuse.",
    image: "/images/accordion.png",
    tag: ["React", "Tailwind CSS"],
    techStack: ["w", ""],
  },
  {
    id: 12,
    title: "Signup Form",
    githubRepo: "https://github.com/aimansae/react-signup-form",
    deployedSite: "https://as-singnup-form.netlify.app/",
    description: "Responsive signup form with validation.",
    fullDescription:
      "A user signup form using form validation, styled with Tailwind CSS. Shows real-time error messages.",
    image: "/images/signup-form.png",
    tag: ["React", "Tailwind CSS", "Form Validation"],
    techStack: ["w", ""],
  },
  {
    id: 13,
    title: "Mortgage Calculator",
    githubRepo: "https://github.com/aimansae/mortgage-calculator",
    deployedSite: "https://mortgage-calculator-cyan.vercel.app",
    description: "Calculate monthly mortgage payments.",
    fullDescription:
      "This mortgage calculator lets users input home price, down payment, interest rate, and term to see estimated payments.",
    image: "/images/mortgage.png",
    tag: ["React", "CSS", "JavaScript"],
    techStack: ["w", ""],
  },
  {
    id: 14,
    title: "Instapro",
    githubRepo: "https://github.com/aimansae/instapro-replica",
    deployedSite: "https://instaproreplica.netlify.app/",
    description: "A responsive Instagram replica UI.",
    fullDescription:
      "Instapro replicates the Instagram interface and behavior. Built using responsive Tailwind components and React state management.",
    image: "/images/instapro.png",
    tag: ["React", "Tailwind CSS"],
    techStack: ["w", ""],
  },
];
