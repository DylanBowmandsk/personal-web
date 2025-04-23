import Splash from "./splash";
import Navbar from "./navbar";
import About from "./about";
import Image from "next/image"; // Keep this if you're using <Image /> somewhere

const Home = () => {
  return (
    <div>
      <Navbar />
      <Splash />
      <About/>
    </div>
  );
};

export default Home;