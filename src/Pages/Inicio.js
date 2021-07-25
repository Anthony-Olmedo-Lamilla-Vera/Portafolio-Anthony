import React from "react";
import Logos from "../Componentes/Logos";
import Banner from "../Secciones/Banner";
import "boxicons";

import Herramientas from "../Secciones/Herramientas";
import Presentacion from "../Secciones/Presentacion";
import Footer from "./Footer";
import Proyectos from "./Proyectos";
function Inicio() {
  return (
    <main>
      <section className="Redes-logos fondo">
        <Logos />
      </section>
      <div className="regresar">
        <a href="#Inicio">
          <i class="bx bx-chevrons-up"></i>
        </a>
      </div>
      <section id="Inicio" className="Presentacion fondo ">
        <Presentacion />
      </section>
      <section id="Herramientas" className="banner fondo ">
        <Banner />
      </section>
      <section id="Proyectos" className="Proyectos fondo section">
        <Proyectos />
      </section>
      <section id="Vermas" className="Herramientas fondo section">
        <Herramientas />
      </section>
      <section className="Footer">
        <Footer />
      </section>
    </main>
  );
}

export default Inicio;
