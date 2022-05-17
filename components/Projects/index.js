import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

import PortfolioBoxes from "../PortfolioBoxes";

const Projects = () => {
  const [projects, setprojects] = useState([]);
  const fetchprojects = async () => {
    const { data } = await axios.get(
      "https://dry-cliffs-57784.herokuapp.com/api/projects"
    );

    setprojects(data[0]);
  };

  useEffect(() => {
    fetchprojects();
  }, []);
  return (
    <section
      id="portfolio"
      name="portfolio"
      className="bg-gray-300  mx-auto px-4 sm:px-6 lg:px-4 py-12"
    >
      <div className="text-center pb-12 mb-5">
        <h2 className="  text-4xl   font-semibold text-center py-1 ">
          {projects.title}
        </h2>
        <h2 className="text-center text-2xl font-bold text-indigo-600">
          {projects.quote}
        </h2>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {projects[" content"]?.map((box, index) => {
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
        })}
      </div>
    </section>
  );
};

export default Projects;
