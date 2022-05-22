// import "../styles/tailwind.css";
import Head from "next/head";
import dynamic from "next/dynamic";

import React, { useState, useEffect, Suspense } from "react";
import Navbar from "../components/Navbar";

import Intro from "../components/Intro";
import About from "../components/About";
import Services from "../components/Service";
// import Projects from "../components/Projects";

// import Meta from "../component/Meta";
// const About = dynamic(() => import("../components/About"));
// const Services = dynamic(() => import("../components/Services"));
const Projects = dynamic(() => import("../components/Projects"));
const Contact = dynamic(() => import("../components/Contact"));
const Footer = dynamic(() => import("../components/Footer"));
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  const [loading, setloading] = useState(false);

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
          <Navbar />

          <Intro />
          <About />
          <Services />
          <Projects />
          <Contact />

          <Footer />
        </div>
      )} */}

      <Head>
        {/* <Meta /> */}
        <link
          rel="icon"
          href="https://res.cloudinary.com/dhoozs5nu/image/upload/v1653211812/ansh/icon-192x192_jikdwl.png"
        />
        <title>Ansh Doshi</title>
      </Head>
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
