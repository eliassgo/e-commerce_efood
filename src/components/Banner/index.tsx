import { Container, Contente } from './styles'
import massa from '../../assets/images/massa.jpg'
const Banner = () => (
  <Container style={{ backgroundImage: `url(${massa})` }}>
    <Contente className="container">
      <h3>Italiana</h3>
      <h1>La Dolce Vita Trattoria</h1>
    </Contente>
  </Container>
)

export default Banner
