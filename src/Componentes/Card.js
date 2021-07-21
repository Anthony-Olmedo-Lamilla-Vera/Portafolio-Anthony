import React from "react";
import BotonConfirmacion from "./BotonConfirmacion";
function Card() {
  return (
    <div className="Cont-card">
      <div className="negro"></div>
      <div className="text-btn">
        <div className="header-card">
          <h2>E - Commerce</h2>
        </div>
        <div className="boton-card">
          <BotonConfirmacion titulo="Ver Repositorio " />
          <BotonConfirmacion titulo="Ver Pagina " />
        </div>
      </div>
    </div>
  );
}

export default Card;
