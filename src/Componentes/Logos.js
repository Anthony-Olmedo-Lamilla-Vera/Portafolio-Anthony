import React from "react";
import "boxicons";

function Logos() {
  return (
    <div className="cont-redes">
      <p>Siguenos en nuestras redes: </p>
      <nav>
        <li>
          <a href="https://www.facebook.com/anthonnylamilla/" target="_blank">
            <i class="bx bxl-facebook-circle"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Antocraxx" target="_blank">
            <i class="bx bxl-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+5930960847188/?text=Hola!, Como estas?, me gustaria trabajar en proyecto contigo"
            target="_blank"
          >
            <i class="bx bxl-whatsapp"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/thonnylv.05/" target="_blank">
            <i class="bx bxl-instagram-alt"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ANTHONY67952617" target="_blank">
            <i class="bx bxl-twitter"></i>
          </a>
        </li>
      </nav>
    </div>
  );
}

export default Logos;
