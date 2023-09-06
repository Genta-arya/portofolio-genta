import React, { useState } from "react";
import { motion } from "framer-motion";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import skripsi from "../../Asset/skripsi_project.jpg";
import tiket from "../../Asset/tiket1.jpg";
import gempa from "../../Asset/gempa1.jpg";
import Bloogers from "../../Asset/blog2.jpg";
import profil from "../../Asset/profil.jpeg";
import react from "../../Asset/icons8-react-native-48.png";
import tailwind from "../../Asset/icons8-tailwind-css-48.png";
import mysql from "../../Asset/icons8-mysql-48.png";
import express from "../../Asset/icons8-express-js-48.png";
import android from "../../Asset/icons8-android-48.png";
import waste from "../../Asset/waste1.png";
import mobile from "../../Asset/blog-mobile1.jpg";
import Ijazah from "../../Asset/smk2.jpeg";
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
            className="rounded-full w-40 h-40 mx-auto mb-4"
          />
          <h1 className="text-4xl text-white font-bold flex justify-center">
            M.Gentha Arya Pratama
          </h1>
        </div>
      </header>
      <section id="about" className="py-12">
        <div className="container mx-auto">
          <p className="text-lg text-gray-600 m-5 bg-white shadow-md rounded-lg p-10">
            I am a mobile development enthusiast with a strong focus on React
            Native. I specialize in building cross-platform mobile applications
            using React Native, delivering optimized and engaging user
            experiences. With my expertise, I can create intuitive interfaces
            that provide seamless navigation and visually appealing designs.
            <br />
            <br />
            In addition to my React Native skills, I have extensive experience
            in developing backend services using Express.js. I utilize
            Express.js to build APIs and provide various services that support
            the mobile applications I develop. I handle HTTP requests and
            responses, define API routes, establish database connections, and
            implement server-side business logic to create robust and scalable
            applications.
            <br />
            <br />
            My passion for mobile development and backend services allows me to
            create end-to-end solutions, ensuring a smooth and efficient user
            experience. I am always eager to learn new technologies and explore
            innovative approaches to enhance the quality and performance of my
            applications.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-lg p-4 flex flex-col"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to={`/project/${project.id}`}>
                    <h3 className="text-xl text-gray-800 font-semibold mb-2 hover:text-green-500 flex justify-center">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 ">{project.description}</p>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="mt-4 rounded-lg"
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
        <div className="container mx-auto">
          <div className="text-center mt-4">
            <h3 className="text-xl font-bold">Contact Me</h3>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="https://github.com/Genta-arya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 mr-4"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/mgentaarya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 mr-4"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/m-gentha-arya-pratama-37b419231/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 mr-4"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="mailto:mgentaarya@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
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
