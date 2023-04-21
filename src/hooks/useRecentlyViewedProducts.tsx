import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
  QueryFunction,
} from '@tanstack/react-query'

import { API } from '@/utils/API'
import { Product } from '@/utils/ProductData'

import { useAPI } from './useAPI'
import { useProducts } from './useProducts'
import { useMemo } from 'react'

const MAX_DISPLAY_QUANTITY = 6

export const useRecentlyViewedProducts = (initialData: Product[] = []) => {
  const queryClient = useQueryClient()

  const products = useProducts()
  const { request } = useAPI()

  const apiRoute = API.routes.recently

  const getRecentlyViewedProductsData: QueryFunction<Product[]> = async () => {
    const { data } = await request<Product[], never, never>(
      'get',
      apiRoute.list,
    )
    const reversedData = data.reverse()
    const filteredData = reversedData.filter(
      (_, index) => index < MAX_DISPLAY_QUANTITY,
    )

    return filteredData
  }
  const recentlyViewedProductsDataQuery = useQuery({
    queryKey: ['recently'],
    queryFn: getRecentlyViewedProductsData,
    initialData,
  })

  const createRecentlyViewedProduct: MutationFunction<
    unknown,
    Product
  > = async (newViewedProduct: Product) => {
    // to improve
    if (
      recentlyViewedProductsDataQuery.data.findIndex(
        ({ id }) => id === newViewedProduct.id,
      ) !== -1
    ) {
      console.log('delete')
      await request<unknown, never, never>(
        'delete',
        apiRoute.delete(newViewedProduct.id),
      )
    }

    const { data } = await request<unknown, Product, never>(
      'post',
      apiRoute.create,
      { data: newViewedProduct },
    )

    return data
  }

  const createRecentlyViewedProductMutation = useMutation({
    mutationKey: ['create recently viewed product'],
    mutationFn: createRecentlyViewedProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['recently'])
    },
    onError: (error) => {
      console.log('create recently viewed product', error)
    },
  })

  const deleteRecentlyViewedProduct: MutationFunction<
    unknown,
    Product['id']
  > = async (selectedViewedProductId: Product['id']) => {
    const { data } = await request<unknown, never, never>(
      'delete',
      apiRoute.delete(selectedViewedProductId),
    )
    return data
  }

  const deleteRecentlyViewedProductMutation = useMutation({
    mutationKey: ['delete recently viewed product'],
    mutationFn: deleteRecentlyViewedProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['recently'])
    },
  })

  return {
    query: recentlyViewedProductsDataQuery,
    create: createRecentlyViewedProductMutation,
    delete: deleteRecentlyViewedProductMutation,
  }
}