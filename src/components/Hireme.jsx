import React from "react";
import hireMe from "../assets/images/hireMe.png";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/01Henry.png";
import project2 from "../assets/images/02Egg.png";
import project3 from "../assets/images/03CertiProf.png";
import project4 from "../assets/images/04Ing.png";
// import project5 from "../assets/images/project-5.png";
// import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Hireme = () => {
  
    const projects = [
      {
        img: project1,
        name: "Henry",
        live_link: "https://certificates.soyhenry.com/new-cert?id=403412c23178dc99946b26f3bd87c7893ebaaf40f86b49960ae426fbefa40311",
      },
      {
        img: project2,
        name: "Egg Cooperation",
        live_link: "https://production-egg-certificates.s3.amazonaws.com/EdwarYCastilloB/programaci%C3%B3ndesdecerolatam/thumbnail_957562bd67dadfca9a16ca4dda2ce8aa0c2727662adecb530f0b8075fe39127f.jpeg",
      },
      {
        img: project3,
        name: "Certiprof",
        live_link: "https://www.credly.com/badges/e35e2e0e-f9a8-4922-86d3-f54b747ac4b7/linked_in_profile",
      },
      {
        img: project4,
        name: "UBA",      
        live_link: "http://validarapostilla.mppre.gob.ve/principal/verificar",
      },    
    ];
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
        Últimas <span className="text-cyan-600">capacitaciones</span>
        </h3>
        {/* <p className="text-gray-400 mt-3 text-lg">Últimas capacitaciones</p> */}
      {/* </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
            soluta quos tempore eos accusamus cupiditate, amet in similique
            sapiente obcaecati odio deleniti architecto corporis ratione.
            Consequatur a quidem maiores!
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />*/}

<div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-4/4 w-full">
          <br />
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 4,
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
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Ver  . 
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>




        {/* __________________________________________________________________________ */}
      </div> 
    </section>
  );
};

export default Hireme;