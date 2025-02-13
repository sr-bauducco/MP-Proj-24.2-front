import { useState } from "react";
import "./register-feira.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [localizacao, setLocalizacao] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que a página recarregue

    const feira = {
      nome,
      descricao,
      localizacao,
    };

    try {
      const response = await fetch("http://localhost:8000/feiras/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feira),
      });

      if (response.ok) {
        alert("Feira cadastrada com sucesso!");
        // Limpa os campos após o envio
        setNome("");
        setDescricao("");
        setLocalizacao("");
      } else {
        alert("Erro ao cadastrar feira.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar feira:", error);
      alert("Erro na requisição.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Registre sua Feira!</h1>

        <div className="input-field">
          <input 
            className="card" 
            type="text" 
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <input 
            className="card" 
            type="text" 
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <input 
            className="card" 
            type="text" 
            placeholder="Localização"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            required
          />
        </div>

        <button type="submit">Cadastrar Feira</button>

        <div className="signup-link">
          <p>
            Quer voltar para a página principal? <Link to="/feed">Clique Aqui</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
