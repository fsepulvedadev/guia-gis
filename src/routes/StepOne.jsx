import React from "react";
import Steps from "../components/Steps";
import controlesSup from "../assets/controles-superiores.png";

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
          <div className="card  rounded-box grid h-56 w-full grid-cols-2 grid-rows-1 place-content-center gap-x-5 bg-base-200">
            <div className="flex h-full items-center justify-center">
              <img
                className="h-28 w-fit"
                src={controlesSup}
                alt="controles-superiores"
              />
            </div>
            <ol className="flex w-full flex-col justify-center">
              <li>
                <h4 className="font-bold text-primary">
                  1 - Selector de Mapas de fondo
                </h4>
                Al clickear se desplega y se muestra una lista de mapas para
                mostrar de fondo en el visor
              </li>
              <li>
                <h4 className="font-bold text-primary">
                  2 - Mostrar por Categoria
                </h4>
                Muestra en el visor todas las capas de la categoria seleccionada
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
                  Visor SIG de Ecopuntos
                </a>
              </li>
            </ol>
          </div>
          <div className="divider"></div>
          <div className="card rounded-box grid h-20 place-items-center bg-base-200">
            content
          </div>
        </div>
      </div>
    </div>
  );
};

export default stepOne;
