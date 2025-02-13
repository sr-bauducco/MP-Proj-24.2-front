import { useState, useEffect } from "react";
import "./register-product.css";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const ProductFeed = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false); 
  };

  const handleButtonClick = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Requisição para pegar produtos do backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/produtos");
        const data = await response.json();
        console.log(data); // Verificar se os dados estão sendo recebidos corretamente
        setProducts(data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchProducts();
  }, []); // O array vazio [] garante que a requisição seja feita apenas uma vez

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
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-card">
                {/* Remover a imagem, pois não será mais usada */}
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
            ))
          ) : (
            <p>Carregando produtos...</p> 
          )}
        </div>
      </div>
    </>
  );
};

export default ProductFeed;
