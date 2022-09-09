import React, { useEffect, useState } from "react";
import Steps from "../components/Steps";
import selectorCapas from "../assets/selector-capas.png";
import { Link } from "react-router-dom";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import logo from "../assets/logo-copade.jpg";

const stepTwo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <div className="flex h-72 flex-col items-center justify-center">
      <img className="w-28 animate-bounce" src={logo} alt="Cargando..." />
      <p className="text-l mt-10 font-bold text-[#0098db]">Cargando...</p>
    </div>
  ) : (
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
                    3 - Selector de segunda Subcategoria
                  </h4>
                  En caso de estar disponible se muestran estas categorias
                  dentro de las subcategorias.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    4 - Selector de Capas
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
            to={"/1"}
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
            to={"/3"}
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
