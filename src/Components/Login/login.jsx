import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/feed"); // Navega para o feed após o login
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input 
            className="card" 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input 
            className="card" 
            type="password" 
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha</a>
        </div>
        <button type="submit">Entrar</button>
        <div className="signup-link">
          <p>
            Não tem uma conta? <Link to="/register">Registre-se</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
