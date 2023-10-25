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
  price: number
  id: number
  porcao: string
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
            isVisible: false
          })
        }
      >
        Adicionar ao carrinho
      </Button>

      <DescriptionCard className={modal.isVisible ? 'visivel' : ''}>
        <CardMenu className="container">
          <Close style={{ backgroundImage: `url(${close})` }}></Close>
          <Imagem style={{ backgroundImage: `url(${image})` }}></Imagem>

          <div>
            <Title>{title}</Title>
            <Description>
              {description}
              <br />
              {porcao}
            </Description>
            <Button>Adicionar ao carrinho - {price}</Button>
          </div>
        </CardMenu>
        <div onClick={() => closeModal()} className="overlay"></div>
      </DescriptionCard>
    </Card>
  )
}
export default Produto
