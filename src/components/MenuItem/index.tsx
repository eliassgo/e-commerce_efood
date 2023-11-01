import React, { useState } from 'react'
import close from '../../assets/images/close.png'

import {
  Button,
  Card,
  CardMenu,
  Close,
  Description,
  DescriptionCard,
  Title
} from './styles'

type Props = {
  image: string
  title: string
  description: string
  price: number
  id: number
  porcao: string
}

export const FormataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Produto = ({ image, title, description, price, id, porcao }: Props) => {
  const [modal, setModal] = useState({
    isVisible: false
  })

  const closeModal = () => {
    setModal({ isVisible: false })
  }
  return (
    <Card key={id}>
      <div>
        <img src={image} alt={title} />
      </div>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button
        onClick={() =>
          setModal({
            isVisible: true
          })
        }
      >
        Adicionar ao carrinho
      </Button>

      <DescriptionCard className={modal.isVisible ? 'visivel' : ''}>
        <CardMenu className="container">
          <Close
            onClick={() => closeModal()}
            style={{ backgroundImage: `url(${close})` }}
          ></Close>
          <img src={image} alt="" />

          <div>
            <Title>{title}</Title>
            <Description>
              {description}
              <br />
              <br />
              Serve: de {porcao}
            </Description>
            <button>Adicionar ao carrinho - {FormataPreco(price)}</button>
          </div>
        </CardMenu>
        <div onClick={() => closeModal()} className="overlay"></div>
      </DescriptionCard>
    </Card>
  )
}
export default Produto
