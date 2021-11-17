import React, { useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

import Error from "./Error";

const Formulario = ({ setGasto, setCrearGasto }) => {
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState(0);
  const [error, setError] = useState(false);

  // Función que agrega el gasto
  const addGasto = (e) => {
    e.preventDefault();

    // Validación
    if (monto < 1 || isNaN(monto) || nombre.trim() === "") {
      setError(true);
      return;
    }

    // Continua
    setError(false);

    // Contruir el gasto
    const gasto = {
      nombre,
      monto,
      id: shortid.generate(),
    };

    // Agregar el gasto
    setGasto(gasto);
    setCrearGasto(true);

    // Resetear formulario
    setNombre("");
    setMonto(0);
  };

  return (
    <form onSubmit={addGasto}>
      <h2>Agrega tus gastos aquí</h2>

      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" />
      ) : null}

      <div className="campo">
        <label>Nombre Gasto: </label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Monto Gasto: </label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 400"
          value={monto}
          onChange={(e) => setMonto(parseInt(e.target.value), 10)}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
