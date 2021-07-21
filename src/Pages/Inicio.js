import React from "react";
import Logos from "../Componentes/Logos";
import Banner from "../Secciones/Banner";
import Herramientas from "../Secciones/Herramientas";
import Presentacion from "../Secciones/Presentacion";
import Proyectos from "./Proyectos";
function Inicio() {
  return (
    <main>
      <section className="Redes-logos fondo">
        <Logos />
      </section>
      <section className="Presentacion fondo ">
        <Presentacion />
      </section>
      <section className="banner fondo ">
        <Banner />
      </section>
      <section className="Proyectos fondo section">
        <Proyectos />
      </section>
      <section className="Herramientas fondo section">
        <Herramientas />
      </section>
      <section className="Footer"></section>
    </main>
  );
}

export default Inicio;
