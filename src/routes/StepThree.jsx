import React, { useEffect, useState } from "react";
import logo from "../assets/logo-copade.jpg";

import Steps from "../components/Steps";
import margenSup from "../assets/margen-superior.png";
import margenDer from "../assets/margen-derecho.png";
import controlZoom from "../assets/zoom-distancia.png";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";

const stepThree = () => {
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
          completado={3}
        />

        <h1 className="py-10 text-3xl font-bold text-primary">
          Controles de Mapa
        </h1>
        <div className="mt-5 flex w-full flex-col">
          <div className="indicator w-full">
            <span className="badge indicator-item badge-primary indicator-center w-40">
              Margen superior
            </span>
            <div className="card rounded-box grid  h-fit w-full grid-cols-1 grid-rows-3 place-content-center gap-x-5 border  border-primary bg-base-200 p-3 md:grid-cols-2 md:grid-rows-1">
              <div className="flex h-full items-center justify-center">
                <img
                  className="h-28 w-fit"
                  src={margenSup}
                  alt="controles-superiores"
                />
              </div>
              <ul className="row-span-2 flex w-full flex-col justify-center">
                <li>
                  <h4 className="font-bold text-primary ">
                    1 - Medir distancia
                  </h4>
                  Mide la distancia apuntada en el mapa, para cambiar direccion
                  se utiliza el click izquierdo y se termina la seleccion con
                  click derecho.
                </li>
                <li>
                  <h4 className="font-bold text-primary">2 - Medir area</h4>
                  Mide el area establecida en km², se utiliza el click izquierdo
                  para seleccionar los lados de el area a medir, una vez cerrada
                  el area esta se establece y muestra el total.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    3 - Quitar mediciones
                  </h4>
                  Remueve todas las mediciones del mapa.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    4 - Informacion de capa
                  </h4>
                  Al clickear en una capa con esta herramienta seleccionada
                  muestra informacion de la capa (En las que este disponible).
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    5 - Resetear a vista inicial
                  </h4>
                  Resetea la vista del mapa a la posicion inicial, sobre la
                  provincia de Neuquen.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    6 - Descargar para imprimir (PNG)
                  </h4>
                  Genera una captura de la vista actual del mapa, con todas las
                  capas, mediciones y formas aplicadas.
                </li>
              </ul>
            </div>
          </div>
          <div className="divider"></div>
          <div className="indicator w-full">
            <span className="badge indicator-item badge-primary indicator-center w-40">
              Zoom y distancia
            </span>
            <div className="card rounded-box grid  h-full w-full grid-cols-1 grid-rows-2 place-content-center gap-x-5 border  border-primary bg-base-200 p-3 md:grid-cols-2 md:grid-rows-1">
              <div className=" flex h-full items-center justify-center">
                <img
                  className="mt-6 aspect-auto"
                  src={controlZoom}
                  alt="Controles de zoom del mapa."
                />
              </div>
              <ul className=" flex w-full flex-col justify-center">
                <li>
                  <h4 className="font-bold text-primary ">
                    1 - Acercar y Alejar
                  </h4>
                  Aumenta o disminuye la distancia de zoom del mapa.
                </li>
                <li>
                  <h4 className="font-bold text-primary">2 - Zoom manual</h4>
                  Cambia la distancia de zoom desplazando la barra. Con el boton
                  "E" se resetea la vista.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    3 - Activar Minimapa
                  </h4>
                  Muesta un minimapa con la ubicacion actual de la vista.
                </li>
              </ul>
            </div>
          </div>
          <div className="divider"></div>
          <div className="indicator w-full">
            <span className="badge indicator-item badge-primary indicator-center w-40">
              Margen derecho
            </span>
            <div className="card rounded-box grid  h-full w-full grid-cols-1 grid-rows-3 place-content-center gap-x-5 border  border-primary bg-base-200 p-3 md:grid-cols-2 md:grid-rows-1">
              <div className=" flex h-full items-center justify-center">
                <img
                  className="mt-6 aspect-auto"
                  src={margenDer}
                  alt="controles de margen derecho"
                />
              </div>
              <ul className="row-span-2 flex w-full flex-col justify-center">
                <li>
                  <h4 className="font-bold text-primary ">
                    1 - Pantalla completa
                  </h4>
                  Despliega el mapa en pantalla completa.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    2 - Herramientas de marcado en area
                  </h4>
                  Abre la lista de herramientas para crear areas de marcado.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    3 - Herramienta Circulo
                  </h4>
                  Dibuja un area en forma de circulo clickeando y arranstrando
                  el puntero.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    4 - Herramienta Linea
                  </h4>
                  Dibuja un area estableciendo lineas rectas con el click del
                  puntero.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    5 - Herramienta Area Flexible
                  </h4>
                  Genera un area a partir de los puntos clickeados.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    6 - Herramienta Estrella
                  </h4>
                  Genera un area en forma de estrella.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    7 - Herramienta Cuadrado
                  </h4>
                  Genera un area con forma cuadrada.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    8 - Herramienta Cuadrado expandible
                  </h4>
                  Genera un area con forma cuadrada el cual se expande desde el
                  punto donde se clickea y arrastra.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    9 - Herramienta Acercamiento en area.
                  </h4>
                  Teniendo presionada la tecla Shift del teclado acerca el mapa
                  a la zona marcada al desplazar el puntero.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    10 - Herramienta Borrar Todo
                  </h4>
                  Elimina todas las areas marcadas en el mapa.
                </li>
                <li>
                  <h4 className="font-bold text-primary">
                    11 - Herramienta Selector de borrado
                  </h4>
                  Borra el area seleccionada, clickeando dos veces.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end ">
          <Link className="btn btn-primary my-10 text-white" to={"/"}>
            Volver al inicio <MdNavigateNext color="#fff" size={"1.5rem"} />
          </Link>
        </div>
        <Steps
          steps={["Controles", `Selectores de Capas`, "Controles de Mapa"]}
          completado={3}
        />
      </div>
    </div>
  );
};

export default stepThree;
