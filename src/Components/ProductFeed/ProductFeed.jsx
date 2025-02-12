import { useState } from "react";
import "./ProductFeed.css";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Não renderiza o modal se isOpen for false

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Escreva algo:</h2>
        <textarea placeholder="Digite aqui..." />
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,  // Espera um booleano
  onClose: PropTypes.func.isRequired, // Espera uma função
};

const ProductFeed = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false); 
  };

  const [products] = useState([
    {
      id: 1,
      name: "Tomate Orgânico",
      seller: "Maria da Feira",
      price: 8.99,
      image: "/api/placeholder/200/200",
      description: "Tomates frescos cultivados sem agrotóxicos"
    },
    {
      id: 2,
      name: "Alface Crespa",
      seller: "João do Verde",
      price: 4.50,
      image: "/api/placeholder/200/200",
      description: "Alface crespa fresca colhida hoje"
    },
    {
      id: 3,
      name: "Cenoura Orgânica",
      seller: "Ana Produtos Naturais",
      price: 5.99,
      image: "/api/placeholder/200/200",
      description: "Cenouras orgânicas cultivadas em solo fértil"
    }
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <>
      <div className="container2">
        <header className="header2">
          <button className="profile-btn"><Link to='/usuario' className="mudacor"> Ir para o Perfil</Link></button>
        </header>
      </div>

      <div className="feed-container">
        <header className="feed-header">
        <div>
        <h1>Produtos da Feira</h1>
        <div className="header-actions">
          <input
            type="search"
            placeholder="Buscar produtos..."
            className="search-input"
          />
          <button className="filter-button" onClick={toggleOptions}>
            Filtrar
          </button>

          {showOptions && (
            <ul className="options-list">
              <li onClick={() => handleOptionClick('Feiras')}>Feiras</li>
              <li onClick={() => handleOptionClick('Produtos')}>Produtos</li>
              <li onClick={() => handleOptionClick('Produtos')}>Banca</li>
              <li onClick={() => handleOptionClick('Tudo')}>Tudo</li>
            </ul>
          )}

          {selectedOption && <p>Opção selecionada: {selectedOption}</p>}
        </div>
      </div>
        </header>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="seller-name">Vendedor: {product.seller}</p>
                <p className="product-description">{product.description}</p>
                <p className="product-price">
                  R$ {product.price.toFixed(2)}
                </p>
                <div className="botoes">
                  <button className="contact-button">
                    Contactar Vendedor
                  </button>
                  <button className="contact-button" onClick={handleButtonClick}>Faça uma avaliação</button>
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductFeed;