import "./Home.css";
import React from "react";
import Photoo from "../Home/photoAndVideo/photoAndVideo";
import Service from "./service/services";
import FloatingActionButton from "../../comp/FloatingActionButton/FloatingActionButton";
import Footer from "../../comp/footer/footer";
import Projects from "../Projects/Projects";
import MediaControlCard from "comp/MediaControlCard/MediaControlCard";
import Indicator from'./indci/indicator'

const Home = () => {
  return (
    <div className="main-bg">
      {/* <ViewCarouselOutlined/> */}
      <Photoo />
      <Indicator/>
      <Service />
      <Projects />
      <FloatingActionButton />
      <MediaControlCard />
      <Footer />
    </div>
  );
};

export default Home;
