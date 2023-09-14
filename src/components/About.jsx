import React from "react";
import aboutImg from "../assets/images/about.png";

const About = () => {
  const info = [
    { text: "Años de Experiencia", count: "02" },
    { text: "Proyecto completados", count: "07" },
    { text: "Contribuciones", count: "02" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Sobre <span className="text-cyan-600">Mí</span>
        </h3>        
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          {/* <div className="p-2"> */}
            <div className="text-gray-300 my-3">
               <p className="text-justify leading-7 w-11/10">
                ¡Hola! Soy ED!, un <strong>Ingeniero de Sistemas</strong> con más de
                una década de experiencia en tecnología y más de 2 años como
                Full Stack Developer en el desarrollo web. <br />
                <strong>Resumen Profesional</strong> <br />

                <strong>Ingeniero de Sistemas:</strong> Egresado en 2009 con un enfoque en
                análisis y diseño de sistemas. <br />
                <strong>Liderazgo de Proyectos:</strong> Amplia
                experiencia en liderar proyectos tecnológicos desde la
                conceptualización hasta la implementación exitosa. <br /> 
                <strong>Desarrollador Full Stack:</strong> Especializado en el desarrollo web, abordando
                proyectos de manera integral. <br /> 
                <strong>Aprendizaje Continuo:</strong> Apasionado por mantenerme actualizado en las últimas tendencias tecnológicas. <br /> 
                <strong>Colaboración y Trabajo en Equipo:</strong> Creo en la
                importancia de trabajar juntos para resolver desafíos
                tecnológicos complejos. <br /> 
                <strong>Enfoque Profesional:</strong> Busco constantemente formas innovadoras de mejorar la experiencia del usuario y la eficiencia operativa. Mi compromiso con la
                excelencia y mi deseo de crecimiento constante me convierten en
                un activo valioso para cualquier equipo. <br /> <br /><hr /> <br />
                <strong>Más Allá de lo Profesional:</strong> Fuera del trabajo, disfruto explorar nuevas
                tecnologías 💻, contribuir a proyectos de código abierto y
                compartir conocimientos con la comunidad✔️. También me apasionan
                la música 🎵, correr 🏃🏽‍♂️, nadar 🏊‍♂️ y los viajes 🚗. ¡Gracias por visitar mi portafolio y por tomarte el tiempo de conocerme! Si estás interesado en explorar oportunidades profesionales emocionantes o simplemente quieres conectarte, ¡estaré encantado de saber de ti y de cómo puedo contribuir al éxito de tu equipo y proyectos!
              </p> 
           

              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a
                href="https://drive.google.com/file/d/1qq5MpNJmkV0S9fHwqEhbP5GP0rgVvEUv/view?usp=drive_link"
                target="_blank"
                download
              >
                <button className="btn-primary">View CV</button>
              </a>
            </div>
          </div>
         {/* <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
               <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              /> 
            </div>
          </div>*/}
        </div>
      {/* </div> */}
    </section>
  );
};

export default About;
