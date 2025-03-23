import Artistasjson from "../../artistas.json";
import Artista from "./Artista";

function Artistas() {
  return (
    <div>
      {Artistasjson.vetorartistas.map((artista) => (
        <Artista
          nome={artista.nome}
          imagem={artista.imagem}
          estilo={artista.estilo}
          descricao={artista.descricao}
          urlVideo={artista.urlVideo}
          data={artista.data}
          hora={artista.hora}
        />
      ))}
    </div>
  );
}

export default Artistas;
