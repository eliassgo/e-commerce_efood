import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'

import * as T from './styles'
import MenuButton from '../MenuButton'
import { SideBarPurchase, Forms, Row } from './styles'

import { MenuInterface } from '../../pages/Home'

import {
  closePurchaseSection,
  closeSideBarDelivery,
  finalizar,
  openPurchaseFuction
} from '../../store/reducers/cart'

import { usePurchaseMutation } from '../../services/api'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const Delivery = () => {
  const { openDelivery, openPurchase } = useSelector(
    (state: RootReducer) => state.cart
  )
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()

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

  const backHandleButtonClick = () => {
    dispatch(closeSideBarDelivery())
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardMonth: '',
      cardYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'o nome precisa ter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(5, 'O endereço precisa ter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
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
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: Number(values.zipCode),
            number: Number(values.number),
            complement: values.complement
          }
        },
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

  const handleButtonClick = () => {
    dispatch(openPurchaseFuction())
  }

  const BackDeliveryForm = () => {
    dispatch(closePurchaseSection())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(finalizar())
    }
  }, [dispatch, isSuccess])

  return (
    <>
      <T.SideBarDelivery
        title={'Entrega'}
        className={openDelivery ? 'isVisible' : ''}
      >
        <>
          <T.Forms onSubmit={form.handleSubmit}>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              id="receiver"
              type="text"
              name="receiver"
              value={form.values.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('receiver') ? 'error' : ''}
            />
            <label htmlFor="description">Endereço</label>
            <input
              id="description"
              type="text"
              name="description"
              value={form.values.description}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('description') ? 'error' : ''}
            />
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('city') ? 'error' : ''}
            />
            <T.Row>
              <div>
                <label htmlFor="zipCode">CEP</label>
                <InputMask
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('zipCode') ? 'error' : ''}
                  mask="99999-999"
                />
              </div>
              <div>
                <label htmlFor="number">Número</label>
                <InputMask
                  id="number"
                  type="text"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('number') ? 'error' : ''}
                  mask="999"
                />
              </div>
            </T.Row>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              id="complement"
              type="text"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
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
            disabled={isLoading}
          >
            Finalizar Pagamento
          </MenuButton>
          <MenuButton
            title="Clique aqui para Voltar para a edição de endereço"
            onClick={BackDeliveryForm}
          >
            Voltar para a edição de endereço
          </MenuButton>
        </>
      </SideBarPurchase>
    </>
  )
}

export default Delivery
