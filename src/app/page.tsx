import Splash from "./splash"
import Navbar from "./navbar"
import About from "./about"
import Skills from "./skills"
import Work from "./work"
import Footer from "./footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Splash />
      <About/>
      <Skills />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;