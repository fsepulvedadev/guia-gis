import React from "react";
import Steps from "../components/Steps";
import controlesSup from "../assets/controles-superiores.png";
import controlesInt from "../assets/controles-intermedios.png";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";

const stepOne = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-11/12 flex-col items-center py-6">
        <Steps
          steps={["Controles", `Selectores de Capas`, "Controles de Mapa"]}
          completado={1}
        />

        <h1 className="py-10 text-3xl font-bold text-primary">Controles</h1>
        <div className="mt-5 flex w-full flex-col">
          <div className="indicator w-full">
            <span className="badge indicator-item badge-primary indicator-center w-40">
              Controles superiores
            </span>
            <div className="card rounded-box grid  h-fit w-full grid-cols-1 grid-rows-2 place-content-center gap-x-5 border  border-primary bg-base-200 p-3 md:grid-cols-2 md:grid-rows-1">
              <div className="flex h-full items-center justify-center">
                <img
                  className="h-28 w-fit"
                  src={controlesSup}
                  alt="controles-superiores"
                />
              </div>
              <ul className="flex w-full flex-col justify-center">
                <li>
                  <h4 className="font-bold text-primary ">
                    1 - Selector de Mapas de fondo
                  </h4>
                  Al clickear se desplega y se muestra una lista de mapas para
                  mostrar de fondo en el visor.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    2 - Mostrar por Categoria
                  </h4>
                  Muestra en el visor todas las capas de la categoria
                  seleccionada.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    3 - Ir al mapa de Ecopuntos
                  </h4>
                  Redirecciona al{" "}
                  <a
                    href="http://giscopade.neuquen.gov.ar/sig_copade/Ecopuntos/"
                    target="_blank"
                    className="text-secondary"
                  >
                    Visor SIG de Ecopuntos.
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider"></div>
          <div className="indicator w-full">
            <span className="badge indicator-item badge-primary indicator-center w-40">
              Controles intermedios
            </span>
            <div className="card rounded-box grid  h-full w-full grid-cols-1 grid-rows-4 place-content-center gap-x-5 border  border-primary bg-base-200 p-3 md:grid-cols-2 md:grid-rows-1">
              <div className="flex h-full items-center justify-center">
                <img
                  className="h-28 w-fit"
                  src={controlesInt}
                  alt="controlesInt"
                />
              </div>
              <ul className="row-span-3 flex w-full flex-col justify-center">
                <li>
                  <h4 className="font-bold text-primary ">1 - Agregar capas</h4>
                  Al clickear muestra un buscado para agregar una capa
                  determinada.
                </li>
                <li>
                  <h4 className="font-bold text-primary">2 - Imprimir</h4>
                  Al clickear muestra un menu de impresion donde se puede elegir
                  el formato de impresion y la resolucion. Tambien cuenta con un
                  boton para exportarlo como PDF.
                </li>
                <li>
                  <h4 className="font-bold text-primary">3 - Filtrar</h4>
                  Al clickear despliega el menu de filtro con los siguientes
                  campos
                  <ul className=" pl-10">
                    <li>- Nombre/s de la/s capa/s a filtrar</li>
                    <li>- Atributo por el cual se desea filtrar</li>
                    <li>- Valor por el cual se desea buscar</li>
                  </ul>
                </li>
                <li>
                  <h4 className="font-bold text-primary">4 - Limpiar Capas</h4>
                  Quita todas las capas que esten aplicadas al visor.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    5 - Coordenadas del cursor
                  </h4>
                  Muestra en tiempo real la ubicacion en coordenadas de donde se
                  esta apuntando con el cursor.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end ">
          <Link
            className="btn btn-primary my-10 text-white"
            to={"/segundopaso"}
          >
            Siguiente Paso <MdNavigateNext color="#fff" size={"1.5rem"} />
          </Link>
        </div>
        <Steps
          steps={["Controles", `Selectores de Capas`, "Controles de Mapa"]}
          completado={1}
        />
      </div>
    </div>
  );
};

export default stepOne;
