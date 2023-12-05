import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove, closeSideBarCart } from '../../store/reducers/cart'

import { FormataPreco } from '../Menu/index'

import {
  CartContainer,
  CartItem,
  MessageAlert,
  Overlay,
  Prices,
  SideBarButton,
  Sidebar
} from './styles'

import Delivery from '../Delivery'
import Purchase from '../Purchase'
import Finish from '../Finish'

export type Props = {
  title: string
}

const Cart = ({ title }: Props) => {
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
          <Sidebar className={openSide ? 'isVisible' : ''}>
            <h2>{title}</h2>
            <ul>
              {items.map((produto) => (
                <CartItem key={produto.id}>
                  <img src={produto.foto} alt="" />
                  <div>
                    <h3>{produto.nome}</h3>
                    <span>{FormataPreco(produto.preco)}</span>
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
              <span>{FormataPreco(getTotalPrice())}</span>
            </Prices>
            <SideBarButton
              onClick={handleButtonClick}
              type="button"
              title="Clique aqui para continuar com a compra"
            >
              Continuar com a entrega
            </SideBarButton>
          </Sidebar>
        </>
      ) : (
        <MessageAlert>
          <p>
            O carinho está vazio. Adicione pelo menos um produto para continuar
            com a compra
          </p>
        </MessageAlert>
      )}
      <Delivery />
      <Purchase />
      <Finish />
    </CartContainer>
  )
}

export default Cart
