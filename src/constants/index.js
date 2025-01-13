import {
  react,
  frontend,
  student,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  docker,
  b1soft,
  //starbucks,
  game,
  gif,
  manager,
  chemist,
  oscar,
  mysql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: react,
  },
  {
    title: "Front Developer",
    icon: frontend,
  },
  {
    title: "Software Engineer Student",
    icon: student,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "B1Soft Latinoamerica",
    icon: b1soft,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Jul 2023",
    points: [
      "During my time as a Front-End developer, I used Back-End technologies such as Java, JSP and MySQL to create interactive and functional user interfaces.",
      "Achieved notable improvements in web application performance by optimizing resource loading and reducing response times, resulting in a smoother user experience.",
      "I worked effectively in development teams, understanding the importance of collaboration between Front-End and Back-End to offer complete and effective web solutions.",
    ],
  },
];

const projects = [
  {
    name: "Game JS",
    description:
      "Dive into the depths of the ocean and face an exciting hunt for bad fish in this 2D game developed in JavaScript with object-oriented programming. Aim, shoot and demonstrate your prowess in destroying these challenging enemies as you explore a vibrant underwater world. Do you have what it takes to be the best underwater hunter?",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: game,
    source_code_link: "https://github.com/oscar2697/GameJs",
  },
  {
    name: "Gif Finder",
    description:
      "Discover a world of visual fun with our GIF search engine created with React. Explore a wide range of GIFs in real time and find the perfect touch for your conversations and messages. Developed with React, this app gives you a quick and easy search experience, ready for you to start sharing laughter and excitement in seconds!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "hooks",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gif,
    source_code_link: "https://github.com/oscar2697/Gif-App",
  },
  {
    name: "Appointment Manager",
    description:
      "Simplify your appointment management with our appointment manager. This application, developed with React and styled with Tailwind CSS, allows you to organize your commitments efficiently and without complications. Plus, using Local Storage, your appointments are securely stored on your device for quick and convenient access.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "localstorage",
        color: "pink-text-gradient",
      },
    ],
    image: manager,
    source_code_link: "https://github.com/oscar2697/administrador_citas_reactjs",
  },
  {
    name: "Sales systems",
    description:
      "A pharmacy sales system in Java and MySQL is an application that automates inventory, sales and billing management in a pharmacy, providing efficient control over products, customers and transactions, with a secure database in MySQL.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: chemist,
    source_code_link: "https://github.com/oscar2697",
  },
  {
    name: "GitHub",
    description:
      "For more Projects, you can check my GitHub!",
    tags: [
      {
        name: "github",
        color: "blue-text-gradient",
      },
    ],
    image: oscar,
    source_code_link: "https://github.com/oscar2697",
  },
];

export { services, technologies, experiences, projects };