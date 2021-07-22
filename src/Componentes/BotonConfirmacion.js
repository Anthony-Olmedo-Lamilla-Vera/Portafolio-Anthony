import React from "react";

function BotonConfirmacion(props) {
  return (
    <button target="_blank" href={props.link} className="btn-conf">
      {props.titulo}
    </button>
  );
}

export default BotonConfirmacion;
