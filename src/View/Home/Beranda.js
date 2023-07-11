import React from "react";
import skripsi from "../../Asset/skripsi_project.jpg";
import tiket from "../../Asset/tiket1.jpg";
import gempa from "../../Asset/gempa1.jpg";
import Bloogers from "../../Asset/blog2.jpg";
import profil from "../../Asset/profil.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Beranda() {
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
          <h2 className="text-3xl text-gray-800 font-bold mb-6 flex justify-center">About Me</h2>
          <p className="text-lg text-gray-600">
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
        </div>
      </section>
      <section id="projects" className="py-12 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl text-gray-800 font-bold mb-6 flex justify-center">My Projects</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg p-4">
                <Link to="/project/1">
                  <h3 className="text-xl text-gray-800 font-semibold mb-2 hover:text-green-500">
                    Skripsi Project
                  </h3>
                </Link>
                <p className="text-gray-600">
                  Development mobile applications using react native expo.
                </p>
                <img
                  src={skripsi}
                  alt="Project 1"
                  className="mt-4 rounded-lg"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg p-4">
                <Link to="#">
                  <h3 className="text-xl text-gray-800 font-semibold mb-2 hover:text-green-500">
                    Ticket Speadboat
                  </h3>
                </Link>
                <p className="text-gray-600">
                  Development mobile applications using react native expo.
                </p>
                <img src={tiket} alt="Project 2" className="mt-4 rounded-lg" />
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg p-4">
                <Link to="#">
                  <h3 className="text-xl text-gray-800 font-semibold mb-2 hover:text-green-500">
                    Informasi Gempa dan cuaca
                  </h3>
                </Link>
                <p className="text-gray-600">
                  Development mobile applications using react native expo.
                </p>
                <img src={gempa} alt="Project 3" className="mt-4 rounded-lg" />
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg p-4">
                <Link to="#">
                  <h3 className="text-xl text-gray-800 font-semibold mb-2 hover:text-green-500">
                    Web Bloggers
                  </h3>
                </Link>
                <p className="text-gray-600">
                  Development Web blog Nahdalatul Ulama using react js and
                  tailwind css.
                </p>
                <img
                  src={Bloogers}
                  alt="Project 4"
                  className="mt-4 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-12">
        <div className="container mx-auto">
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
              href="www.linkedin.com/in/m-gentha-arya-pratama-37b419231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">&copy; 2023 My Portfolio</p>
        </div>
      </footer>
    </div>
  );
}

export default Beranda;
