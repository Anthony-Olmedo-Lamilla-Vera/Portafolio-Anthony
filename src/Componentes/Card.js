import React from "react";
import BotonConfirmacion from "./BotonConfirmacion";
function Card(props) {
  return (
    <div className="Cont-card">
      <div className="negro"></div>
      <div className="text-btn">
        <div className="header-card">
          <h2>E - Commerce</h2>
        </div>
        <div className="boton-card">
          <BotonConfirmacion titulo="Ver Repositorio" link={props.repo} />
          <BotonConfirmacion titulo="Ver Pagina " link={props.pagina} />
        </div>
      </div>
    </div>
  );
}

export default Card;
