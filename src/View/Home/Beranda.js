import React, { useState } from "react";
import { motion } from "framer-motion";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import skripsi from "../../Asset/skripsi_project.jpg";
import tiket from "../../Asset/tiket1.jpg";
import gempa from "../../Asset/gempa1.jpg";
import Bloogers from "../../Asset/blog2.jpg";
import profil from "../../Asset/profi.png";
import react from "../../Asset/icons8-react-native-48.png";
import tailwind from "../../Asset/icons8-tailwind-css-48.png";
import mysql from "../../Asset/icons8-mysql-48.png";
import express from "../../Asset/icons8-express-js-48.png";
import android from "../../Asset/icons8-android-48.png";
import waste from "../../Asset/waste1.png";
import mobile from "../../Asset/blog-mobile1.jpg";
import Ijazah from "../../Asset/smk2.jpeg";
import simple from "../../Asset/simple.jpg";
import word from "../../Asset/Word-icon.png";
import exel from "../../Asset/exel.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

function Beranda() {
  const skills = [
    { name: "React Native", image: react },
    { name: "React.js", image: react },
    { name: "Express.js", image: express },
    { name: "Tailwind CSS", image: tailwind },
    { name: "Android Studio Kotlin", image: android },
    { name: "Mysql", image: mysql },
    { name: "Ms Word", image: word },
    { name: "Ms Excel", image: exel },
  ];

  const projects = [
    {
      id: 1,
      name: "Skripsi Project",
      description: "Development mobile applications using react native expo.",
      image: skripsi,
    },
    {
      id: 2,
      name: "Ticket Speadboat",
      description: "Development mobile applications using react native expo.",
      image: tiket,
    },
    {
      id: 3,
      name: "Informasi Gempa dan cuaca",
      description: "Development mobile applications using react native expo.",
      image: gempa,
    },
    {
      id: 4,
      name: "WasteCreative",
      description:
        "Development android applications using android studio kotlin.",
      image: waste,
    },
    {
      id: 5,
      name: "Web Bloggers",
      description:
        "Development Web blog Nahdalatul Ulama using react js and tailwind css.",
      image: Bloogers,
    },
    {
      id: 6,
      name: "Bloggers Mobile",
      description:
        "Nahdalatul Ulama news portal from the web bloggers project, this application is developed using react native",
      image: mobile,
    },
    {
      id: 7,
      name: "Management Ijazah",
      description:
        "a simple mobile application for managing diploma files, this application is made using react native has crud features, search for files and some animations",
      image: Ijazah,
    },
    {
      id: 8,
      name: "Simple LandingPage",
      description:
        "A simple landingpage created using react js and tailwind css",
      image: simple,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100">
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <img
            src={profil}
            alt="Profile"
            className="rounded-full  h-100   mx-auto mb-4 mt-12"
          />
          <h1 className="text-4xl text-white font-bold flex justify-center">
            M Gentha Arya Pratama
          </h1>

          <div className="text-center mt-4 border border-white"></div>
          <div className="flex justify-center mt-6">
            <a
              href="https://github.com/Genta-arya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 mr-4"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/mgentaarya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 mr-4"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/m-gentha-arya-pratama-37b419231/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 mr-4"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="mailto:mgentaarya@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 mr-4"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
      </header>
      <section id="about" className="py-12">
        <div className="container mx-auto">
          <p className="text-lg text-gray-600 m-5 bg-white shadow-md rounded-lg p-10 font-serif">
            <h1 className="py-4 text-3xl font-serif">About me</h1>
            As a passionate mobile developer, I specialize in crafting
            high-quality applications using React Native for Android platforms.
            My dedication to creating exceptional user experiences is evident in
            my ability to deliver cross-platform solutions that seamlessly blend
            functionality and aesthetics.
            <br />
            <br />
            In the realm of mobile development, my proficiency lies in React
            Native, a framework that allows me to build robust and visually
            appealing applications. I take pride in my expertise in creating
            intuitive interfaces that facilitate effortless navigation,
            providing users with an engaging and satisfying experience.
            <br />
            <br />
            Complementing my mobile development skills, I am well-versed in
            utilizing React.js for web development. This allows me to extend my
            reach beyond mobile platforms, ensuring a consistent and unified
            user experience across various devices. By leveraging React.js, I
            create responsive and dynamic web applications that align with the
            latest industry standards.
            <br />
            <br />
            On the backend, I harness the power of Express.js to develop robust
            server-side solutions. This includes building APIs, managing HTTP
            requests and responses, defining intricate API routes, and
            establishing secure database connections. My proficiency in
            Express.js enables me to implement server-side business logic,
            ensuring the seamless integration of frontend and backend
            components.
            <br />
            <br />
            My comprehensive approach to development allows me to create
            end-to-end solutions that prioritize efficiency and user
            satisfaction. I am committed to staying abreast of the latest
            industry trends and continuously expanding my skill set to
            incorporate innovative technologies. This commitment ensures that my
            applications remain at the forefront of quality and performance,
            providing users with cutting-edge experiences.
          </p>

          {skills.length <= 4 ? (
            <div className="flex justify-center mt-8">
              <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-4 py-2">
                  <ul className="text-gray-600">
                    {skills.map((skill, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        {typeof skill === "string" ? (
                          <span className="mr-2">{skill}</span>
                        ) : (
                          <>
                            {skill.image && (
                              <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-8 h-8 mr-2"
                              />
                            )}
                            <span>{skill.name}</span>
                          </>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="container mx-auto mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-4 flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    style={{
                      // Adjust positioning based on the index for a pyramid effect
                      transform: `translateY(${
                        index < 4 ? index / 2 : -(index - 3) / 2
                      }rem)`,
                    }}
                  >
                    <div className="flex items-center mb-2 justify-center">
                      {typeof skill === "string" ? (
                        <span>{skill}</span>
                      ) : (
                        <>
                          {skill.image && (
                            <img
                              src={skill.image}
                              alt={skill.name}
                              className="w-8 h-8 mr-2"
                            />
                          )}
                          <span>{skill.name}</span>
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <section id="projects" className="py-12 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl text-gray-800 font-bold mb-6 flex justify-center">
            My Projects
          </h2>
          <div className="flex justify-center mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search project..."
                className="border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none"
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className="absolute top-3 left-3">
                <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5  ">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-lg p-4 flex flex-col "
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to={`/project/${project.id}`}>
                    <h3 className="text-xl text-gray-800 font-semibold mb-2 hover:text-green-500 flex justify-center ">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 ">{project.description}</p>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="mt-4 rounded-lg hover:scale-105 transition-all"
                    />
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="flex justify-center"></div>
            )}
          </div>
        </div>
      </section>
      <section id="contact" className="py-12">
        <div className="container mx-auto"></div>
      </section>
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <motion.p
            className="text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            &copy; 2023 My Portfolio
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default Beranda;
