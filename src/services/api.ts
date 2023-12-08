import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantObject } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products?: Product[]
  delivery?: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: number
      number: number
      complement?: string
    }
  }
  payment?: {
    card: {
      name: string
      number: number
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponde = {
  orderId: string
}

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
    }),
    purchase: builder.mutation<PurchaseResponde, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestauranteCardapioQuery,
  usePurchaseMutation
} = api

export default api
