import React, { useState } from 'react'
import './App.css'

interface Product {
  id: number
  name: string
  description: string
  price: number
}

const App: React.FC = () => {
  const initialProduct: Product = {
    id: 1,
    name: 'Exemplo de Produto',
    description: 'Descrição do exemplo de produto.',
    price: 19.99
  }

  const [showProductDetails, setShowProductDetails] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product)
    setShowProductDetails(true)
  }

  const handleCloseDetails = () => {
    setShowProductDetails(false)
  }

  return (
    <div className="App">
      <h1>Produtos</h1>
      <div className="product-card">
        <h2>{initialProduct.name}</h2>
        <p>{initialProduct.description}</p>
        <p>Preço: R${initialProduct.price.toFixed(2)}</p>
        <button onClick={() => handleAddToCart(initialProduct)}>
          Adicionar ao Carrinho
        </button>
      </div>

      {showProductDetails && selectedProduct && (
        <div className="overlay">
          <div className="product-details">
            <h2>Detalhes do Produto</h2>
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p>Preço: R${selectedProduct.price.toFixed(2)}</p>
            <button onClick={handleCloseDetails}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
