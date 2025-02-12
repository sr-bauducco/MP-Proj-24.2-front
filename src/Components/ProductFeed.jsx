import { useState } from "react";
import "./ProductFeed.css";

const ProductFeed = () => {
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

  return (
    <div className="feed-container">
      <header className="feed-header">
        <h1>Produtos da Feira</h1>
        <div className="header-actions">
          <input 
            type="search" 
            placeholder="Buscar produtos..." 
            className="search-input"
          />
          <button className="filter-button">Filtrar</button>
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
              <button className="contact-button">
                Contactar Vendedor
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeed;
