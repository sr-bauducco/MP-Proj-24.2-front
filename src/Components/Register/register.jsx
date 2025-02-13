import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  
  // Estado para os campos do formulário
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("cliente");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }

    const userData = { username, email, password, role };

    try {
      const response = await fetch('http://localhost:8000/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Usuário registrado com sucesso
        const data = await response.json();
        // Você pode redirecionar o usuário para a página de login ou login automático
        navigate("/login");
      } else {
        // Erro no backend
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Erro ao registrar usuário");
      }
    } catch (error) {
      setErrorMessage("Erro de rede ou servidor");
      console.error("Erro ao registrar:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Crie sua conta</h1>
        <div className="input-field">
          <input 
            className="card" 
            type="text" 
            placeholder="Nome completo"
            value={username}
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
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
            type="password" 
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </div>
        <div className="input-field">
          <select 
            className="card" 
            name="opcao" 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="cliente">Cliente</option>
            <option value="feirante">Feirante</option>
            <option value="administrador">Administrador</option>
          </select>
        </div>

        <button type="submit">Cadastrar</button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="signup-link">
          <p>
            Já tem uma conta? <Link to="/">Faça login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
