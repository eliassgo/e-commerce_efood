import { Container } from './styles'
import Restaurante from '../Restaurante'

const Listagem = () => (
  <div className="container">
    <Container>
      <Restaurante />
      <Restaurante />
      <Restaurante />
      <Restaurante />
    </Container>
  </div>
)

export default Listagem
