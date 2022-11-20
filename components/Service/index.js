import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// import styles from "../../styles/Header.module.css";
import ServiceBars from "../ServiceBars";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Service = () => {
  const [services, setservices] = useState([]);

  const fetchservices = async () => {
    const { data } = await axios.get(`${apiUrl}/api/services`);

    setservices(data[0]);
  };

  useEffect(() => {
    fetchservices();
  }, []);
  return (
    <div
      id="services"
      name="services"
      className={`${services?.title && " bg-gray-200"} p-4`}
    >
      <div className="m-2">
        {services?.title ? (
          <>
            <h2 className="  text-3xl font-semibold text-center py-1 ">
              {services.title}
            </h2>
            <h2 className="text-center text-4xl font-bold text-indigo-600">
              {services.quote}
            </h2>
          </>
        ) : (
          <div className="text-center">
            <Skeleton width={190} height={40} />
            <Skeleton width={340} height={48} />
          </div>
        )}
      </div>

      <div className=" flex flex-wrap justify-center m-10 ">
        {services?.content ? (
          services.content?.map((service, index) => {
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
          })
        ) : (
          <Skeleton className="m-5" width={450} height={230} count={2} />
        )}

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
