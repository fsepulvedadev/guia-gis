import logo from "../assets/copade-logo.png";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar copade-primary-bg text-white">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
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
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow copade-primary-bg rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Inicio de la Guia</Link>
            </li>

            <li>
              <a>Volver a COPADE</a>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <div className="hidden md:flex justify-center items-center ml-8 w-full h-full">
            <img className="w-14 py-3" src={logo} alt="logo copade" />
            <p className="md:block hidden w-full pl-2 font-bold text-xs">
              SECRETARIA DE PLANIFICACION <br /> Y ACCION PARA EL DESARROLLO
            </p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>

          <li tabIndex={0}>
            <a className="justify-between">
              Pasos
              <svg
                className="fill-current rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-primary">
              <li>
                <Link to={"/primerpaso"}>Controles superiores</Link>
              </li>
              <li>
                <Link to={"/segundopaso"}>Controles Intermedios</Link>
              </li>
              <li>
                <Link to={"/tercerpaso"}>Controles de Mapa</Link>
              </li>
            </ul>
          </li>
          <li></li>
        </ul>
      </div>
      <div className="navbar-end">
        <img className="w-14 mr-6 md:hidden " src={logo} alt="logo copade" />
        <a
          href="https://www.copade.gob.ar/"
          className="btn btn-ghost hidden md:flex justify-between items-center"
        >
          Volver a COPADE <HiOutlineHome fontSize={"1.1rem"} color="white" />{" "}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
