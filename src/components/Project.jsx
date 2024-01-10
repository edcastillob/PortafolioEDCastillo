import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";
import project8 from "../assets/images/project-8.png";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "ProdElevate",
      github_link: "https://github.com/edcastillob/prodElevatePF",
      live_link: "https://prodelevatepf.onrender.com/",
    },
    {
      img: project2,
      name: "Countries App",
      github_link: "https://github.com/edcastillob/Countries-ProyectoIndividual",
      live_link: "https://front-countries-opal.vercel.app/",
    },
    {
      img: project3,
      name: "Rick & Morty",
      github_link: "https://github.com/edcastillob/Rick_And_Morty",
      live_link: "https://646fdd33cf50d909a04c14f0--rick-and-morty-edcastillob.netlify.app/",
    },
    {
      img: project4,
      name: "Survey App",
      github_link:
        "https://github.com/edcastillob/SurveyApp",
      live_link: "https://surveyecastillob.netlify.app/",
    },
    {
      img: project5,
      name: "Gallery App",
      github_link: "https://github.com/edcastillob/Gallery-React-deploy",
      live_link: "https://64432868954f5a1e0517aa49--silly-croissant-e1dc69.netlify.app/",
    },
    {
      img: project6,
      name: "GitHub Api",
      github_link: "https://github.com/edcastillob/FULLTIMEFORCE-EDCASTILLO",
      live_link: "https://edcastillofulltimeforce.netlify.app/",
    },
    {
      img: project7,
      name: "SysFern Store",
      github_link: "https://github.com/edcastillob/angular-product-project",
      live_link: "https://github.com/edcastillob/angular-product-project",
    },    
    {
      img: project8,
      name: "Personnel Management System",
      github_link: "https://github.com/edcastillob/PersonnelManagementSystem",
      live_link: "https://github.com/edcastillob/PersonnelManagementSystem",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Algunos de <span className="text-cyan-600">mis Proyectos</span>
        </h3>
        {/* <p className="text-gray-400 mt-3 text-lg">My awesome works</p> */}
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/2 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Link Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Project;