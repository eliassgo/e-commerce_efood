import { Compra, Container, Title } from './styles'
import logo from '../../assets/images/logo.jpg'
import bannerImg from '../../assets/images/banner.jpg'

const Carrinho = () => (
  <div style={{ backgroundImage: `url(${bannerImg})` }}>
    <Container>
      <Title>Restaurantes</Title>
      <img src={logo} alt="logo 'efood" />
      <div>
        <Compra>0 produto(s) no carrinho</Compra>
      </div>
    </Container>
  </div>
)
export default Carrinho
