import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {email, password, username}
    
    try {
      // Enviando as credenciais para a API de login
      console.log(credentials);
      const response = await fetch('http://localhost:8000/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Agora, armazenamos o token de acesso, não o 'token' genérico
        const token = data.access; // Acessar o token de acesso retornado
        
        // Armazenar o token no localStorage
        localStorage.setItem("authToken", token);
      
        // Navegar para a página do feed
        navigate("/feed");
      } else {
        // Se a resposta não for ok, mostrar erro
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Erro ao fazer login");
      }
    } catch (error) {
      setErrorMessage("Erro de rede ou servidor");
      console.error("Erro ao fazer login:", error);
    }
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
        <div className="input-field">
          <input 
            className="card" 
            type="username" 
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
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
