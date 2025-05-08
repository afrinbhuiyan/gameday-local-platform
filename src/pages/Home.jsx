import React from "react";
import Hero from "../components/Hero";
import UpcomingSportsEvents from "../components/UpcomingSportsEvents";
import { useLoaderData } from "react-router";

import Testimonials from "./Testimonials";
import WorkWithUs from "../components/WorkWithUs";
import Features from "../components/Features";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="overflow-hidden">
      <Helmet>
      <title>GameDay | Home</title>
      </Helmet>
      <Hero />
      <UpcomingSportsEvents sportsEvents={data} />
      <Features></Features>
      <Testimonials />
      <WorkWithUs />
    </div>
  );
};

export default Home;
