import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SideBarPurchase } from './styles'
import { Forms, Row } from '../Delivery/styles'

import MenuButton from '../MenuButton'

import { RootReducer } from '../../store'
import { closePurchaseSection, finalizar } from '../../store/reducers/cart'

import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { MenuInterface } from '../../pages/Home'

const Purchase = () => {
  const { openPurchase } = useSelector((state: RootReducer) => state.cart)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const getTotalPrice = (items: MenuInterface[]) => {
    return items.reduce((acc, currentItem) => {
      if (currentItem.preco) {
        return (acc += currentItem.preco)
      }
      return 0
    }, 0)
  }

  const totalPrice = getTotalPrice(items)

  useEffect(() => {
    if (isSuccess) {
      dispatch(finalizar())
    }
  }, [dispatch, isSuccess])

  const handleButtonClick = () => {
    dispatch(closePurchaseSection())
  }

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardMonth: '',
      cardYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, 'o nome precisa ter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      cardMonth: Yup.string().required('O campo é obrigatório'),
      cardYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        payment: {
          card: {
            name: values.cardName,
            number: Number(values.cardNumber),
            code: Number(values.cardCode),
            expires: {
              month: Number(values.cardCode),
              year: Number(values.cardYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      <SideBarPurchase
        title={`Pagamento - Valor a pagar ${totalPrice}`}
        className={openPurchase ? 'isVisible' : ''}
      >
        <>
          <Forms onSubmit={form.handleSubmit}>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              id="cardName"
              type="text"
              name="cardName"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cardName') ? 'error' : ''}
              value={form.values.cardName}
            />
            <Row>
              <div className="width">
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardNumber}
                  mask="9999 9999 9999 9999"
                />
              </div>
              <div>
                <label htmlFor="cardCode">CVV</label>
                <InputMask
                  id="cardCode"
                  type="text"
                  name="cardCode"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardCode}
                  mask="999"
                />
              </div>
            </Row>
            <Row>
              <div>
                <label htmlFor="cardMonth">Mês de vencimento</label>
                <InputMask
                  id="cardMonth"
                  type="text"
                  name="cardMonth"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardMonth}
                  mask="99"
                />
              </div>
              <div>
                <label htmlFor="cardYear">Ano de vencimento</label>
                <InputMask
                  id="cardYear"
                  type="text"
                  name="cardYear"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardYear}
                  mask="99"
                />
              </div>
            </Row>
          </Forms>
          <MenuButton
            title="Clique aqui para Finalizar Pagamento a compra"
            onClick={form.handleSubmit}
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
