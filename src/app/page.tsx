import Splash from "./splash"
import Navbar from "./navbar"
import About from "./about"
import Skills from "./skills"

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