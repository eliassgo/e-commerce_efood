import { Compra, Container, Title } from './styles'
import logo from '../../assets/images/logo.jpg'
import bannerImg from '../../assets/images/banner.jpg'
import { Link } from 'react-router-dom'

const Carrinho = () => (
  <div style={{ backgroundImage: `url(${bannerImg})` }}>
    <Container className="container">
      <Title>Restaurantes</Title>
      <Link to="/">
        <img src={logo} alt="logo 'efood" />
      </Link>
      <div>
        <Compra>0 produto(s) no carrinho</Compra>
      </div>
    </Container>
  </div>
)
export default Carrinho
