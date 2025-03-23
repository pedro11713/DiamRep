function Artista({ nome, imagem, estilo, descricao, data, hora, urlVideo }) {
    return (
        <section>
            <p id="nomeArtista">Nome: {nome}</p>
            <p>Atuação: {data} as {hora}</p>
            <img src={imagem} onClick={() => handleClick({nome}) }/>
            <br/>
            <iframe src={urlVideo} id={nome} style={{display:"none", margin:"auto"}}></iframe>
            <p>Estilo musical: {estilo}</p>
            <p>{descricao}</p>
        </section>
    );
}

function handleClick({nome}){
const target = document.getElementById(nome)
if(target.style.display==="none"){
    target.style.display="block"
} else { target.style.display = "none" }


}
export default Artista;