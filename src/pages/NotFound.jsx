import React from "react";
import { FiFrown, FiHome, FiMail } from "react-icons/fi";
import { Link } from "react-router";

import notFound from "../assets/notFound.svg";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#e6e6e6] flex flex-col items-center justify-center p-4 font-sans">
      {/* Main Content Container */}
      <div className="flex md:flex-row flex-col gap-10 items-center ">
        <div>
          <h1 className="text-5xl font-bold text-[#080431]">So Sorry!</h1>
          <p className="text-4xl font-semibold lg:w-xl my-4 text-[#080431]">
            The page you are looking for cannot be found
          </p>
          <p className="text-2xl font-semibold text-[#080431]">
            Possible Reasons
          </p>

          <li className="text-[#080431] mt-4">
            The address may have been typed incorrectly
          </li>
          <li className="text-[#080431] mt-4">
            It may be a broken or outdated link
          </li>
          <div className="flex flex-wrap gap-4 mt-7">
            <Link to={"/"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#9ce979] hover:bg-[#83b66b] font-bold py-3 px-16 rounded-full text-sm transition-all duration-300 dm-sans flex items-center gap-2.5"
              >
                <IoIosHome></IoIosHome> Return Home
              </motion.button>
            </Link>
            <motion.button
              onClick={() => window.history.back()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-white text-white hover:text-black py-3 px-16 rounded-full text-sm transition-all duration-300 flex items-center gap-2.5"
            >
              <MdOutlineKeyboardBackspace size={20} /> Go Back
            </motion.button>
          </div>
        </div>

        <div>
          <img src={notFound} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
