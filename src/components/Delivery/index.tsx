import { useSelector, useDispatch } from 'react-redux'
import * as S from '../Cart/styles'
import * as T from './styles'
import { RootReducer } from '../../store'
import {
  closeSideBarCart,
  closeSideBarDelivery
} from '../../store/reducers/cart'

const Delivery = () => {
  const { openDelivery } = useSelector((state: RootReducer) => state.cart)

  const handleButtonClick = () => {
    dispatch(closeSideBarCart())
    dispatch(closeSideBarDelivery())
  }
  const backHandleButtonClick = () => {
    dispatch(closeSideBarDelivery())
  }

  const dispatch = useDispatch()
  return (
    <>
      <T.Sidebar className={openDelivery ? 'isVisible' : ''}>
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
        <S.SideBarButton onClick={handleButtonClick}>
          Continuar comprando
        </S.SideBarButton>
        <S.SideBarButton onClick={backHandleButtonClick}>
          Voltar para o carrinho
        </S.SideBarButton>
      </T.Sidebar>
    </>
  )
}

export default Delivery
