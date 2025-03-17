import Artistasjson from "../artistas.json";
import Artista from "./Artista";

function Artistas() {
    return (
        <section>
            <h1>Ex. da Semana 4</h1>
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
        </section>
    );
}

export default Artistas;