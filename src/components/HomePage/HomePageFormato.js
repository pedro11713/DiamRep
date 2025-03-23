import React from "react"; // Importar React se necessário
import Schedule from "./Schedule";
import Welcome from "./Welcome";
import Volunteer from "./Volunteer";

function HomePageFormato() {
  return (
    <article className="row">
      <section className="column">
        <Schedule />
      </section>

      <section className="column">
        <Welcome />
      </section>

      <section className="column">
        <Volunteer />
      </section>
    </article>
  ); // Chave de fechamento do return e da função corrigida
}

export default HomePageFormato; // Exportar o componente com o nome corrigido
