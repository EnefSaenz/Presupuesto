import React, { useState, useEffect } from "react";
import ControlPresupuesto from "./compoents/ControlPresupuesto";
import Formulario from "./compoents/Formulario";
import Listado from "./compoents/Listado";
import Pregunta from "./compoents/Pregunta";

function App() {
  // Definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState(0);
  const [crearGasto, setCrearGasto] = useState(false);

  // Use Effect que actualiza el restante
  useEffect(() => {
    if (crearGasto) {
      // Agrega el nuevo presupuesto
      setGastos([...gastos, gasto]);
      setCrearGasto(false);

      // Resta del presupuesto actual
      setRestante(restante - gasto.monto);
    }
  }, [crearGasto, restante, gastos, gasto]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
