import {
    mobile,
    backend,
    creator,
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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Software Developer",
      icon: web,
    },

    {
      title: "Python Developer",
      icon: creator,
    },

    {
      title: "System Architect",
      icon: mobile,
    },
    {
      title: "Cyber Security",
      icon: backend,
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
      name: "Python",
      icon: creator,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Candle Creations 123 LLC",
      company_name: "Meta",
      icon: meta, 
      iconBg: "#E6DEDD",
      date: "June 2016 - August 2019",
      points: [
        "Tasked with developing and manage production, editing movies, videos, and photos",
        "Developed websites using Word Press, and different programming languages",
        "Maintained, and frequently updated the webpage, ensure 100% responsiveness and reactivity"
      ],
    },
    {
      title: "Cyber Security Specialist ",
      company_name: "Kidmoto Technologies",
      icon: shopify,
      iconBg: "#383E56",
      date: "June 2021 - August 2021",
      points: [
        "Implemented DDos protection using Cloudflare",
        "Managed databases and authorized personnel, as part of a designated team",
        "Backend password security, and administrative security implementation",
      ],
    },
    {
      title: "Computer Science Instructor",
      company_name: "Whizara/Learn2Code",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2023 - October 2023",
      points: [
        "Taught children a variety of topics, from Robotics to Advanced Level Programming topics",
        "Followed a pre-determined curriculumn and made it digestable for children of young ages to understand",
        "Broke down high-level programming concepts, into 'bite-sized' concepts",
      ],
    },
    {
      title: "Computer Science/Robotics Instructor",
      company_name: "Togetherhood",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2023 - Present",
      points: [
        "Instructed and taught a variety of STEM/STEAM classes to school age children k-grade 8. ",
        "Conceive of and create an age-appropriate curriculum for the class",
        "Design outcome-based lesson plans and help children understand the importance of STEM",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "PLACEHOLDER TEXT, BECAUSE THIS IS JUST A PLACEHOLDER PROJECT",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "PLACEHOLDER TEXT, BECAUSE THIS IS JUST A PLACEHOLDER PROJECT",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "PLACEHOLDER TEXT, BECAUSE THIS IS JUST A PLACEHOLDER PROJECT",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  