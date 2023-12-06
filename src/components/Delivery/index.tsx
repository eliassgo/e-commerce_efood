import { useSelector, useDispatch } from 'react-redux'

import { RootReducer } from '../../store'

import * as T from './styles'
import MenuButton from '../MenuButton'

import {
  closeSideBarDelivery,
  openPurchaseFuction
} from '../../store/reducers/cart'

import { usePurchaseMutation } from '../../services/api'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const Delivery = () => {
  const { openDelivery, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [purchase] = usePurchaseMutation()
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
      fullName: '',
      address: '',
      city: '',
      cityCode: '',
      number: 0,
      plussAdress: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'o nome precisa ter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cityCode: Yup.string().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          name: values.fullName,
          address: values.address,
          city: values.city,
          cityCode: values.cityCode,
          number: values.number,
          plussAdress: values.plussAdress
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
      <T.SideBarDelivery
        title="Entrega"
        className={openDelivery ? 'isVisible' : ''}
      >
        <>
          <T.Forms onSubmit={form.handleSubmit}>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''}
            />
            <label htmlFor="address">Endereço</label>
            <input
              id="address"
              type="text"
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('address') ? 'error' : ''}
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
                <label htmlFor="cityCode">CEP</label>
                <input
                  id="cityCode"
                  type="text"
                  name="cityCode"
                  value={form.values.cityCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cityCode') ? 'error' : ''}
                />
              </div>
              <div>
                <label htmlFor="number">Número</label>
                <input
                  id="number"
                  type="number"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('number') ? 'error' : ''}
                />
              </div>
            </T.Row>
            <label htmlFor="plussAdress">Complemento (opcional)</label>
            <input
              id="plussAdress"
              type="text"
              name="plussAdress"
              value={form.values.plussAdress}
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
