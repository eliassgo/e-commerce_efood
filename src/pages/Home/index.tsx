import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

export type RestaurantObject = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<RestaurantObject[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((resp) => resp.json())
      .then((resp) => setRestaurants(resp))
  }, [])

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}
export default Home
