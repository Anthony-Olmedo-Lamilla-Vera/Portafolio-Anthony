import React from "react";
import BotonConfirmacion from "../Componentes/BotonConfirmacion";
function Presentacion() {
  return (
    <div className="cont--presentacion">
      <div className="img-presentacion">
        <img
          src="https://img.freepik.com/vector-gratis/desarrollo-web-ingenieria-programadores-sitio-web-codificacion-pantallas-interfaz-realidad-aumentada-desarrollador-ingeniero-proyectos-software-programacion-o-diseno-aplicaciones-ilustracion-dibujos-animados_107791-3863.jpg?size=626&ext=jpg"
          alt=""
        />
      </div>
      <div className=" text-presentacion">
        <div className="cont--text text">
          <div className="title-text">
            <span className="Nombres">Hola ! Soy Anthony Lamilla </span>
            <span className="Profesion">Futuro Frontend Developer</span>
          </div>
          <p>Bienvenidos a mi portafolio</p>
          <p>Encontraras de Todo, Me estoy especializando. </p>{" "}
          <p> a continuacion veras más de mis proyectos realizados...</p>
          <div className="button-cv">
            <BotonConfirmacion titulo="Descargar CV" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentacion;
