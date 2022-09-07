import React, { useEffect, useState } from "react";

const Steps = ({ steps, completado }) => {
  const [pasos, setPasos] = useState({});

  useEffect(() => {
    setPasos({ ...steps });
  }, [steps]);

  return (
    <div>
      <ul className="steps">
        {steps.map((step, index) => {
          return index < completado ? (
            <li key={index} className="step step-primary mx-2">
              {step}
            </li>
          ) : (
            <li key={index} className="step mx-2">
              {step}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Steps;
