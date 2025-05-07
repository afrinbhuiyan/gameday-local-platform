import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
console.log(motion)

const Testimonials = () => {
    const testimonials = [
        {
          id: 1,
          name: "Michael Rodriguez",
          role: "Youth Soccer Coach",
          content: "The tournament organization was flawless - from scheduling to facilities. Our under-16 team had their best competitive experience yet. The officiating was fair and the competition level was perfect for our players' development.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          id: 2,
          name: "David Chen",
          role: "Basketball League Manager",
          content: "Our corporate league has used this platform for three seasons now. The seamless registration process and real-time score updates have taken our games to the next level. The mobile app makes managing our team a breeze!",
          rating: 4,
          avatar: "https://randomuser.me/api/portraits/men/44.jpg"
        },
        {
          id: 3,
          name: "Sarah Johnson",
          role: "Marathon Event Coordinator",
          content: "As a fellow sports organizer, I'm incredibly impressed with the attention to detail. The participant communication was clear, the medical support was comprehensive, and the post-race amenities were outstanding. We'll definitely partner with them again.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/65.jpg"
        }
      ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-black font-light uppercase tracking-wider mb-8">
          WHAT OUR <span className="font-semibold">CLIENTS SAY</span>
          </h1>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
          Hear directly from sports enthusiasts, team managers, and event organizers about their experiences with our tournaments. These testimonials reflect our commitment 
          to excellence in every game we host.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-[#71ce69]"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <FaQuoteLeft className="text-3xl text-emerald-100 mb-4" />
              
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-[#7eda73]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;