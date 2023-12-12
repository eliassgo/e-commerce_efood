import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

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
