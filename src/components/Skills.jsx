import React from "react";
import { DiHtml5, DiCss3, DiNodejs, DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiSequelize, SiExpress, SiPostgresql, SiMysql, SiJest } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";



const Skills = () => {
  const skills = [
    {
      logo: <DiHtml5 />,
    },
    {
      logo: <DiCss3 />,
    },
    {
      logo: <DiNodejs />,
    },
    {
      logo: <DiJavascript1 />,
    },
    {
      logo: <FaReact />,
    },
    {
      logo: <SiRedux />,
    },
    {
      logo: <SiSequelize />,
    },
    {
      logo: <BiLogoTypescript />,
    },
    {
      logo: <SiExpress />,
    },
    {
      logo: <SiPostgresql />,
    },
    {
      logo: <SiMysql />,
    },
    {
      logo: <SiJest />,
    },
    {
      logo: <SiNestjs />,
    },
    {
      logo: <TbBrandNextjs />,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Mis <span className="text-cyan-600">Tecnologías</span>
        </h3>
        <div className="flex items-center justify-center mt-12 gap-5 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[2rem] max-w-[8rem] bg-gray-900 p- rounded-xl"
            >
              <div
                className="w-30 h-30 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  {skill.logo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
