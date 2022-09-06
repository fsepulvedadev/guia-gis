import React from "react";
import logo from "../assets/copade-logo.png";
import { TiSocialYoutube, TiSocialTwitter } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div class="custom-shape-divider-bottom-1661257728 md:top-20 top-40 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="flex-col md:flex md:flex-row items-center md:justify-around w-full h-fit pb-6 copade-primary-bg text-white mt-40  md:mt-20">
        <div className="flex flex-col justify-center items-center md:w-1/3">
          <img className="w-20 mt-7 md:mt-0" src={logo} alt="" />
          <ul className="flex justify-between pt-6 w-1/5">
            <li>
              <TiSocialYoutube />
            </li>
            <li>
              <TiSocialTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <AiFillInstagram />
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:w-1/3 pt-4  ">
          <h2 className="uppercase font-bold md:mb-8 mb-4">Contacto</h2>
          <ul className="text-center">
            <li>www.copade.gob.ar</li>
            <li>Antartida Argentina 1245 (CAM)</li>
            <li>Edificio 2 Piso 4 - C.P. 8300</li>
            <li>(299) 449 5661</li>
            <li>info@copade.gov.ar</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:w-1/3 pt-4">
          <h2 className="uppercase font-bold">Ubicacion</h2>
          <div className="flex justify-center w-full h-full">
            <iframe
              className="mt-4"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.0870040776786!2d-68.08028018489583!3d-38.94484070737495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33bdd3d55447%3A0xbcac8648cb67f2ef!2sCam%20(Centro%20administrativo%20Ministerial)!5e0!3m2!1ses!2sar!4v1661254036199!5m2!1ses!2sar"
              width="200"
              height="150"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
