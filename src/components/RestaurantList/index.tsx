import { Container } from './styles'
import RestauranteItem from '../RestauranteItem'
import Loader from '../Loader'

export type Props = {
  restaurants: RestaurantObject[]
  isLoading: boolean
}

const RestaurantList = ({ restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <Container>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <RestauranteItem
              title={restaurant.titulo}
              destacado={restaurant.destacado}
              category={restaurant.tipo}
              score={restaurant.avaliacao}
              description={restaurant.descricao}
              image={restaurant.capa}
              to={restaurant.id}
            />
          </li>
        ))}
      </Container>
    </div>
  )
}
export default RestaurantList
