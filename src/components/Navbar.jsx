import logo from "../assets/copade-logo.png";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="copade-primary-bg navbar text-white">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              onClick={() => {
                setOpenNav(!openNav);
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            className={`copade-primary-bg ${
              openNav ? "block" : "hidden"
            } menu rounded-box menu-compact absolute  z-10 mt-3 block w-52 p-2 shadow`}
          >
            <li>
              <Link
                onClick={() => {
                  setOpenNav(false);
                }}
                to={"/"}
              >
                Inicio
              </Link>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Pasos
                <svg
                  className="rotate-90 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="bg-primary p-2">
                <li
                  onClick={() => {
                    setOpenNav(false);
                  }}
                >
                  <Link to={"/1"}>1er</Link>
                </li>
                <li
                  onClick={() => {
                    setOpenNav(false);
                  }}
                >
                  <Link to={"/2"}>2do</Link>
                </li>
                <li
                  onClick={() => {
                    setOpenNav(false);
                  }}
                >
                  <Link to={"/3"}>3er</Link>
                </li>
              </ul>
            </li>
            <li>
              <a>Volver a COPADE</a>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <div className="ml-8 hidden h-full w-full items-center justify-center md:flex">
            <img className="w-14 py-3" src={logo} alt="logo copade" />
            <p className="hidden w-full pl-2 text-xs font-bold md:block">
              SECRETARIA DE PLANIFICACION <br /> Y ACCION PARA EL DESARROLLO
            </p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link
              onClick={() => {
                setOpenNav(false);
              }}
              to={"/"}
            >
              Inicio
            </Link>
          </li>

          <li tabIndex={0}>
            <a className="justify-between">
              Pasos
              <svg
                className="rotate-90 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul className="z-10 bg-primary p-2">
              <li>
                <Link to={"/1"}>Controles</Link>
              </li>
              <li>
                <Link to={"/2"}>Selectores de Capas</Link>
              </li>
              <li>
                <Link to={"/3"}>Controles de Mapa</Link>
              </li>
            </ul>
          </li>
          <li></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/"}>
          <img className="mr-6 w-14 md:hidden " src={logo} alt="logo copade" />
        </Link>
        <a
          href="https://www.copade.gob.ar/"
          className="btn btn-ghost hidden items-center justify-between md:flex"
        >
          Volver a COPADE <HiOutlineHome fontSize={"1.1rem"} color="white" />{" "}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
