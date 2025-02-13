import { useState } from "react";
import "./register-product.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [banca, setBanca] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que a página recarregue

    const produto = {
      nome,
      preco: parseFloat(preco), // Converte o preço para número
      categoria,
      banca
    };

    try {
      const response = await fetch("http://localhost:8000/produtos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      });

      if (response.ok) {
        alert("Produto cadastrado com sucesso!");
        // Limpa os campos após o envio
        setNome("");
        setPreco("");
        setCategoria("");
        setBanca("");
      } else {
        alert("Erro ao cadastrar produto.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
      alert("Erro na requisição.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Registre o seu produto!</h1>

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
            type="number" 
            placeholder="Preço"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <input 
            className="card" 
            type="text" 
            placeholder="Categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <input 
            className="card" 
            type="text" 
            placeholder="Banca"
            value={banca}
            onChange={(e) => setBanca(e.target.value)}
            required
          />
        </div>

        <button type="submit">Cadastrar Produto</button>

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
