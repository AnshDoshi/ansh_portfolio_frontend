// import "../styles/tailwind.css";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import Intro from "../components/Intro";
import About from "../components/About";
import Services from "../components/Service";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import Meta from "../component/Meta";
// import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  // const [loading, setloading] = useState(false);

  // useEffect(() => {
  //   setloading(true);
  //   setTimeout(() => {
  //     setloading(false);
  //   }, 1000);
  // }, []);
  return (
    <div>
      {/* {loading ? (
        <div className="flex h-screen bg-gray-200 items-center justify-center">
          <PacmanLoader size={25} color={"#1E90FF"} loading={loading} />
        </div>
      ) : (
        <div>
          
        </div>
      )} */}
      <link rel="manifest" href="/manifest.json" />
      <Navbar />
      <Intro />
      {/* <Meta /> */}
      <About />
      <Services />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
