import React from 'react'
import { SidebarDePurchase } from './styles'
import { Forms, Row } from '../Delivery/styles'
import { SideBarButton } from '../Cart/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closePurchaseSection, finalizar } from '../../store/reducers/cart'

const Purchase = () => {
  const { openPurchase } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const handleButtonClick = () => {
    dispatch(closePurchaseSection())
  }

  const finallyButtonClick = () => {
    dispatch(finalizar())
  }
  return (
    <>
      <SidebarDePurchase className={openPurchase ? 'isVisible' : ''}>
        <h4>Pagamento - Valor a pagar R$ 190,90</h4>
        <Forms>
          <label htmlFor="cardName">Nome no cartão</label>
          <input id="cardName" type="text" name="cardName" />
          <Row>
            <div>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input id="cardNumber" type="text" name="cardNumber" />
            </div>
            <div>
              <label htmlFor="cardCode">CVV</label>
              <input id="cardCode" type="text" name="cardCode" />
            </div>
          </Row>
          <Row>
            <div>
              <label htmlFor="cardMonth">Mês de vencimento</label>
              <input id="cardMonth" type="text" name="cardMonth" />
            </div>
            <div>
              <label htmlFor="cardYear">Ano de vencimento</label>
              <input id="cardYear" type="text" name="cardYear" />
            </div>
          </Row>
        </Forms>
        <SideBarButton onClick={finallyButtonClick}>
          Finalizar Pagamento
        </SideBarButton>
        <SideBarButton onClick={handleButtonClick}>
          Voltar para a edição de endereço
        </SideBarButton>
      </SidebarDePurchase>
    </>
  )
}

export default Purchase
