import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNpm,
  SiGit,
  SiRedux,
  SiAzuredevops,
  SiJira,
  SiFigma,
  SiPython,
  SiRubyonrails,
  SiSpotify,
} from "react-icons/si";
import { IconType } from "react-icons";

interface Skill {
  icon: IconType;
  text: string;
}

export const frontend_skills: Skill[] = [
  {
    icon: SiReact,
    text: "React.js",
  },
  {
    icon: SiJavascript,
    text: "JavaScript (ES6+)",
  },
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiRedux,
    text: "Redux",
  },
];

export const backend_skills: Skill[] = [
  {
    icon: SiNodedotjs,
    text: "Node.js",
  },
  {
    icon: SiExpress,
    text: "Express.js",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: SiRubyonrails,
    text: "Ruby on Rails",
  },
];

export const tools_and_platforms: Skill[] = [
  {
    icon: SiGit,
    text: "Git & GitHub",
  },
  {
    icon: SiNpm,
    text: "npm",
  },
  {
    icon: SiAzuredevops,
    text: "Azure DevOps",
  },
  {
    icon: SiJira,
    text: "Jira",
  },
  {
    icon: SiFigma,
    text: "Figma",
  },
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  points: string[];
  github?: string;
  demo?: string;
  icon?: IconType;
  category: 'web' | 'audio';
  spotifyEmbedUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Trans Voices Podcast",
    description: "A community-driven podcast uplifting trans and queer experiences. As Podcast Engineer & Producer, I bring my engineering expertise and creative approach to shape the podcast's sound, flow, and production quality, working closely with our hosts Elih, Theo, and Rene to create meaningful, authentic conversations that uplift trans and queer voices.",
    techStack: ["Audio Engineering", "Podcast Production", "Sound Design", "Audio Editing", "Content Management"],
    icon: SiSpotify,
    category: 'audio',
    points: [
      "Handle complete audio production workflow from recording to final mastered episodes",
      "Engineer interviews and conversations with community artists, advocates, and storytellers",
      "Distribute across major platforms including Spotify, Amazon Music, and Apple Podcasts"
    ],
    demo: "https://open.spotify.com/show/6CXx2ymgjSojkq5zhUFSXi?si=61c0f899e1a440e7",
    spotifyEmbedUrl: "https://open.spotify.com/embed/show/6CXx2ymgjSojkq5zhUFSXi?utm_source=generator"
  },
  {
    title: "Fort Bend LGBTQIA+ Community Resources",
    description: "A comprehensive resource hub serving LGBTQIA+ communities in Fort Bend County, Texas and surrounding areas with access to healthcare, legal services, support groups, and inclusive events.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Cloudinary"],
    points: [
      "Built a full-stack web application with searchable resource directory, events page, and community photo gallery",
      "Implemented advanced filtering system by location, type, and audience for vetted community resources",
      "Created secure admin dashboard with role-based access control and content moderation workflows",
      "Integrated Cloudinary for optimized image storage and newsletter system with responsive email delivery",
      "Achieved WCAG 2.1 AA compliance with semantic HTML5, ARIA labels, and keyboard navigation support",
      "Deployed as monorepo with Netlify frontend and Render backend API, featuring custom domain and SSL certificates"
    ],
    demo: "https://ftbend-lgbtqia-community.org",
    category: 'web',
  },
  {
    title: "Pet Health Tracker",
    description: "A comprehensive pet health monitoring platform designed to help owners track, visualize, and manage their pets' well-being through a clean, responsive interface.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "CSS"],
    points: [
      "Developed a full-stack web app using React and Node.js with a responsive, accessible UI",
      "Built a scalable REST API with PostgreSQL for secure data storage and retrieval",
      "Designed and implemented data visualizations to track pets' health trends over time",
      "Integrated Google OAuth for secure user authentication",
      "Collaborated with a team in an agile environment using GitHub Projects and clear documentation"
    ],
    github: "https://github.com/Rainbowfish-Tech-Collab/Pet-Health-Tracker",
    category: 'web',
  },
  {
    title: "Nature's Edge Wildlife Rescue Portal",
    description: "A Ruby on Rails donor management system built during the 2024 Opportunity Hack hackathon for Nature's Edge Wildlife and Reptile Rescue, featuring modern UI with Tailwind CSS and PostgreSQL database.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS", "RSpec", "Devise"],
    points: [
      "Collaborated with a team of 5 developers to build a full-featured donor management system in under 24 hours",
      "Implemented responsive UI components using Rails partials and Tailwind CSS best practices",
      "Set up comprehensive test infrastructure using RSpec, FactoryBot, and Email Spec",
      "Integrated payment processing and email service APIs for automated donor communications"
    ],
    github: "https://github.com/2024-Arizona-Opportunity-Hack/HeatSyncers-Nature-sEdgeWildlife-Nature-sEdgeWildlifeandReptileRescueDigitalTransformation",
    category: 'web',
  },
  {
    title: "Prism Uganda NGO Website",
    description: "Developed a mission-critical WordPress website for Prism Uganda, a transgender-led NGO founded in 2020 that provides vital mental health services and human rights advocacy. Built on December 7th, 2024 during Out in Tech's Digital Corps event, the site serves as a 24/7 digital hub for their comprehensive programs including the Tuli Nawe support initiative, Mind Guard Center crisis services, and economic empowerment programs.",
    techStack: ["WordPress", "HTML", "CSS", "PHP"],
    points: [
      "Built a WordPress website featuring six core programs including emergency shelter, mental health support, and economic empowerment for Uganda's transgender community",
      "Added partner profiles and donation systems to connect with international donors and support the organization's sustainability",
      "Created a blog to share updates on human rights advocacy and community impact, with program information and emergency contacts"
    ],
    demo: "https://prismuganda.wordpress.com/",
    category: 'web',
  }
];

// Helper functions to get projects by category
export const getWebProjects = () => projects.filter(project => project.category === 'web');
export const getAudioProjects = () => projects.filter(project => project.category === 'audio');

export interface Photo {
  src: string;
  caption: string;
  event?: string;
  link?: string;
}

export const photos: Photo[] = [
  {
    src: "/RobinAllenDevPortfolio/images/OpportunityHack_img1.jpg",
    caption: "Collaborating at Opportunity Hack 2024",
    event: "Opportunity Hack 2024"
  },
  {
    src: "/RobinAllenDevPortfolio/images/OpportunityHack_img2.jpg",
    caption: "Working with the team at Opportunity Hack",
    event: "Opportunity Hack 2024"
  },
  {
    src: "/RobinAllenDevPortfolio/images/KatyPride2ndBirthday.jpg",
    caption: "Celebrating Katy Pride's 2nd Birthday Party with fellow Katy Pride Board members",
    event: "Katy Pride's 2nd Birthday Party",
    link: "https://www.outsmartmagazine.com/2025/06/katy-pride-second-birthday/"
  },
  {
    src: "/RobinAllenDevPortfolio/images/WalkingInPrideParadeWithJonRosenthal.png",
    caption: "Walking in Pride Parade with The Greater Houston LGBTQ+ Chamber of Commerce and Texas House Representative Jon E. Rosenthal",
    event: "2025 Houston Pride Parade"
  }
];

export const contactLinks = {
  github: "https://github.com/robinallenaz",
  linkedin: "https://www.linkedin.com/in/robin-allen-software-engineer/",
  email: "robinallenaz@gmail.com"
};

export const aboutYou = {
  location: "Katy, TX",
  email: "robin.allen.az@gmail.com",
  github: "https://github.com/robinallenaz",
  linkedin: "https://www.linkedin.com/in/robin-allen-software-engineer/"
};
