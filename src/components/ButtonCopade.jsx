import React from "react";

const ButtonCopade = ({ nombre }) => {
  return (
    <button className=" copade-primary-bg hover:bg-blue-300 rounded p-2 text-white border-none font-bold">
      {nombre}
    </button>
  );
};

export default ButtonCopade;
