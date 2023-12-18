import Header from '../../components/Header'
import Loader from '../../components/Loader'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantsList, isLoading: isLoadingRestaurant } =
    useGetRestaurantsQuery()

  if (restaurantsList) {
    return (
      <>
        <Header />
        <RestaurantList
          restaurants={restaurantsList}
          isLoading={isLoadingRestaurant}
        />
      </>
    )
  }

  return <Loader />
}
export default Home
