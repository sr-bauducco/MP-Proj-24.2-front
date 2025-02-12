import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <form>
        <h1>Crie sua conta</h1>
        <div className="input-field">
          <input className="card" type='text' placeholder='Nome completo'/>
        </div>
        <div className="input-field">
          <input className="card" type='email' placeholder='E-mail'/>
        </div>
        <div className="input-field">
          <input className="card" type='password' placeholder='Senha'/>
        </div>
        <div className="input-field">
          <input className="card" type='password' placeholder='Confirme sua senha'/>
        </div>
        <div className="input-field">
          <select className="card" name="opcao" defaultValue="cliente">
            <option value="cliente">Cliente</option>
            <option value="feirante">Feirante</option>
          </select>
        </div>

        <button>Cadastrar</button>

        <div className="signup-link">
          <p>
            Já tem uma conta? <Link to="/">Faça login</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register;
