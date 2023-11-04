import { useParams } from 'react-router-dom'

import MenuHeader from '../../components/MenuHeader'
import ScrollToTop from '../../components/ScrollToTop'
import Banner from '../../components/Banner'

import { useGetRestauranteCardapioQuery } from '../../services/api'
import Cardapio from '../../components/Menu'

const RestaurantePage = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetRestauranteCardapioQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <MenuHeader />
      <ScrollToTop />
      <Banner restaurant={restaurante} />
      <Cardapio menu={restaurante.cardapio} />
    </>
  )
}

export default RestaurantePage
