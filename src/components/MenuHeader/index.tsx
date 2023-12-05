import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open, openDeliveryHeader } from '../../store/reducers/cart'

import { Compra, Container, Title } from './styles'
import logo from '../../assets/images/logo.jpg'
import bannerImg from '../../assets/images/banner.jpg'

const Carrinho = () => {
  const dispatch = useDispatch()

  const { items, openDelivery } = useSelector(
    (state: RootReducer) => state.cart
  )

  const openCart = () => {
    openDelivery ? dispatch(openDeliveryHeader()) : dispatch(open())
  }

  return (
    <div style={{ backgroundImage: `url(${bannerImg})` }}>
      <Container className="container">
        <Title>Restaurantes</Title>
        <Link to="/">
          <img src={logo} alt="logo 'efood" />
        </Link>
        <div>
          <Compra onClick={openCart} href="#">
            {' '}
            {items.length} produto(s) no carrinho
          </Compra>
        </div>
      </Container>
    </div>
  )
}

export default Carrinho
