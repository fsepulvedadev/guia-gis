import React from "react";
import error from "../assets/404.svg";
import { Link } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";

const PageNotFound = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-start p-6 text-center">
      <h1 className="text-2xl font-bold text-primary">
        La pagina solicitada no existe.
      </h1>
      <img className="w-72" src={error} alt="" />

      <Link className="btn btn-primary w-1/4 text-white" to={"/"}>
        Regresar
        <IoReturnDownBack className="ml-2" color="#fff" size={"1.5rem"} />
      </Link>
    </div>
  );
};

export default PageNotFound;
