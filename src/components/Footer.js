import React, { useState } from "react";

function Footer() {
  const [mostrarAutores, setMostrarAutores] = useState(false);

  const handleClick = () => {
    setMostrarAutores(!mostrarAutores);
  };


  return (
    <footer onClick={handleClick}>
      {mostrarAutores ? (
        <p>Autores: Samuel Caldeira, Pedro Sena</p>
      ) : (
        <p>2025 Festival Vilar de Mouros. Todos os direitos reservados.</p>
      )}
    </footer>
  );
}

export default Footer;