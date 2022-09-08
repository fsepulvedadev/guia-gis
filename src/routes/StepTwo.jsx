import React from "react";
import Steps from "../components/Steps";
import selectorCapas from "../assets/selector-capas.png";
import { Link } from "react-router-dom";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const stepTwo = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-11/12 flex-col items-center py-6">
        <Steps
          steps={["Controles", `Selectores de Capas`, "Controles de Mapa"]}
          completado={2}
        />
        <h1 className="py-10 text-3xl font-bold text-primary">
          Selectores de Capas
        </h1>
        <div className="mt-5 flex w-full flex-col">
          <div className="indicator w-full">
            <span className="badge indicator-item badge-primary indicator-center w-40">
              Menu de capas
            </span>
            <div
              className={`card rounded-box grid  h-fit w-full grid-cols-1 grid-rows-3 place-content-center gap-x-5 border  border-primary bg-base-200 p-3 md:grid-cols-2 md:grid-rows-1`}
            >
              <div className="row-span-2 flex h-full items-center justify-center pt-6">
                <img
                  className="h-fit w-fit"
                  src={selectorCapas}
                  alt="controles-superiores"
                />
              </div>
              <ul className="flex w-full flex-col justify-center">
                <li>
                  <h4 className="font-bold text-primary ">
                    1 - Selector de Categoria
                  </h4>
                  Al clickear despliega las subcategorias.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    2 - Selector de Subcategorias
                  </h4>
                  Al clickear despliega las subcategorias si es que tiene, sino,
                  despliega las capas para mostrar.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    3 - Selector de Capas
                  </h4>
                  Cada capa posee un icono de check para mostrarse/ocultarse, y
                  un icono de llave para ver informacion detallada.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex  w-full items-center justify-between">
          <Link
            className="btn btn-primary my-10 flex w-28  text-white md:w-36"
            to={"/primerpaso"}
          >
            <MdNavigateBefore
              className="hidden md:block"
              color="#fff"
              size={"1.5rem"}
            />{" "}
            <p className=""> anterior</p>
            <MdNavigateBefore
              className=" md:hidden"
              color="#fff"
              size={"1.5rem"}
            />
          </Link>
          <Link
            className="btn btn-primary my-10 w-28 text-white md:w-36"
            to={"/tercerpaso"}
          >
            Siguiente <MdNavigateNext color="#fff" size={"1.5rem"} />
          </Link>
        </div>
        <Steps
          steps={["Controles", `Selectores de Capas`, "Controles de Mapa"]}
          completado={2}
        />
      </div>
    </div>
  );
};

export default stepTwo;
