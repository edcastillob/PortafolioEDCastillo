import React from "react";
import hero from "../assets/images/hero.png";

const Hero = () => {
  const social_media = [
    "logo-github",
    "logo-linkedin",
    "logo-twitter",
  ];

  
  const getSocialMediaUrl = (iconName) => {
    switch (iconName) {
      case "logo-github":
        return "https://github.com/edcastillob/";
      case "logo-linkedin":
        return "https://www.linkedin.com/in/edcastillob/";
      case "logo-twitter":
        return "https://twitter.com/edwar_castillo";
      default:
        return "#"; 
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-6/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hola!
              <br />
            </span>
            Soy <span>Edwar Y. Castillo B.</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8">Contactame</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <a
                key={icon}
                href={getSocialMediaUrl(icon)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="text-gray-600 hover:text-white cursor-pointer "
                >
                  <ion-icon name={icon}></ion-icon>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
