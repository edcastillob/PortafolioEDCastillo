import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-sm p-4 text-center text-white">
      <p>&copy; {new Date().getFullYear()} Ing. Edwar Castillo FullStack Dev. Todos los derechos reservados.</p>
    </div>
  );
};

export default Footer;