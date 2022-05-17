import React, { useLayoutEffect, useEffect, useState } from "react";
import axios from "axios";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Button from "../Button";

import Image from "next/image";
import styles from "./navbar.module.css";

function Navbar() {
  const [navs, setnavs] = useState([]);

  const fetchnavs = async () => {
    const { data } = await axios.get(
      "https://dry-cliffs-57784.herokuapp.com/api/navs"
    );
    setnavs(data[0]);
  };

  useEffect(() => {
    fetchnavs();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  useLayoutEffect(() => {
    const scroll = (e) => {
      setScrollPos(window.scrollY);
    };
    document.addEventListener("scroll", scroll);
    return () => {
      // document.removeEventListener("scroll", scroll);
      document.removeEventListener("scroll", scroll);
    };
  }, [scrollPos]);
  return (
    <div>
      <nav className={scrollPos > 100 ? styles.nav_after : styles.nav_main}>
        <div className={styles.nav_second}>
          <div className={styles.nav_third}>
            <div className={styles.nav_forth}>
              <div className={styles.nav_fifth}>
                <Link
                  activeClass="Home"
                  to="home"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer  px-3 py-2 text-md"
                >
                  <h1 className={styles.nav_name}>
                    {navs.logo}
                    <span className={styles.nav_name_dot}>.</span>
                  </h1>
                </Link>
              </div>
              <div className={styles.nav_menu}>
                {/* <div className={styles.nav_link}> */}
                <Link
                  activeClass="Home"
                  to="home"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer font-semibold hover:text-blue-600 text-black  px-3 py-2 text-md"
                >
                  Home
                </Link>
                <Link
                  activeClass="about"
                  to="About"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-blue-600 font-semibold text-black  px-3 py-2"
                >
                  About-Me
                </Link>
                <Link
                  activeClass="services"
                  to="services"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-blue-600 font-semibold text-black px-3 py-2"
                >
                  Services
                </Link>

                <Link
                  activeClass="portfolio"
                  to="portfolio"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-blue-600 font-semibold text-black px-3 py-2"
                >
                  Portfolio
                </Link>

                {/* <Link
                  activeClass="skills"
                  to="skills"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-blue-600 text-black px-3 py-2"
                >
                  Skills
                </Link> */}
                {/* </div> */}
              </div>

              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link
                  activeClass="contact"
                  to="contact"
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="cursor-pointer  text-black px-3 py-2"
                >
                  <h1 className=" font-bold text-lg hover:underline cursor-pointer hidden md:block">
                    Say
                    <span className="text-blue-500">{navs.hi}</span>
                  </h1>
                </Link>
              </div>
            </div>
            <div className="mr-8 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-black focus:outline-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className=" mx-4 mr-20 pt-4 pb-4 space-y-1 bg-gray-50"
              >
                <Link
                  href="/home"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600  text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600  text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About-Me
                </Link>

                <Link
                  href="/services"
                  activeClass="services"
                  to="services"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  activeClass="portfolio"
                  to="portfolio"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Portfolio
                </Link>

                {/* <Link
                  href="/skills"
                  activeClass="skills"
                  to="skills"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Skills
                </Link> */}

                <Link
                  href="/contact"
                  activeClass="contact"
                  to="contact"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Say<span className="text-black">hii</span>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
