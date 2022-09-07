import React from "react";
import hero from "../assets/hero-copade.jpg";
import ButtonCopade from "../components/ButtonCopade";
import Steps from "../components/Steps";

const Inicio = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-overlay bg-sky-800 bg-opacity-95"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5  text-5xl font-bold">Guia de uso SIG</h1>
            <p className="mb-5">
              Bienvenido a la guia de uso del sistema de informacion geografica
              de la Secretaria del COPADE.
            </p>
            <button className="btn copade-primary-bg border-none text-white">
              Comenzar
            </button>
          </div>
        </div>
      </div>
      <Steps
        steps={[
          "Controles Superiores",
          "Controles Intermedios",
          "Controles Inferiores",
        ]}
        completado={2}
      />
      {/*    <div className="flex flex-col md:flex-row justify-around items-center">
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
      </div> */}
    </div>
  );
};

export default Inicio;
