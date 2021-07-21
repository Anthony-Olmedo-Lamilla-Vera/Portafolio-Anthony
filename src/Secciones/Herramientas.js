import React from "react";
import Titulos from "../Componentes/Titulos";

function Herramientas() {
  return (
    <div className="Cont-Herramientas ">
      <div className="head--herramientas alinearcentro">
        <Titulos titulo="Herramientas" />
      </div>
      <div className="Contenido--Herramientas">
        <div className="logos-Herramientas">
          <li>
            <i class="bx bxl-javascript"></i>
            <i class="bx bxl-python"></i>
            <i class="bx bxl-react"></i>
            <i class="bx bxl-git"></i>
            <i class="bx bxl-html5"></i>
            <i class="bx bxl-css3"></i>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Herramientas;
