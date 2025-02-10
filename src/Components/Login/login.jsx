

const Login = () => {
  return (
    <div className="container">
      <form>
        <h1>Acesse o sistema</h1>
        <div>
          <input type='email' placeholder='E-mail'/>
        </div>
        <div>
          <input type='password' placeholder='Senha'/>
        </div>
        <button>Entrar</button>
      </form>
    </div>
  )
}

export default Login
