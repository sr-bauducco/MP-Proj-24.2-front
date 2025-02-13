import { useState } from 'react';
import { Link } from "react-router-dom";
import './register-banca.css';

const Register = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [endereço, setEndereço] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [dono, setDono] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const bancaData = {
      nome,
      descricao,
      endereço,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      dono
    };

    try {
      const response = await fetch('http://localhost:8000/bancas/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Supondo que você tenha um sistema de autenticação JWT
        },
        body: JSON.stringify(bancaData),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar a banca');
      }

      const data = await response.json();
      alert('Banca cadastrada com sucesso!');
      setNome('');
      setDescricao('');
      setLatitude('');
      setLongitude('');
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Registre sua Banca!</h1>
        
        <div className="input-field">
          <input
            className="card"
            type='text'
            placeholder='Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        
        <div className="input-field">
          <input
            className="card"
            type='text'
            placeholder='Descrição'
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <input
            className="card"
            type='text'
            placeholder='Endereço'
            value={endereço}
            onChange={(e) => setEndereço(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <input
            className="card"
            type='number'
            placeholder='Latitude'
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
          <input
            className="card"
            type='number'
            placeholder='Longitude'
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
            <input
            className="card"
            type='number'
            placeholder='Dono'
            value={dono}
            onChange={(e) => setDono(e.target.value)}
            required
          />
        </div>
        
        


        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        
        <button type="submit">Cadastrar Banca</button>

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
