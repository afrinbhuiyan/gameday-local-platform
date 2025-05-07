import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaRunning,
  FaTrophy,
  FaUsers,
  FaCalendarAlt,
  FaChartLine,
  FaTicketAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const Features = () => {
  const features = [
    {
      icon: <FaRunning className="text-4xl text-emerald-500" />,
      title: "Diverse Sports",
      description:
        "From basketball to swimming, we cover all major sports with professionally organized events",
      bg: "bg-emerald-50",
    },
    {
      icon: <FaTrophy className="text-4xl text-blue-500" />,
      title: "Competitive Leagues",
      description:
        "Join tournaments with multiple skill divisions for fair and exciting competition",
      bg: "bg-blue-50",
    },
    {
      icon: <FaUsers className="text-4xl text-amber-500" />,
      title: "Community Building",
      description:
        "Connect with fellow athletes and build lasting sports relationships",
      bg: "bg-amber-50",
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-purple-500" />,
      title: "Flexible Scheduling",
      description:
        "Events designed to fit your calendar with weekday and weekend options",
      bg: "bg-purple-50",
    },
    {
      icon: <FaChartLine className="text-4xl text-red-500" />,
      title: "Performance Tracking",
      description: "Advanced stats and analytics to monitor your progress",
      bg: "bg-red-50",
    },
    {
      icon: <FaTicketAlt className="text-4xl text-indigo-500" />,
      title: "Easy Registration",
      description: "Simple online signup with instant confirmation",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-50 relative overflow-hidden">
      <Helmet>
        <title>GameDay | Features</title>
      </Helmet>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-emerald-100 opacity-30 mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-100 opacity-30 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-black font-light uppercase tracking-wider mb-5">
            <span className="font-semibold">Why</span> Choose Our Platform
          </h1>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Designed for athletes by athletes - everything you need for the
            ultimate sports experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`${feature.bg} p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-white rounded-full shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#8fd158] to-[#46a54e] rounded-2xl p-8 text-center shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join the Action?
          </h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Create your account today and get access to hundreds of sports
            events in your area
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <Link to={"/register"}>Sign Up Now</Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
