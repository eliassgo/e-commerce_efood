import React from 'react'
import { SideBarPurchase } from './styles'
import { Forms, Row } from '../Delivery/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closePurchaseSection, finalizar } from '../../store/reducers/cart'
import MenuButton from '../MenuButton'

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
      <SideBarPurchase
        title="Pagamento - Valor a pagar R$ 190,90"
        className={openPurchase ? 'isVisible' : ''}
      >
        <>
          <Forms>
            <label htmlFor="cardName">Nome no cartão</label>
            <input id="cardName" type="text" name="cardName" />
            <Row>
              <div className="width">
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
          <MenuButton
            title="Clique aqui para Finalizar Pagamento a compra"
            onClick={finallyButtonClick}
          >
            Finalizar Pagamento
          </MenuButton>
          <MenuButton
            title="Clique aqui para Voltar para a edição de endereço"
            onClick={handleButtonClick}
          >
            Voltar para a edição de endereço
          </MenuButton>
        </>
      </SideBarPurchase>
    </>
  )
}

export default Purchase
