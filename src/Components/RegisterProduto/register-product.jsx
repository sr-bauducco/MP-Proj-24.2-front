import './register-product'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <form>
        <h1>Registre o seu produto!</h1>
        <div className="input-field">
          <input className="card" type='text' placeholder='Nome'/>
        </div>
        <div className="input-field">
          <input className="card" type='number' placeholder='Preço'/>
        </div>
        <div className="input-field">
          <input className="card" type='text' placeholder='Categoria'/>
        </div>
        <div className="input-field">
          <input className="card" type='text' placeholder='Banco'/>
        </div>

        <button>Cadastrar Produto</button>

        <div className="signup-link">
          <p>
            Quer voltar para a pagina princial? <Link to="/">Clique Aqui</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register;
