import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Register from './Components/Register/register'; // Assumindo que este é o caminho do seu componente Register
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;