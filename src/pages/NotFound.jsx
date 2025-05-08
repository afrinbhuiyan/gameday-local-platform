import React from "react";
import { FiFrown, FiHome, FiMail } from "react-icons/fi";
import { Link } from "react-router";

import notFound from "../assets/notFound.svg";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#e6e6e6] flex flex-col items-center justify-center p-4 font-sans">
      <Helmet>
        <title>GameDay | Error</title>
      </Helmet>
      <div className="flex md:flex-row flex-col gap-10 items-center text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          <h1 className="lg:text-5xl text-3xl font-bold text-[#080431]">So Sorry!</h1>
          <p className="lg:text-4xl text-2xl font-semibold lg:w-xl lg:my-4 my-2 text-[#080431]">
            The page you are looking for cannot be found
          </p>
          <p className="lg:text-2xl text-xl font-semibold text-[#080431]">
            Possible Reasons
          </p>

          <li className="text-[#080431] mt-2 lg:mt-4">
            The address may have been typed incorrectly
          </li>
          <li className="text-[#080431] mt-2 lg:mt-4 text-sm lg:text-base">
            It may be a broken or outdated link
          </li>
          <div className="flex flex-wrap gap-4 mt-7 items-center justify-center md:justify-start">
            <Link to={"/"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#9ce979] hover:bg-[#83b66b] font-bold py-3 px-10 lg:px-16 rounded-full text-sm transition-all duration-300 dm-sans flex items-center gap-2.5"
              >
                <IoIosHome></IoIosHome> Return Home
              </motion.button>
            </Link>
            <motion.button
              onClick={() => window.history.back()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-white text-white hover:text-black py-3 px-13 lg:px-16 rounded-full text-sm transition-all duration-300 flex items-center gap-2.5"
            >
              <MdOutlineKeyboardBackspace size={20} /> Go Back
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md lg:max-w-xl"
        >
          <img 
            src={notFound} 
            alt="404 Not Found" 
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
