import Splash from "./splash"
import Navbar from "./navbar"
import About from "./about"
import Skills from "./skills"
import Work from "./work"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Splash />
      <About/>
      <Skills />
      <Work />
    </div>
  );
};

export default Home;