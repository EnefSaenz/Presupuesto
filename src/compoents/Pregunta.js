import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setPregunta }) => {
  // Definir el state
  const [cantidad, setCantidad] = useState(0);

  const [error, setError] = useState(false);

  // Función que define el presupuesto
  const definePresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  // Submit para definir el presupuesto
  const addPresupuesto = (e) => {
    e.preventDefault();

    //Validar presupuesto
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    // Continua
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setPregunta(false);
  };

  return (
    <Fragment>
      <h2>Ingresa tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto." /> : null}
      <form onSubmit={addPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupesto"
          onChange={definePresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  setRestante: PropTypes.func.isRequired,
  setPresupuesto: PropTypes.func.isRequired,
  setPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
