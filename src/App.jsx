import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGithub } from "react-icons/fa";
import { SiC } from "react-icons/si";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "C", icon: <SiC /> },
    { name: "Python", icon: <FaPython /> },
  ];

  const projects = [
    {
      name: "Expense Tracker App",
      desc: "Track daily expenses with categories, add/remove transactions, and view total balance dynamically.",
      link: "https://github.com/aryan4323/expense-tracker-app",
    },
    {
      name: "E-Commerce App",
      desc: "A React-based e-commerce project with product listing, cart management, and checkout functionality.",
      link: "#", // replace with GitHub link if available
    },
  ];

  const themeClasses = darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900";

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${themeClasses}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-800 dark:bg-gray-200 shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-indigo-400">Aryan Tyagi</h1>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-indigo-400 transition font-semibold">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition font-semibold">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition font-semibold">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition font-semibold">Contact</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:scale-105 transition"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen text-center px-6" id="hero">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Aryan Tyagi</h1>
        <p className="text-xl font-semibold mb-6">Front End Developer | React Enthusiast</p>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition"
        >
          Download Resume
        </a>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-12" id="about">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-indigo-500 inline-block pb-2">About Me</h2>
        <p className="text-gray-300 font-medium leading-relaxed">
          Hi! I am Aryan Tyagi from Muzaffarnagar. I completed my B.Tech from College of Engineering Roorkee. I specialize in Front End Development using modern web technologies, building responsive and interactive web applications.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-6 py-12" id="skills">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-purple-500 inline-block pb-2">Skills</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-800 dark:bg-gray-200 rounded-xl shadow-lg hover:scale-105 transition transform w-32"
            >
              <div className="text-4xl mb-2 text-indigo-400">{skill.icon}</div>
              <span className="font-semibold text-gray-100 dark:text-gray-900">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-12" id="projects">
        <h2 className="text-3xl font-semibold mb-10 text-center border-b-2 border-pink-500 inline-block pb-2">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-gray-200 p-6 rounded-2xl flex flex-col justify-between shadow-xl hover:scale-105 transition transform hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-100 dark:text-gray-900">{proj.name}</h3>
              <p className="mb-5 font-medium text-gray-300 dark:text-gray-700">{proj.desc}</p>
              <a
                href={proj.link}
                target="_blank"
                className="mt-auto px-5 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold text-center hover:scale-105 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center" id="contact">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-indigo-500 inline-block pb-2">Contact Me</h2>
        <p className="text-gray-300 font-medium mb-2">
          Email:{" "}
          <a
            href="mailto:aryantyagi564321@gmail.com"
            className="text-blue-400 hover:underline"
          >
            aryantyagi564321@gmail.com
          </a>
        </p>
        <p className="flex justify-center gap-4 mt-4 text-2xl">
          <a href="https://github.com/aryan4323" target="_blank" className="hover:text-indigo-400">
            <FaGithub />
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 border-t border-gray-700">
        &copy; 2025 Aryan Tyagi. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
