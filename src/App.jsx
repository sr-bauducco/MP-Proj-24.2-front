import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Register from './Components/Register/register'; // Assumindo que este é o caminho do seu componente Register
import RegisterProduct from './Components/RegisterProduto/register-product'
import RegisterFeira from './Components/RegisterFeira/register-feira'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-product" element={<RegisterProduct />} />
          <Route path="/register-feira" element={<RegisterFeira />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;