// Import logo assets so Vite bundles them for production
import figmaLogo from '@/assets/logos/figma.svg';
import javascriptLogo from '@/assets/logos/javascript.svg';
import reactLogo from '@/assets/logos/react.svg';
import tailwindLogo from '@/assets/logos/tailwind.svg';
import gitLogo from '@/assets/logos/git.svg';
import postgresqlLogo from '@/assets/logos/postgresql.svg';
import supabaseLogo from '@/assets/logos/supabase.svg';
import pythonLogo from '@/assets/logos/python.svg';

export const techCardsItems = [
  {
    name: "Figma",
    description: "Design Tool",
    imageUrl: figmaLogo,
    bgColor: "bg-[#2596be]/20",
  },
  {
    name: "JavaScript",
    description: "Core language",
    imageUrl: javascriptLogo,
    bgColor: "bg-[#2596be]/20",
  },
  {
    name: "React",
    description: "JavaScript Library",
    imageUrl: reactLogo,
    bgColor: "bg-[#2596be]/20",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    imageUrl: tailwindLogo,
    bgColor: "bg-[#2596be]/20",
  },
  {
    name: "Git",
    description: "Version control",
    imageUrl: gitLogo,
    bgColor: "bg-[#2596be]/20",
  },
  {
    name: "PostgreSQL",
    description: "Database system",
    imageUrl: postgresqlLogo,
    bgColor: "bg-[#2596be]/20",
  },
  {
    name: "Supabase",
    description: "Backend tool",
    imageUrl: supabaseLogo,
    bgColor: "bg-[#2596be]/20",
  },
  {
    name: "Python",
    description: "Programming language",
    imageUrl: pythonLogo,
    bgColor: "bg-[#2596be]/20",
  },
];

export const portfolioProjects = [
  {
    id: "osu-goals",
    heading: "Osu!Goals",
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