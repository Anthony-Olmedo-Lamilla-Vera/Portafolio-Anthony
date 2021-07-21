import React from "react";
import "boxicons";

function Logos() {
  return (
    <div className="cont-redes">
      <p>Siguenos en nuestras redes: </p>
      <nav>
        <li>
          <a href="http://">
            <i class="bx bxl-facebook-circle"></i>
          </a>
        </li>
        <li>
          <a href="http://">
            <i class="bx bxl-github"></i>
          </a>
        </li>
        <li>
          <a href="http://">
            <i class="bx bxl-whatsapp"></i>
          </a>
        </li>
        <li>
          <a href="http://">
            <i class="bx bxl-instagram-alt"></i>
          </a>
        </li>
        <li>
          <a href="http://">
            <i class="bx bxl-twitter"></i>
          </a>
        </li>
      </nav>
    </div>
  );
}

export default Logos;
