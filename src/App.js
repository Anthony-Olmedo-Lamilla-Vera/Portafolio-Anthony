import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacto from "./Pages/Contacto";
import Head from "./Pages/Head";
import Inicio from "./Pages/Inicio";
import Proyectos from "./Pages/Proyectos";
import "boxicons";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="cont-header">
            <div className="logo">ATC</div>
            <Head />
            <div className="user">
              <i class="bx bx-user"></i>
            </div>
          </div>
        </header>
      </div>
      <Switch>
        <Route path="/Portafolio-Anthony/" exact>
          <Inicio />
        </Route>
        <Route path="/Portafolio-Antox/Contacto" exact>
          <Contacto />
        </Route>
        <Route path="/Portafolio-Antox/Proyectos" exact>
          <Proyectos />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
