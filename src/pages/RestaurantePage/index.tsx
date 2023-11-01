import { useParams } from 'react-router-dom'

import MenuHeader from '../../components/MenuHeader'
import ScrollToTop from '../../components/ScrollToTop'
import Banner from '../../components/Banner'
import MenuList from '../../components/MenuList'

import { useGetRestauranteCardapioQuery } from '../../services/api'

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
      <MenuList menu={restaurante.cardapio} />
    </>
  )
}

export default RestaurantePage
