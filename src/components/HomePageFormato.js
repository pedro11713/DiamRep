import React from 'react'; // Importar React se necessário
import Schedule from "../components/Schedule";
import Welcome from "../components/Welcome";
import Volunteer from "../components/Volunteer";

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