import { Container, Contente } from './styles'

export type Props = {
  image: string
  type: string
  restaurant: string
}
const Banner = ({ image, type, restaurant }: Props) => (
  <Container style={{ backgroundImage: `url(${image})` }}>
    <Contente className="container">
      <h3>{type}</h3>
      <h1>{restaurant}</h1>
    </Contente>
  </Container>
)

export default Banner
