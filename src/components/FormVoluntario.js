import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação


const FormVoluntario = () => {
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [comentario, setComentario] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');
    const navigate = useNavigate();

    // Função para validar o formulário
    const validarTexto = (event) => {
        event.preventDefault(); // Evita o recarregamento da página

        // Validação básica
        if (!nome.trim() || !contato.trim() || !disponibilidade.trim()) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Exibe os dados no console (substitua por uma lógica de envio real)
        console.log('Dados do formulário:', { nome, contato, comentario, disponibilidade });

        // Limpa os campos após o envio
        setNome('');
        setContato('');
        setComentario('');
        setDisponibilidade('');

        // Redireciona para a homepage após o envio
        navigate('/');
    };

    return (
        <div className="form-container">
            <header>
                <h1>Candidatura</h1>
                <p>
                    <a id="voltar" href="/">Voltar</a>
                </p>
            </header>

            <form onSubmit={validarTexto}>
                <h3>Nome</h3>
                <textarea
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                ></textarea>

                <h3>Contacto</h3>
                <input
                    type="tel"
                    id="contato"
                    name="contato"
                    placeholder="+351-9..."
                    value={contato}
                    onChange={(e) => setContato(e.target.value)}
                    required
                />
                <br /><br />

                <h3>Comentários</h3>
                <textarea
                    name="comentario"
                    id="comment"
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                ></textarea>

                <h3>Disponibilidade</h3>
                <input
                    list="horarios"
                    name="disponibilidade"
                    value={disponibilidade}
                    onChange={(e) => setDisponibilidade(e.target.value)}
                    required
                />
                <datalist id="horarios">
                    <option value="de manhã" />
                    <option value="de tarde" />
                    <option value="de noite" />
                </datalist>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default FormVoluntario;