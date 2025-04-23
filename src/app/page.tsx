import Splash from "./splash"
import Navbar from "./navbar"
import About from "./about"
import Skills from "./skills"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Splash />
      <About/>
      <Skills />
    </div>
  );
};

export default Home;