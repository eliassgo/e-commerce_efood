import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Carrinho from '../../components/CarrinhoHeader'
import ScrollToTop from '../../components/ScrollToTop'
import Banner from '../../components/Banner'
import ProdutoList from '../../components/Produtos'

import { Restaurant } from '../Home'

const RestaurantePage = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurant>()
  const [menu, setMenu] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resp) => resp.json())
      .then((resp) => setRestaurante(resp))

    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resp) => resp.json())
      .then((resp) => setMenu(resp))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Carrinho />
      <ScrollToTop />
      <Banner restaurant={restaurante} />
      <ProdutoList restaurants={menu} />
    </>
  )
}

export default RestaurantePage
