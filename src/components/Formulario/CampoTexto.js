import React from "react";

function CampoTexto({ label, name }) {
  return (
    <div>
      <h3>{label}</h3>
      <textarea name={name}></textarea>
    </div>
  );
}

export default CampoTexto;
