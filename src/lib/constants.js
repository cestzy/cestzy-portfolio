export const techCardsItems = [
  {
    name: "Figma",
    description: "Design Tool",
    imageUrl: "/src/assets/logos/figma.svg",
    bgColor: "bg-[#2596be]/20",
  },
  {
    name: "JavaScript",
    description: "Core language",
    imageUrl: "/src/assets/logos/javascript.svg", // Make sure you have this logo, or adjust path
    bgColor: "bg-[#2596be]/20",
  },
  {
    name: "React",
    description: "JavaScript Library",
    imageUrl: "/src/assets/logos/react.svg",
    bgColor: "bg-[#2596be]/20",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    imageUrl: "/src/assets/logos/tailwind.svg",
    bgColor: "bg-[#2596be]/20",
  },
  {
    name: "Git",
    description: "Version control",
    imageUrl: "/src/assets/logos/git.svg",
    bgColor: "bg-[#2596be]/20",
  },
  {
    name: "PostgreSQL",
    description: "Database system",
    imageUrl: "/src/assets/logos/postgresql.svg",
    bgColor: "bg-[#2596be]/20",
  },
  {
    name: "Supabase",
    description: "Backend tool",
    imageUrl: "/src/assets/logos/supabase.svg", // Make sure you add this if needed
    bgColor: "bg-[#2596be]/20",
  },
  {
    name: "Python",
    description: "Programming language",
    imageUrl: "/src/assets/logos/python.svg",
    bgColor: "bg-[#2596be]/20",
  },
];

export const portfolioProjects = [
  {
    id: "osu-goals",
    heading: "osu! goals",
    subheading: "track and conquer your rhythm game milestones",
    description:
      "A dedicated web application tailored for osu! players to create, track, and complete personal gameplay goals. Stay motivated, monitor your progress, and crush your targets one rank at a time.",
    imageUrl: "/imgs/projects/portolio-proj1.png",
    // Add multiple screenshots for the mini-screen showcase modal:
    screenshots: [
      "/src/assets/screen-1.svg",
      "/src/assets/screen-2.svg",
      "/src/assets/screen-3.svg",
    ],
    techStack: [
      "Flask",
      "Python",
      "HTML5",
      "CSS3",
      "JavaScript",
      "PostgreSQL",
    ],
    liveDemoUrl: "https://osu-goals.vercel.app/",
    sourceCodeUrl: "https://github.com/cestzy/osu-progress-site",
  },
];

export const mainNavigationLinks = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "#work",
    label: "Work",
  },
  {
    url: "#about",
    label: "About",
  },
  {
    url: "#contact",
    label: "Contact",
  },
];

export const socialLinks = [
  {
    url: "https://www.linkedin.com/",
    label: "LinkedIn",
  },
  {
    url: "https://github.com/",
    label: "Github",
  },
];