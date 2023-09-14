import React from "react";
import { SiWhatsapp } from "react-icons/si";


const Bot = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=584145994073";
  
  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
      <SiWhatsapp />
      </div>
    </a>
  );
};

export default Bot;
