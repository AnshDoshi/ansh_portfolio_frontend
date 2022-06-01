import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const Footer = () => {
  const [footers, setfooters] = useState([]);

  const fetchfooters = async () => {
    const { data } = await axios.get(`${apiUrl}/api/footers`);

    setfooters(data[0]);
  };

  useEffect(() => {
    fetchfooters();
  }, []);
  return (
    <footer className=" bg-black opacity-95 absolute w-screen text-white flex justify-center items-center px-20">
      <div className="flex-col  justify-center items-center mt-9 text-center ">
        <div className=" flex flex-col m-2 justify-center gap-5 ">
          <h1 className="text-3xl">{footers.quote}</h1>
          <h1 className="text-2xl">{footers.title}</h1>
          <div className="m-5 gap-7 flex flex-wrap justify-center">
            <a href="mailto:anshdoshi2305@gmail.com">
              <Image
                src="/color_mail.svg"
                alt="Mail"
                className="transform duration-300 hover:scale-125 cursor-pointer"
                width="25px"
                height="25px"
              />
            </a>
            <a href="https://twitter.com/anshdoshi_10">
              <Image
                src="/color_tweet.svg"
                alt="Mail"
                className="transform duration-300 hover:scale-125 cursor-pointer"
                width="25px"
                height="25px"
              />
            </a>
            <a href="https://www.linkedin.com/in/ansh-doshi-ba280422b/">
              <Image
                src="/color_in.svg"
                alt="Mail"
                className="transform duration-300 hover:scale-125 cursor-pointer"
                width="25px"
                height="25px"
              />
            </a>
            <a href="https://github.com/AnshDoshi">
              <Image
                src="/color_github.svg"
                alt="Mail"
                className=" transform duration-300 hover:scale-125 cursor-pointer"
                width="25px"
                height="25px"
              />
            </a>
          </div>
        </div>

        <div>
          <hr size="15" width="100%" color="white"></hr>
          <div className="m-3 mb-7">
            <h3>{footers.last_line}</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
