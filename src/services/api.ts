import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantObject } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantObject[], void>({
      query: () => 'restaurantes'
    }),
    getRestauranteCardapio: builder.query<RestaurantObject, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestauranteCardapioQuery } = api

export default api
