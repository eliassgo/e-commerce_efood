import { Compra, Container, Title } from './styles'
import logo from '../../assets/images/logo.jpg'
import bannerImg from '../../assets/images/banner.jpg'

const Carrinho = () => (
  <>
    <Container style={{ backgroundImage: `url(${bannerImg})` }}>
      <Title>Restaurantes</Title>
      <img src={logo} alt="logo 'efood" />
      <div>
        <Compra>0 produto(s) no carrinho</Compra>
      </div>
    </Container>
  </>
)
export default Carrinho
