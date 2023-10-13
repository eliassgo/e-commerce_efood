import React, { useState } from 'react'
import close from '../../assets/images/close.png'

import {
  Button,
  Card,
  CardMenu,
  Close,
  Description,
  DescriptionCard,
  Imagem,
  Title
} from './styles'

type Props = {
  image: string
  title: string
  description: string
}

interface Product {
  id: number
  name: string
  description: string
  price: number
}

const Produto = ({ image, title, description }: Props) => {
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
    <Card>
      <div>
        <img src={image} alt={title} />
      </div>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button onClick={() => handleAddToCart(initialProduct)}>
        Adicionar ao carrinho
      </Button>

      {showProductDetails && selectedProduct && (
        <DescriptionCard className="overlay">
          <CardMenu className="container">
            <Close
              style={{ backgroundImage: `url(${close})` }}
              onClick={handleCloseDetails}
            ></Close>
            <Imagem style={{ backgroundImage: `url(${image})` }}></Imagem>

            <div>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <Button>Adicionar ao carrinho - R$60,90</Button>
            </div>
          </CardMenu>
        </DescriptionCard>
      )}
    </Card>
  )
}
export default Produto
