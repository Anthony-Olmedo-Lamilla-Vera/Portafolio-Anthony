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
            <a
              href="https://ugye-my.sharepoint.com/:b:/g/personal/anthony_lamillav_ug_edu_ec/EbrMK17LP79JunjtmpEhxh0B2Vfh9L3RW7WZaw_5UpPTuA?e=82JRzk"
              download
              target="_blank"
            >
              <BotonConfirmacion titulo="Curriculum vitae" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentacion;
