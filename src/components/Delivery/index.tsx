import { useSelector, useDispatch } from 'react-redux'
import * as T from './styles'
import { RootReducer } from '../../store'
import {
  closeSideBarDelivery,
  openPurchaseFuction
} from '../../store/reducers/cart'
import MenuButton from '../MenuButton'

const Delivery = () => {
  const { openDelivery } = useSelector((state: RootReducer) => state.cart)

  const handleButtonClick = () => {
    dispatch(openPurchaseFuction())
  }

  const backHandleButtonClick = () => {
    dispatch(closeSideBarDelivery())
  }

  const dispatch = useDispatch()
  return (
    <>
      <T.SideBarDelivery
        title="Entrega"
        className={openDelivery ? 'isVisible' : ''}
      >
        <>
          <T.Forms>
            <label htmlFor="fullName">Quem irá receber</label>
            <input id="fullName" type="text" name="fullName" />
            <label htmlFor="address">Endereço</label>
            <input id="address" type="text" name="address" />
            <label htmlFor="city">Cidade</label>
            <input id="city" type="text" name="city" />
            <T.Row>
              <div>
                <label htmlFor="cityCode">CEP</label>
                <input id="cityCode" type="text" name="cityCode" />
              </div>
              <div>
                <label htmlFor="number">Número</label>
                <input id="number" type="number" name="number" />
              </div>
            </T.Row>
            <label htmlFor="plussAdress">Complemento (opcional)</label>
            <input id="plussAdress" type="text" name="plussAdress" />
          </T.Forms>
          <MenuButton
            onClick={handleButtonClick}
            title="Clique aqui para continuar com a compra"
          >
            Continuar comprando
          </MenuButton>
          <MenuButton
            onClick={backHandleButtonClick}
            title="Clique aqui para continuar voltar ao carrinho"
          >
            Voltar para o carrinho
          </MenuButton>
        </>
      </T.SideBarDelivery>
    </>
  )
}

export default Delivery
