import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import ft1 from "../../../Asset/skripsi_project.jpg";
import ft2 from "../../../Asset/skripsi_project1.jpg";
import ft3 from "../../../Asset/skripsi_project2.jpg";
import ft4 from "../../../Asset/skripsi_project3.jpg";
import ft5 from "../../../Asset/skripsi_project4.jpg";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Project1() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const project = {
    name: "Skripsi Project",
    description:
      "This project was created as a final assignment requirement, this application is used to publish the results of the development carried out by BAPPEDA West Kalimantan, Ketapang district. This application was built using React Native Expo as the mobile framework and for the backend it uses express.js",
    images: [
      { original: ft1, thumbnail: ft1 },
      { original: ft2, thumbnail: ft2 },
      { original: ft3, thumbnail: ft3 },
      { original: ft4, thumbnail: ft4 },
      { original: ft5, thumbnail: ft5 },
    ],
    link: "https://github.com/Genta-arya/Skripsi-mobile-v2",
  };
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="container mx-auto">
      <nav className="bg-gray-800 py-4 px-6 rounded-2xl ;">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="hidden md:block">
              <Link
                to="/beranda"
                className="   text-gray-300 hover:text-white px-3 py-2 rounded"
              >
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white focus:outline-none">
                <Link to="/beranda">
                  <FontAwesomeIcon icon={faHome} />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <p className="mt-8 text-xl font-semibold flex justify-center">
        Preview Aplikasi
      </p>
      <div className="mt-8 flex justify-center">
        <ImageGallery
          items={project.images}
          showPlayButton={false}
          showFullscreenButton={false}
          slideInterval={3000}
          renderFullscreenButton={() => null}
          renderPlayPauseButton={() => null}
          originalClass="w-full h-auto"
          renderThumbInner={(item) => (
            <img
              src={item.thumbnail}
              alt={item.thumbnailAlt}
              className="object-cover w-full h-full"
            />
          )}
          renderLeftNav={(onClick, disabled) =>
            !disabled && (
              <button
                onClick={onClick}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 bg-opacity-50 hover:bg-opacity-75 transition-opacity rounded-full p-2 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )
          }
          renderRightNav={(onClick, disabled) =>
            !disabled && (
              <button
                onClick={onClick}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 bg-opacity-50 hover:bg-opacity-75 transition-opacity rounded-full p-2 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )
          }
        />
      </div>

      <div className="mb-8 mt-24">
        <h2 className="text-3xl text-gray-800 font-bold mb-4">
          {project.name}
        </h2>
        <p className="text-gray-600 mb-8">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}

export default Project1;
