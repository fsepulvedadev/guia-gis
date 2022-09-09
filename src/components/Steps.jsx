import React from "react";
import { Link } from "react-router-dom";
const Steps = ({ steps, completado }) => {
  return (
    <div>
      <ul className="steps">
        {steps.map((step, index) => {
          return index < completado ? (
            <li key={index} className="step step-primary mx-2 text-primary">
              <Link className="" to={`/${index + 1}`}>
                {step}
              </Link>
            </li>
          ) : (
            <li key={index} className="step mx-2 text-primary">
              <Link className="" to={`/${index + 1}`}>
                {step}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Steps;
