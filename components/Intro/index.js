import React, { useEffect, useState } from "react";
import Button from "../Button";
import styles from "./intro.module.css";
import Image from "next/image";
var ReactRotatingText = require("react-rotating-text");
import { Link } from "react-scroll";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Intro = () => {
  const [intros, setintros] = useState([]);

  const fetchintros = async () => {
    const { data } = await axios.get(`${apiUrl}/api/intros`);

    setintros(data[0]);
  };

  useEffect(() => {
    fetchintros();
  }, []);
  return (
    <div
      id="home"
      name="home"
      className={
        intros?.title
          ? styles.intro
          : "flex h-screen bg-cover bg-fixed m-auto flex-col gap-6 items-center justify-center"
      }
    >
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
        {intros?.title ? (
          <span>{intros.title} </span>
        ) : (
          <Skeleton width={280} height={45} />
        )}
        {intros?.name ? (
          <span>
            {intros.quote} <span className="text-blue-600"> {intros.name}</span>
          </span>
        ) : (
          <Skeleton width={280} height={55} />
        )}
        {intros?.content ? (
          <ReactRotatingText items={intros.content} />
        ) : (
          <Skeleton width={280} height={35} />
        )}

        {intros?.btn_name ? (
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
        ) : (
          <div className="flex justify-center">
            <Skeleton width={128} height={40} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
