import React from "react";
import BotonConfirmacion from "./BotonConfirmacion";
function Card(props) {
  return (
    <div className="Cont-card">
      <div className="img-card">
        <img
          src="https://lh3.googleusercontent.com/pw/AM-JKLU83GgJtVYWCxXCOeLU0MS-Osis9K1_8SuugGcpgJOkK1vYn47Hao9y_OPx63uIth6L7F4q3vfCSwP_8G1iKQbh9AoLq5mHtxkr4m7kt1jVyf7FxgYOX99Zvmh6paUWi5-OdsbhlVtOwUKv0W66MF47=w1573-h663-no?authuser=0"
          alt=""
        />
      </div>
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
