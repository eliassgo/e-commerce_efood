import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

export interface MenuInterface {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type RestaurantObject = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuInterface[]
}

const Home = () => {
  const { data: restaurantsList } = useGetRestaurantsQuery()

  if (restaurantsList) {
    return (
      <>
        <Header />
        <RestaurantList restaurants={restaurantsList} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Home
