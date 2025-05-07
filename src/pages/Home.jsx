import React from "react";
import Hero from "../components/Hero";
import UpcomingSportsEvents from "../components/UpcomingSportsEvents";
import { useLoaderData } from "react-router";

import Testimonials from "./Testimonials";
import WorkWithUs from "../components/WorkWithUs";
import Features from "../components/Features";


const Home = () => {
  const data = useLoaderData();
  // const swiperRef = useRef(null);

  return (
    <div className="overflow-hidden">
      <Hero />
      <UpcomingSportsEvents sportsEvents={data} />

      <Features></Features>

      <Testimonials />
      <WorkWithUs />
    </div>
  );
};

export default Home;
