import { useSelector, useDispatch } from 'react-redux'

import { RootReducer } from '../../store'

import * as T from './styles'
import MenuButton from '../MenuButton'

import {
  closeSideBarDelivery,
  openPurchaseFuction
} from '../../store/reducers/cart'

import { usePurchaseMutation } from '../../services/api'

import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect } from 'react'

const Delivery = () => {
  const { openDelivery } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const handleButtonClick = () => {
    form.handleSubmit()
    dispatch(openPurchaseFuction())
  }

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
      complement: ''
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
      number: Yup.string().required('O campo é obrigatório')
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
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(openPurchaseFuction())
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
    </>
  )
}

export default Delivery
