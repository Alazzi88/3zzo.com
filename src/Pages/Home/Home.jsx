import "./Home.css";
import Photoo from "../Home/photoAndVideo/photoAndVideo";
import Service from "./service/services";
import FloatingActionButton from "../../comp/FloatingActionButton/FloatingActionButton";
import Footer from "../../comp/footer/footer";
import Projects from "../Projects/Projects";
import MediaControlCard from "comp/MediaControlCard/MediaControlCard";
import Indicator from'./indci/indicator'

const Home = () => {
  return (
    <>
      <Photoo />
      <Indicator/>
      <Service />
      <Projects />
      <FloatingActionButton />
      <MediaControlCard />
      <Footer />
</>
  );
};

export default Home;
