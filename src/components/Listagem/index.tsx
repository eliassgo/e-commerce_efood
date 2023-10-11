import { Container } from './styles'
import Restaurante from '../Restaurante'
import Restaurant from '../../models/Restaurant'

export type Props = {
  restaurants: Restaurant[]
}

const Listagem = ({ restaurants }: Props) => (
  <div className="container">
    <Container>
      {restaurants.map((restaurant) => (
        <Restaurante
          category={restaurant.category}
          key={restaurant.id}
          image={restaurant.image}
          title={restaurant.title}
          score={restaurant.score}
          description={restaurant.description}
          to={restaurant.to}
        />
      ))}
    </Container>
  </div>
)

export default Listagem
