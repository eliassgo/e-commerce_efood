import { Container } from './styles'
import Restaurante from '../Restaurante'
import { Restaurant } from '../../pages/Home'

export type Props = {
  restaurants: Restaurant[]
}

const Listagem = ({ restaurants }: Props) => {
  return (
    <div className="container">
      <Container>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Restaurante
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
export default Listagem
