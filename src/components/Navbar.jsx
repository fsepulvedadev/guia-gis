import { useState } from "react";
import logo from "../assets/copade-logo.png";
import { TiSocialYoutube, TiSocialTwitter } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-center w-full copade-primary-bg h-20 text-white uppercase shadow-2xl">
      <div className="flex md:hidden w-full justify-between items-center">
        <Link to="/">
          <img className="w-16 py-4 ml-6" src={logo} alt="logo copade" />
        </Link>
        <CgMenu onClick={() => setShowMenu(true)} className="mr-4" size={32} />
      </div>

      <div className="hidden justify-evenly items-center h-full w-full md:flex">
        <div className="flex justify-center items-center w-1/3 h-full">
          <img className="w-14 py-3" src={logo} alt="logo copade" />
          <p className="w-1/2 pl-2 font-bold text-xs">
            SECRETARIA DE PLANIFICACION Y ACCION PARA EL DESARROLLO
          </p>
        </div>

        <div className="w-1/3 flex justify-center">
          <ul className="flex w-2/3 justify-evenly items-center h-full font-bold text-center">
            <li className="transition duration-400 hover:scale-110">
              <Link to="/">Inicio </Link>
            </li>
            <li className="transition duration-400 hover:scale-110">
              <Link to="/preguntas">Preguntados</Link>
            </li>
            <li className=" transition duration-400 hover:scale-110">
              <Link to="/guia">Guia</Link>
            </li>
          </ul>
        </div>
        <div className="flex w-1/3 justify-center h-full items-center">
          <a
            href="https://www.youtube.com/user/copadeneuquen"
            target="_blank"
            rel="nofollow"
          >
            <TiSocialYoutube
              className="ml-2 transition duration-400 hover:scale-125"
              size={22}
            />
          </a>
          <a
            href="https://twitter.com/copadeneuquen"
            target="_blank"
            rel="nofollow"
          >
            <TiSocialTwitter
              className="ml-2 transition duration-400 hover:scale-125"
              size={22}
            />
          </a>
          <a
            href="https://www.facebook.com/copade.neuquen"
            target="_blank"
            rel="nofollow"
          >
            <FaFacebook
              className="ml-2 transition duration-400 hover:scale-125"
              size={18}
            />
          </a>
          <a
            href="https://www.instagram.com/copadeneuquen/"
            target="_blank"
            rel="nofollow"
          >
            <AiFillInstagram
              className="ml-2 transition duration-400 hover:scale-125"
              size={20}
            />
          </a>
        </div>
      </div>
      <div
        className={`absolute transition-all duration-900  h-screen w-full copade-primary-bg ${
          showMenu ? "left-0" : " left-[5000px]"
        }`}
      >
        <IoClose
          onClick={() => setShowMenu(false)}
          className="absolute right-3 top-3"
          size={40}
        />
        <ul className="flex flex-col w-full justify-start mt-20 items-center h-full font-bold text-center">
          <li
            onClick={() => {
              setShowMenu(false);
            }}
            className="transition duration-400 hover:scale-125"
          >
            <Link to="/">Inicio </Link>
          </li>
          <li
            onClick={() => {
              setShowMenu(false);
            }}
            className=" transition mt-4 duration-400 hover:scale-125"
          >
            <Link to="/preguntas">Preguntados</Link>
          </li>
          <li
            onClick={() => {
              setShowMenu(false);
            }}
            className="transition mt-4 duration-400 hover:scale-125"
          >
            <Link to="/info">Info</Link>
          </li>
          <li className="mt-48">
            <Link to="/">
              <img className="flex self-end w-16" src={logo} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
