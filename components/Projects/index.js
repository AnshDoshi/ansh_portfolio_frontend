import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PortfolioBoxes from "../PortfolioBoxes";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Projects = () => {
  const [projects, setprojects] = useState([]);
  const fetchprojects = async () => {
    const { data } = await axios.get(`${apiUrl}/api/projects`);

    setprojects(data[0]);
  };

  useEffect(() => {
    fetchprojects();
  }, []);
  return (
    <section
      id="portfolio"
      name="portfolio"
      className={`${
        projects.title && "bg-gray-300 "
      } mx-auto px-4 sm:px-6 lg:px-4 py-12`}
    >
      <div className="text-center pb-12 mb-5">
        {projects?.title ? (
          <h2 className="  text-4xl   font-semibold text-center py-1 ">
            {projects.title}
          </h2>
        ) : (
          <Skeleton width={190} height={40} />
        )}

        {projects?.quote ? (
          <h2 className="text-center text-2xl font-bold text-indigo-600">
            {projects.quote}
          </h2>
        ) : (
          <Skeleton width={340} height={48} />
        )}
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {projects?.title ? (
          projects[" content"]?.map((box, index) => {
            return (
              <PortfolioBoxes
                key={index}
                img={
                  <img
                    className="object-center object-cover h-auto w-full "
                    src={box.image}
                    alt="Project Image"
                  />
                }
                name={box.name}
                desc={box.desc}
              />
            );
          })
        ) : (
          <Skeleton width={330} height={340} />
        )}
      </div>
    </section>
  );
};

export default Projects;
