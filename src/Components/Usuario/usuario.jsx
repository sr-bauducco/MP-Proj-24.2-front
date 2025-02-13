import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './usuario.css'; 

const Usuario = () => {
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    fotoPerfil: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUREvlCvHREdbT-Xsf2L2dmgO7AulT-6hqeDRUThJvVKKQwYuPwNatanNGyJiXSwubdlC8iTQHCPxOrsM-uuUCfg",
    dataCriacaoConta: "2020-06-15",
    listaDesejos: ["Notebook Gamer", "Fone Bluetooth", "Cadeira Ergonômica", "Monitor Ultrawide"],
  });

  const [erro, setErro] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Recupera o token salvo no localStorage após o login
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
          throw new Error("Usuário não autenticado. Faça login.");
        }

        const response = await fetch('http://localhost:8000/auth/login/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar os dados do usuário.");
        }

        const data = await response.json();

        setUsuario((prev) => ({
          ...prev,
          nome: data.user.username,
          email: data.user.email,
        }));
      } catch (error) {
        setErro(error.message);
      }
    };

    fetchUserData();
  }, []);

  // Calculando há quanto tempo tem a conta
  const dataCriacao = new Date(usuario.dataCriacaoConta);
  const agora = new Date();
  const anosDeConta = agora.getFullYear() - dataCriacao.getFullYear();

  return (
    <>
      <div className="container2">
        <header className="header3">
          <button className="profile-btn"><Link to='/register-feira' className="mudacor"> Cadastre uma feira </Link></button>
          <button className="profile-btn"><Link to='/register-product' className="mudacor afasta"> Cadastre um Produto</Link></button>
          <button className="profile-btn"><Link to='/feed' className="mudacor"> Ir para o Perfil</Link></button>
          <button className="profile-btn"><Link to='/register-banca' className="mudacor"> Cadastre uma Banca</Link></button>
        </header>
      </div>
      
      <div className="usuario-container">
        {/* Foto de Perfil */}
        <img src={usuario.fotoPerfil} className="foto-perfil" alt="Foto de perfil" />

        {/* Informações do Usuário */}
        <h2 className="nome-usuario">{usuario.nome}</h2>
        <p className="email-usuario">{usuario.email}</p>
        <p className="tempo-conta">Membro há {anosDeConta} anos</p>

        {/* Exibe erro se houver */}
        {erro && <p style={{ color: 'red' }}>{erro}</p>}

        {/* Lista de Desejos */}
        <div className="lista-desejos">
          <h3 className="titulo-lista">Lista de Desejos</h3>
          <ul>
            {usuario.listaDesejos.map((item, index) => (
              <li key={index} className="item-desejo">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Usuario;
