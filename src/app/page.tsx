"use client"
import { useEffect } from "react"
import Splash from "./splash"
import Navbar from "./navbar"
import About from "./about"
import Skills from "./skills"
import Work from "./work"
import Footer from "./footer"
import AOS from "aos"
import "aos/dist/aos.css"


const Home = () => {

  useEffect(() => {
    AOS.init({})
  }, [])

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