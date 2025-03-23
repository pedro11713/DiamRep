import React from "react";
import CampoTexto from "./CampoTexto";
import CampoContato from "./CampoContato";
import CampoComentario from "./CampoComentario";
import CampoDisponibilidade from "./CampoDisponibilidade";
import BotaoVoltar from "./BotaoVoltar";

function Formulario() {
  return (
    <div>
      <header>
        <h1>Candidatura</h1> 
        <BotaoVoltar />
      </header>

      <form method="GET">
        <CampoTexto label="Nome" name="nome" />
        <CampoContato />
        <CampoComentario />
        <CampoDisponibilidade />
        
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Formulario;
