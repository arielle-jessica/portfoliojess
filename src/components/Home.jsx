import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          Computing Systems and Technology Student
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
  Passionate Computing Systems and Engineering Technology Student | Hardware, Web Development, and Cybersecurity Enthusiast | Continuous Learner

Dedicated and ambitious Computing Systems and Engineering Technology student at CNA with a strong passion for technology, particularly in hardware, web development, and cybersecurity. My goal is to contribute to the ever-evolving world of technology by continuously expanding my knowledge and skills.

Throughout my studies, I have developed a solid foundation in understanding and designing complex computing systems, with a keen interest in hardware Additionally, I have been self-teaching myself cutting-edge web development technologies such as React.js, Vite, Tailwind.css, and Node.js. Through hands-on projects, I have gained practical experience in developing dynamic and user-friendly web applications.

Moreover, I have a strong fascination for the field of cybersecurity and its vital role in our technology-driven society. I proactively learn about cybersecurity principles, ethical hacking, and best practices to protect sensitive information. By combining my knowledge of hardware and software systems and programming with various programming languages like ; Java , C/C++ , JavaScript, Python and Sql

Beyond my academic pursuits, I have also delved into the realm of database management. I am proficient in MySQL and have applied it extensively in conjunction with Python , despite it being outside the scope of my formal studies.

As a passionate learner, I firmly believe in the power of continuous learning to stay ahead in the rapidly evolving tech industry. I am dedicated to expanding my skillset and staying up-to-date with the latest advancements through self-guided learning, online courses, and industry events. I am eager to collaborate with like-minded professionals, share knowledge, and contribute to the success of any team or organization I join..
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;