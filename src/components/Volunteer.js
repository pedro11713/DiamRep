import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
function Volunteer() {
     const navigate = useNavigate();
  return (
    <div>
      <h2>Quer ser voluntário?</h2>
      <p>Inscreva-se para participar como voluntário no festival!</p>
         <Link to="/form-voluntario">Candidatura de Voluntário</Link>
    </div>
  );
}

export default Volunteer;
