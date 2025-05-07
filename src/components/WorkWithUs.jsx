import { motion } from "framer-motion";
import { FaPaperPlane, FaUserPlus } from "react-icons/fa";
console.log(motion)

const WorkWithUs = () => {
  return (
    <section className="py-16 bg-gradient-to-t from-[#76b852] to-[#70b66a] lg:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-black font-light uppercase tracking-wider mb-8">
          WORK WITH <span className="font-semibold"> US</span>
          </h1>

          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards an exciting journey with our event
            agency. Click the button below to send your request and embark on a
            rewarding adventure in the world of sports.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-black hover:text-white text-black py-3 px-16 rounded-full text-sm transition-all duration-300 flex items-center"
            >
              <FaPaperPlane className="mr-3" />
              Email Us
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-white text-white hover:text-black py-3 px-16 rounded-full text-sm transition-all duration-300 flex items-center"
            >
              <FaUserPlus className="mr-3" />
              Join Our Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkWithUs;
