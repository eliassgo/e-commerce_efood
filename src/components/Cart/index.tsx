import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove, closeSideBarCart } from '../../store/reducers/cart'
import MenuButton from '../MenuButton'

import {
  CartContainer,
  CartItem,
  MessageAlert,
  Overlay,
  Prices,
  SideBarCart
} from './styles'

import Checkout from '../Checkout'
import { ParseToBRL } from '../../utils'

const Cart = () => {
  const { isOpen, items, openSide } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const handleButtonClick = () => {
    dispatch(closeSideBarCart())
  }

  const closeCart = () => {
    openSide ? dispatch(close()) : ''
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
      {items.length > 0 ? (
        <>
          <SideBarCart className={openSide ? 'isVisible' : ''}>
            <>
              <ul>
                {items.map((produto) => (
                  <CartItem key={produto.id}>
                    <img src={produto.foto} alt="" />
                    <div>
                      <h3>{produto.nome}</h3>
                      <span>{ParseToBRL(produto.preco)}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(produto.id)}
                    />
                  </CartItem>
                ))}
              </ul>
              <Prices>
                <h3>Valor total</h3>
                <span>{ParseToBRL(getTotalPrice())}</span>
              </Prices>
              <MenuButton
                type="button"
                title="Clique aqui para continuar com a compra"
                onClick={handleButtonClick}
              >
                Continuar com a entrega
              </MenuButton>
            </>
          </SideBarCart>
        </>
      ) : (
        <MessageAlert>
          <p>
            O carinho está vazio. Adicione pelo menos um produto para continuar
            com a compra
          </p>
        </MessageAlert>
      )}
      <Checkout />
    </CartContainer>
  )
}

export default Cart
