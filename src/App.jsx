import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Register from './Components/Register/register'; 
import ProductFeed from './Components/ProductFeed/ProductFeed'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element={<ProductFeed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
