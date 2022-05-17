import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

// import styles from "../../styles/Header.module.css";
import ServiceBars from "../ServiceBars";

const Service = () => {
  const [services, setservices] = useState([]);

  const fetchservices = async () => {
    const { data } = await axios.get(
      "https://dry-cliffs-57784.herokuapp.com/api/services"
    );

    setservices(data[0]);
  };

  useEffect(() => {
    fetchservices();
  }, []);
  return (
    <div id="services" name="services" className=" p-4 bg-gray-200">
      <div className="m-2">
        <h2 className="  text-3xl font-semibold text-center py-1 ">
          {services.title}
        </h2>
        <h2 className="text-center text-4xl font-bold text-indigo-600">
          {services.quote}
        </h2>
      </div>

      <div className=" flex flex-wrap justify-center m-10 ">
        {services.content?.map((service, index) => {
          return (
            <ServiceBars
              key={index}
              img={
                <img
                  src={service.image}
                  alt="photo"
                  className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                />
              }
              title={service.name}
              desc={service.desc}
            />
          );
        })}

        {/* <ServiceBars
          img={
            <img
              src="/mobile.jpg"
              alt="photo"
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            />
          }
          title="MOBILE APPLICATION"
          desc="I can develop Android or IOS applications as promising with the latest technologies.Right now React-Native and FLutter is very famous."
        /> */}
      </div>
    </div>
  );
};

export default Service;
