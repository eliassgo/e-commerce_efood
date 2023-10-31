import React from 'react'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'
import image from '../../assets/images/image.png'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={image} alt="" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={image} alt="" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Prices>
          <h3>Valor total</h3>
          <span>R$ 182,70</span>
        </Prices>
        <button>Continuar com a entrega</button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
