import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MenuHeader from '../../components/MenuHeader'
import ScrollToTop from '../../components/ScrollToTop'
import Banner from '../../components/Banner'
import MenuList from '../../components/MenuList'

import { RestaurantObject } from '../Home'

const RestaurantePage = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<RestaurantObject>()
  const [menu, setMenu] = useState<RestaurantObject[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resp) => resp.json())
      .then((resp) => setRestaurante(resp))

    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resp) => resp.json())
      .then((resp) => {
        if (Array.isArray(resp)) {
          setMenu(resp)
        } else {
          console.error('Os dados do menu não são um array válido')
        }
      })
      .catch((error) => {
        console.error('Error na requisição à API:', error)
      })
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <MenuHeader />
      <ScrollToTop />
      <Banner restaurant={restaurante} />
      <MenuList menu={menu} />
    </>
  )
}

export default RestaurantePage
