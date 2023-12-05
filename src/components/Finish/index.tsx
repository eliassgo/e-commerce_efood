import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Finalizacao } from './styles'
import { clear, close } from '../../store/reducers/cart'
import { SideBarButton } from '../Cart/styles'

const Finish = () => {
  const { openFinalizar } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const handleButtonClick = () => {
    dispatch(clear())
    dispatch(close())
  }
  return (
    <>
      <Finalizacao className={openFinalizar ? 'isVisible' : ''}>
        <h4>Pedido realizado - ORDER_ID</h4>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <br />
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <br />
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <br />
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <SideBarButton onClick={handleButtonClick}>Concluir</SideBarButton>
      </Finalizacao>
    </>
  )
}

export default Finish
