import { useEffect, useState } from 'react'

import Hero from '../../components/Hero'
import Listagem from '../../components/Listagem'

export type Restaurant = {
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
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((resp) => resp.json())
      .then((resp) => setRestaurants(resp))
  }, [])

  return (
    <>
      <Hero />
      <Listagem restaurants={restaurants} />
    </>
  )
}
export default Home
