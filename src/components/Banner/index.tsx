import { Container, Contente } from './styles'

export type Props = {
  restaurant: RestaurantObject
}

const Banner = ({ restaurant }: Props) => (
  <Container style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <Contente>
      <h3>{restaurant.tipo}</h3>
      <h1>{restaurant.titulo}</h1>
    </Contente>
  </Container>
)

export default Banner
