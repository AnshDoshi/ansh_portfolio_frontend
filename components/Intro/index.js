import React, { useEffect, useState } from "react";
import Button from "../Button";
import styles from "./intro.module.css";
import Image from "next/image";
var ReactRotatingText = require("react-rotating-text");
import { Link } from "react-scroll";
import axios from "axios";

const Intro = () => {
  const [intros, setintros] = useState([]);

  const fetchintros = async () => {
    const { data } = await axios.get(
      "https://dry-cliffs-57784.herokuapp.com/api/intros"
    );

    setintros(data[0]);
  };

  useEffect(() => {
    fetchintros();
  }, []);
  return (
    <div id="home" name="home" className={styles.intro}>
      {/* <div>
        <Image
          src="/nature.jpg"
          objectFit="cover"
          layout="fill"
          alt="..."
          className="-z-20 "
        />
      </div> */}
      <div className="absolute h-screen inset-0 bg-white opacity-30 z-10 "></div>
      <div className={styles.i_name}>
        <span>{intros.title} </span>
        <span>
          {intros.quote} <span className="text-blue-600"> {intros.name}</span>
        </span>
        {intros?.content && <ReactRotatingText items={intros.content} />}

        <Link
          activeClass="contact"
          to="contact"
          smooth={true}
          offset={-80}
          className="flex justify-center"
          duration={500}
        >
          <a className="flex justify-center ">
            <Button title={intros.btn_name} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
