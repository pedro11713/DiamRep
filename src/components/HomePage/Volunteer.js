import React from "react";
import { Link } from "react-router-dom";

function Volunteer() {
  return (
    <div>
      <h2>Quer ser voluntário?</h2>
      <p>Inscreva-se para participar como voluntário no festival!</p>
      <Link to="/form-voluntario">Candidatura de Voluntário</Link> {/* ✅ Usa Link en lugar de <a> */}
    </div>
  );
}

export default Volunteer;
