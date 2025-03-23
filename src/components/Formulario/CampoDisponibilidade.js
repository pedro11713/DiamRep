import React from "react";

function CampoDisponibilidade() {
  return (
    <div>
      <h3>Disponibilidade</h3>
      <input list="horarios" name="disponibilidade" />
      <datalist id="horarios">
        <option value="de manhã" />
        <option value="de tarde" />
        <option value="de noite" />
      </datalist>
    </div>
  );
}

export default CampoDisponibilidade;
