import React from "react";
import Hero from "../components/Hero";
import UpcomingSportsEvents from "../components/UpcomingSportsEvents";
import { useLoaderData } from "react-router";


const Home = () => {

  const data = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <UpcomingSportsEvents sportsEvents={data}></UpcomingSportsEvents>
    </div>
  );
};

export default Home;
