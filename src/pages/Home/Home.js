import React from "react";
import TitleChange from "../Shared/TitleChange/TitleChange";
import Banner from "./Banner";
import BlogArea from "./BlogArea";
import Brands from "./Brands";
import BusinessSummary from "./BusinessSummary";
import CarParts from "./CarParts";
import "./Home.css";
import Reviews from "./Reviews";
const Home = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      <TitleChange title="Home" />
      <Banner />
      <CarParts />
      <BusinessSummary />
      <BlogArea />
      <Reviews />
      <Brands />
    </div>
  );
};

export default Home;
