import React from "react";
import hero from "../assets/hero-copade.jpg";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
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
            <Link
              to={"/1"}
              className="copade-primary-bg btn border-none text-white"
            >
              Comenzar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
