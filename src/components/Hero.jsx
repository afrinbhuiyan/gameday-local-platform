import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const eventSlides = [
  {
    id: 1,
    title: "Annual City Marathon",
    subtitle:
      "Challenge yourself in the most anticipated running event of the season! Experience the thrill of racing through iconic city landmarks with enthusiastic crowds cheering you on every step of the way. Whether you're a seasoned marathoner or a first-time runner, this is your chance to be part of something extraordinary.",
    image:
      "https://img.freepik.com/premium-photo/young-male-soccer-player-background_488220-41367.jpg",
    date: "15 June 2024",
    location: "Central Park, New York",
    participants: "5,000+",
    cta: "Register Now",
    link: "/marathon",
  },
  {
    id: 2,
    title: "Beach Volleyball Tournament",
    subtitle:
      "Feel the sand between your toes and the sun on your back in our premier beach volleyball championship! This action-packed weekend features intense competition, live music, food trucks, and a vibrant beachside atmosphere. Top teams will battle for glory and a $10,000 prize pool in this unforgettable coastal showdown.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1820&q=80",
    date: "22-24 July 2024",
    location: "Santa Monica Beach",
    participants: "32 Teams",
    cta: "View Details",
    link: "/volleyball",
  },
  {
    id: 3,
    title: "Community Soccer League",
    subtitle:
      "More than just a game - it's where friendships are forged and community spirit comes alive! Our inclusive league welcomes players of all abilities to enjoy the beautiful game in a supportive environment. With professional coaching, weekly matches, and end-of-season celebrations, it's the perfect way to stay active and connected.",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1693&q=80",
    date: "Every Saturday",
    location: "City Sports Complex",
    participants: "Open Enrollment",
    cta: "Join Team",
    link: "/soccer",
  },
];

const EventSlider = () => {
  const swiperRef = useRef(null);
  return (
    <div className="relative w-full h-screen max-h-[800px] overflow-hidden">
       <Swiper
         ref={swiperRef}
         modules={[Navigation, Pagination, Autoplay]}
         spaceBetween={30}
         slidesPerView={1}
         navigation={{
           nextEl: '.swiper-button-next-custom',
           prevEl: '.swiper-button-prev-custom',
         }}
         pagination={{ 
           clickable: true,
           el: '.swiper-pagination',
           type: 'bullets',
         }}
         autoplay={{ delay: 5000 }}
         loop={true}
         effect="fade"
         speed={1000}
         className="h-full w-full"
      >
        {eventSlides.map((event) => (
          <SwiperSlide key={event.id} className="relative">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/70 z-10"></div>
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl lg:max-w-3xl p-8 lg:p-12 rounded-xl"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 dm-sans lg:max-w-xl lg:leading-16">
                    {event.title}
                  </h1>
                  <p className="text-gray-300 mb-4">{event.subtitle}</p>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                       <div className="flex items-center text-white">
                         <FaCalendarAlt
                           className="mr-3 text-green-400"
                           size={20}
                         />
                         <span>{event.date}</span>
                       </div>
                       <div className="flex items-center text-white">
                         <FaMapMarkerAlt
                           className="mr-3 text-green-400"
                           size={20}
                         />
                         <span>{event.location}</span>
                       </div>
                       <div className="flex items-center text-white">
                         <FaUsers className="mr-3 text-green-400" size={20} />
                         <span>{event.participants}</span>
                       </div>
                     </div>

                     <div className="flex flex-wrap gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#9ce979] hover:bg-[#83b66b] font-bold py-3 px-16 rounded-full text-sm transition-all duration-300 dm-sans"
                      >
                        {event.cta}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black hover:bg-white text-white hover:text-black py-3 px-16 rounded-full text-sm transition-all duration-300"
                      >
                        Learn More
                      </motion.button>
                    </div>
          
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute z-30 right-6 bottom-0 flex gap-6">
          <button className="swiper-button-prev-custom p-3 md:p-5 lg:p-6 bg-[#1111119f] hover:bg-[#9ce979] text-white transition-all">
            <SlArrowLeft className="text-[15px] md:text-[20px] lg:text-[30px]" />
          </button>
          <button className="swiper-button-next-custom p-3 md:p-5 lg:p-6 bg-[#1111119f] hover:bg-[#9ce979] text-white transition-all">
            <SlArrowRight className="text-[15px] md:text-[20px] lg:text-[30px]" />
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 animate-bounce hidden lg:block">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
          </div>
        </div>
    </div>
  );
};

export default EventSlider;
