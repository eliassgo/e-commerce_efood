import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  Button,
  CardMenu,
  Close,
  Container,
  Description,
  DescriptionCard,
  Title,
  Card
} from './styles'

import { MenuInterface } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'
import close from '../../assets/images/close.png'

export type Props = {
  menu: MenuInterface[]
}

export const FormataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Menu = ({ menu }: Props) => {
  const [modal, setModal] = useState({
    isVisible: false,
    selectedProduct: null as MenuInterface | null
  })

  const dispatch = useDispatch()

  const openModal = (produto: MenuInterface) => {
    setModal({
      isVisible: true,
      selectedProduct: produto
    })
  }

  const closeModal = () => {
    setModal({ isVisible: false, selectedProduct: null })
  }

  const addToCart = (produto: MenuInterface) => {
    dispatch(add(produto))
    dispatch(open())
    closeModal()
  }

  return (
    <div className="container">
      <Container>
        {menu.map((produto) => (
          <Card key={produto.id}>
            <div>
              <img src={produto.foto} alt={produto.nome} />
            </div>
            <Title>{produto.nome}</Title>
            <Description>{produto.descricao}</Description>
            <Button onClick={() => openModal(produto)}>
              Adicionar ao carrinho
            </Button>
          </Card>
        ))}
      </Container>
      {modal.isVisible && modal.selectedProduct && (
        <DescriptionCard className="visivel">
          <CardMenu className="container">
            <Close
              onClick={() => closeModal()}
              style={{ backgroundImage: `url(${close})` }}
            ></Close>
            <img src={modal.selectedProduct.foto} alt="" />
            <div>
              <Title>{modal.selectedProduct.nome}</Title>
              <Description>
                {modal.selectedProduct.descricao}
                <br />
                <br />
                Serve: de {modal.selectedProduct.porcao}
              </Description>
              <button
                type="button"
                onClick={() => addToCart(modal.selectedProduct!)}
              >
                Adicionar ao carrinho -{' '}
                {FormataPreco(modal.selectedProduct!.preco)}
              </button>
            </div>
          </CardMenu>
          <div onClick={() => closeModal()} className="overlay"></div>
        </DescriptionCard>
      )}
    </div>
  )
}

export default Menu
