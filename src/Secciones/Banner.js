import React from "react";
import Titulos from "../Componentes/Titulos";

function Banner() {
  return (
    <div className="cont-banner">
      <div className="header-banner">
        <Titulos titulo="Plataformas de Trabajo" />
      </div>
      <div className="contenido-banner">
        <div className="img--banner">
          <img
            src="https://sistemas.unmsm.edu.pe/site/images/slide/slide-sum.png"
            alt=""
          />
        </div>
        <div className="textos-banner">
          <h4>Desarrollos</h4>
          <li>
            {" "}
            <i class="bx bxs-navigation"></i>Diseño de Paginas Web
          </li>
          <li>
            <i class="bx bxs-navigation"></i> E- Commerce
          </li>
          <li>
            <i class="bx bxs-navigation"></i>Sistemas De Pagos En linea{" "}
          </li>
          <li>
            <i class="bx bxs-navigation"></i>Aplicaciones Android
          </li>
          <li>
            <i class="bx bxs-navigation"></i>Blogs Personales{" "}
          </li>
        </div>
        <div className="img--banner"></div>
      </div>
    </div>
  );
}

export default Banner;
