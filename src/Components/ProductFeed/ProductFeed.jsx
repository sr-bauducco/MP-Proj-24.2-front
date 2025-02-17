import { useState, useEffect } from "react";
import "./ProductFeed.css";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

console.log("Arquivo ProductFeed.jsx carregado!");

const ProductFeed = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [products, setProducts] = useState([]); // Corrigindo o nome da função
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
    fetch("http://localhost:8000/produtos/")
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }
        return response.json();
      })
      .then(data => setProducts(data)) // Corrigindo o erro no setProducts
      .catch(error => {
        console.error("Erro:", error);
        // Adicionando produtos mockados caso a requisição falhe
        setProducts([
          {
            id: 1,
            nome: "Maçã Vermelha",
            vendedor: "João Silva",
            descricao: "Maçãs frescas direto do produtor.",
            preco: 5.99,
            image: "https://via.placeholder.com/150"
          },
          {
            id: 2,
            nome: "Banana Prata",
            vendedor: "Maria Oliveira",
            descricao: "Bananas maduras e doces.",
            preco: 3.50,
            image: "https://via.placeholder.com/150"
          }
        ]);
      });
  }, []);

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

  return (
    <>
      <div className="container2">
        <header className="header2">
          <button className="profile-btn">
            <Link to='/usuario' className="mudacor"> Ir para o Perfil</Link>
          </button>
        </header>
      </div>

      <div className="feed-container">
        <header className="feed-header">
          <div>
            <h1>Produtos da Feira</h1>
            <div className="header-actions">
              <input type="search" placeholder="Buscar produtos..." className="search-input" />
              <button className="filter-button" onClick={toggleOptions}>Filtrar</button>

              {showOptions && (
                <ul className="options-list">
                  <li onClick={() => handleOptionClick('Feiras')}>Feiras</li>
                  <li onClick={() => handleOptionClick('Produtos')}>Produtos</li>
                  <li onClick={() => handleOptionClick('Banca')}>Banca</li>
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
                <img 
                  src={product.image} 
                  alt={product.nome} 
                  className="product-image"
                />
                <div className="product-info">
  <h3>{product.nome}</h3>
  <p className="seller-name">Vendedor: {product.vendedor}</p>
  <p className="product-description">{product.descricao}</p>
  <p className="product-price">
    R$ {(parseFloat(product.preco) || 0).toFixed(2)}  {/* Convertendo para número e aplicando toFixed */}
  </p>
  <div className="botoes">
    <button className="contact-button">Contactar Vendedor</button>
    <button className="contact-button" onClick={handleButtonClick}>
      Faça uma avaliação
    </button>
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
