import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Register from './Components/Register/register'; 
import Usuario from './Components/Usuario/usuario';
import ProductFeed from './Components/ProductFeed/ProductFeed';
import RegisterProduct from './Components/RegisterProduto/register-product';
import RegisterFeira from './Components/RegisterFeira/register-feira'; 
import RegisterBanca from './Components/RegisterBanca/register-banca'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/feed" element={<ProductFeed />} />
          <Route path="/register-product" element={<RegisterProduct />} />
          <Route path="/register-feira" element={<RegisterFeira />} />
          <Route path="/register-banca" element={<RegisterBanca />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
