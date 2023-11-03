import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'

import { close, remove } from '../../store/reducers/cart'
import { FormataPreco } from '../Cardapio/index'

const Cart = () => {
  const dispatch = useDispatch()

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, valorAtual) => {
      return (acc += valorAtual.preco)
    }, 0)
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((produto) => (
            <CartItem key={produto.id}>
              <img src={produto.foto} alt="" />
              <div>
                <h3>{produto.nome}</h3>
                <span>{FormataPreco(produto.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(produto.id)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <h3>Valor total</h3>
          <span>{FormataPreco(getTotalPrice())}</span>
        </Prices>
        <button type="button">Continuar com a entrega</button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
