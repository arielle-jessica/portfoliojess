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
    MySql,
    Java,
    C,
    Student,
    Python,
    Loblaw,
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
      title: "Web Developer Beginner",
      icon: web,
    },
    {
      title: "Computing Systems and Engineering Technology Student",
      icon: Student,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
        name: "Java",
        icon: Java,
      },
      {
        name: "C/C++",
        icon: C++ ,
      },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
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
      name: "MySql",
      icon: MySql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
        name: "Python",
        icon: Python,
      },
  ];
  
  const experiences = [
    {
      title: "HMR Clerk",
      company_name: "Loblaw /Dominion",
      icon: Loblaw,
      iconBg: "#383E56",
      date: "January 2022 - Present",
      points: [
        "Ensuring accurate product scanning",
        "Providing exceptional customer service while executing company-directed promotions and maintaining product displays.",
        "Consistently meeting and exceeded sales targets, contributing to the department’s overall success",
        
      ],
    },
    {
      title: "IT Intern",
      company_name: "Ministry of Posts and Telecommunications",
      icon: Minpostel,
      iconBg: "#E6DEDD",
      date: "June 2021 - August 2021",
      points: [
        "Visited different IT services during my Ministry of Posts and Telecommunications internship.",
        "Identified defects in their archive software, providing suitable solutions to improve the efficiency and effectiveness of these systems. This work helped to streamline processes and reduce downtime, improving overall productivity.",
      ],
    },
    {
      title: "Volunteer",
      company_name: "Coomunity Youth Home",
      icon: Volunteer,
      iconBg: "#383E56",
      date: "Dec 2018 - Aug 2020",
      points: [
        "As a Volunteer at the Community Youth Home,",
"Helped and guided children and family clients, provided mental health and social service education.",
"Provided emotional and physical support as needed. I collaborated with a team of social workers and other professionals to help clients access available resources and assistance programs.",
      ],
    },
    {
      title: "Cashier",
      company_name: "Mahima",
      icon: mahima,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Dec 2019",
      points: [
        "As a cashier in Mahima, I ensured ringing up sales while assisting customers in their check-out process. I consistently met targets, contributing to the department’s overall success.",
      ],
    },
  ];
  
 
  const projects = [
    {
      name: "Restaurant Website",
      description:
        "Web-based platform that allows users to order , pickup and dine in with the availability of their seat selection and possibility to book for events",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Mysql",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: food,
      source_code_link:popopo ,
    },
    
      
  ];
  
  export { services, technologies, experiences, projects };