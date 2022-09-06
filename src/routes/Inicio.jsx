import React from "react";
import empleabilidad from "../assets/empleabilidad.jpg";
import credito from "../assets/credito.jpg";
import ciudades from "../assets/ciudades-sostenibles.jpg";
import ButtonCopade from "../components/ButtonCopade";

const Inicio = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="copade-primary-text text-3xl text-center my-4">
        Bienvenidos a <span className="font-bold"> COPADE</span>
      </h1>
      <div className="flex justify-center text-white h-fit">
        <p className="w-6/12 text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          assumenda ratione deserunt aut voluptatum, at minima sequi maiores,
          libero dolorum, asperiores alias! Reprehenderit, facilis. Natus
          commodi voluptate ea quam est.
        </p>
      </div>
      <ButtonCopade nombre="Un boton" />
      <div className="flex flex-col md:flex-row justify-around items-center">
        <img
          className="md:w-1/4 w-11/12 my-4 rounded hover:scale-105 transition duration-600 cursor-pointer"
          src={empleabilidad}
          alt=""
        />
        <img
          className="md:w-1/4 w-11/12 my-4 rounded hover:scale-105 transition duration-600 cursor-pointer"
          src={credito}
          alt=""
        />
        <img
          className="md:w-1/4 w-11/12 my-4 rounded hover:scale-105 transition duration-600 cursor-pointer"
          src={ciudades}
          alt=""
        />
      </div>
    </div>
  );
};

export default Inicio;
