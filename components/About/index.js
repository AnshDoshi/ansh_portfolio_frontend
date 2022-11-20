import React, { useEffect, useState } from "react";
import Button from "../Button";
import axios from "axios";
import Image from "next/image";
// import { reducer as userReducer } from "../../usermodule";
// import { reducer as questionReducer } from "../../questionAnsModule";
// const proxy = require("http-proxy-middleware");
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const About = () => {
  const [abouts, setabouts] = useState([]);

  const fetchabouts = async () => {
    const { data } = await axios.get(`${apiUrl}/api/abouts`);

    setabouts(data[0]);
  };

  useEffect(() => {
    fetchabouts();
  }, []);
  return (
    // <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    // <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">

    <section id="About" name="about" className="relative pt-12  ">
      <div className="items-center m-5 flex flex-wrap">
        <div className=" w-full md:w-4/12 ml-auto mr-auto px-4">
          <img
            alt="Profile Photo"
            className="max-w-full rounded-lg shadow-lg"
            src={abouts.image}
          />
        </div>
        <div className="w-full m-5 md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            {/* <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
              <i className="fas fa-rocket text-xl"></i>
            </div> */}
            <h3 className="text-4xl  font-semibold">{abouts.title}</h3>

            <ul className="list-none mt-6 m-4">
              {abouts.content?.map((note, index) => (
                <li key={index} className="py-2">
                  <div className="flex ">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-indigo-500 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">{note}</h4>
                    </div>
                  </div>
                </li>
              ))}
              <li className="py-2">
                <div className=" gap-7 flex flex-wrap">
                  <a
                    href="mailto:anshdoshi2305@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/color_maill.svg"
                      alt="Mail"
                      className="transform duration-300 hover:scale-125 cursor-pointer"
                      width="25px"
                      height="25px"
                    />
                  </a>
                  <a
                    href="https://twitter.com/anshdoshi_10"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/color_tweett.svg"
                      alt="Mail"
                      className="transform duration-300 hover:scale-125 cursor-pointer"
                      width="25px"
                      height="25px"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ansh-doshi-ba280422b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/color_inn.svg"
                      alt="Mail"
                      className="transform duration-300 hover:scale-125 cursor-pointer"
                      width="25px"
                      height="25px"
                    />
                  </a>
                  <a
                    href="https://github.com/AnshDoshi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/github.svg"
                      alt="Mail"
                      className=" transform duration-300 hover:scale-125 cursor-pointer"
                      width="25px"
                      height="25px"
                    />
                  </a>
                </div>
              </li>
              <li className="py-2">
                <a href="/ansh_resume.pdf" target="_blank">
                  <Button title={abouts.btn_name} type="submit" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
