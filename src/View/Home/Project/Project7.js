import React, { useState, useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import ft1 from "../../../Asset/smk1.jpeg"
import ft2 from "../../../Asset/smk2.jpeg";
import ft3 from "../../../Asset/smk3.jpeg";
import ft4 from "../../../Asset/smk4.jpeg";
import ft5 from "../../../Asset/smk5.jpeg";

import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Project7() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [thumbnailsClass, setThumbnailsClass] = useState("");

  const project = {
    name: "Management Ijazah",
    description:
      "a simple mobile application for managing diploma files, this application is made using react native has crud features, search for files and some animations",
    images: [
      { original: ft1, thumbnail: ft1 },
      { original: ft2, thumbnail: ft2 },
      { original: ft3, thumbnail: ft3 },
      { original: ft4, thumbnail: ft4 },
      { original: ft5, thumbnail: ft5 },
     
    ],
    link: "https://github.com/Genta-arya/Management-Ijazah",
   
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      const thumbnailsCount = project.images.length;
      setThumbnailsClass(thumbnailsCount > 4 ? "thumbnails-column" : "");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [project.images.length]);

  return (
    <div className="container mx-auto p-3">
      <nav className="bg-gray-800 py-4 px-6 rounded-2xl ">
        <div className="container mx-auto m-5">
          <div className="flex justify-center items-center">
            <div className="hidden md:block">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded"
              >
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="text-gray-300 hover:text-white focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded"
                >
                  <FontAwesomeIcon icon={faHome} />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <motion.p
        className="mt-8 text-xl font-semibold flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Preview Aplikasi
      </motion.p>

      <motion.div
        className={`mt-8 flex justify-center ${thumbnailsClass} `}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <ImageGallery
          items={project.images}
          slideInterval={3000}
          renderFullscreenButton={() => null}
          renderPlayPauseButton={() => null}
          originalClass="w-full h-auto m-12 "
          renderThumbInner={(item) => (
            <img
              src={item.thumbnail}
              alt={item.thumbnailAlt}
              className="object-cover w-full h-full  "
            />
          )}
        />
      </motion.div>

      <motion.div
        className="mb-8 mt-24 p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl text-gray-800 font-bold mb-4 border-b-2 pb-2">
          {project.name}
        </h2>
        <p className="text-gray-600 mb-8 border-b-2 pb-2">
          {project.description}
        </p>
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Source Code
        </motion.a>

    
      </motion.div>
    </div>
  );
}

export default Project7;
