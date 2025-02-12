import './register-feira'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <form>
        <h1>Registre sua Feira!</h1>
        <div className="input-field">
          <input className="card" type='text' placeholder='Nome'/>
        </div>
        <div className="input-field">
          <input className="card" type='text' placeholder='Descrição'/>
        </div>
        <div className="input-field">
          <input className="card" type='text' placeholder='Localização'/>
        </div>

        <button>Cadastrar Feira</button>

        <div className="signup-link">
          <p>
            Quer voltar para a pagina princial? <Link to="/feed">Clique Aqui</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register;
