import { useParams } from 'react-router-dom'

import MenuHeader from '../../components/MenuHeader'
import ScrollToTop from '../../components/ScrollToTop'
import Banner from '../../components/Banner'

import { useGetRestauranteCardapioQuery } from '../../services/api'
import Menu from '../../components/Menu'
import Loader from '../../components/Loader'

type RestaurantParams = {
  id: string
}

const RestaurantePage = () => {
  const { id } = useParams() as RestaurantParams

  const { data: restaurante } = useGetRestauranteCardapioQuery(id)

  if (!restaurante) {
    return <Loader />
  }
  return (
    <>
      <MenuHeader />
      <ScrollToTop />
      <Banner restaurant={restaurante} />
      <Menu menu={restaurante.cardapio} />
    </>
  )
}

export default RestaurantePage
