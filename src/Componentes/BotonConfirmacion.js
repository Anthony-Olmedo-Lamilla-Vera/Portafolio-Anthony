import React from "react";

function BotonConfirmacion(props) {
  return (
    <a href={props.link} target="_blank">
      <button target="_blank" href={props.link} className="btn-conf">
        {props.titulo}
      </button>
    </a>
  );
}

export default BotonConfirmacion;
