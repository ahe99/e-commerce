import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
  QueryFunction,
} from '@tanstack/react-query'

import { useAPI } from './useAPI'

import { API } from '@/utils/API'
import { Product } from '@/utils/ProductData'

const MAX_DISPLAY_QUANTITY = 6

export const useRecentlyViewedProducts = (initialData: Product[] = []) => {
  const queryClient = useQueryClient()

  const { request } = useAPI()

  const apiRoute = API.routes.recently

  const getRecentlyViewedProductsData: QueryFunction<Product[]> = async () => {
    const { data } = await request<Product[], never, never>(
      'get',
      apiRoute.list,
    )
    const filteredData = data.filter((_, index) => index < MAX_DISPLAY_QUANTITY)

    return filteredData
  }
  const recentlyViewedProductsDataQuery = useQuery({
    queryKey: ['products'],
    queryFn: getRecentlyViewedProductsData,
    initialData,
  })

  const createRecentlyViewedProduct: MutationFunction<
    unknown,
    Product
  > = async (newViewdProduct: Product) => {
    const { data } = await request<unknown, Product, never>(
      'post',
      apiRoute.create,
      { data: newViewdProduct },
    )

    return data
  }
  const createRecentlyViewedProductQuery = useMutation({
    mutationKey: ['create recently viewed product'],
    mutationFn: createRecentlyViewedProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['products'])
    },
  })

  return {
    query: recentlyViewedProductsDataQuery,
    create: createRecentlyViewedProductQuery,
  }
}
