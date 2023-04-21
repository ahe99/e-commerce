const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

/**
 * @description this is for SSR
 */
export const SERVER = {
  request: <TResponse = unknown>(
    route: string,
    config?: RequestInit,
  ): Promise<TResponse> =>
    fetch(`${API_BASE_URL}${route}`, {
      ...config,
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => data as TResponse),
}

export const API = {
  baseURL: API_BASE_URL,

  routes: {
    user: {
      data: (param: string | number) => `/user/${param ?? ''}`,
      update: (param: string | number) => `/user/${param ?? ''}`,
      delete: (param: string | number) => `/user/${param ?? ''}`,
      list: '/users',
      login: '/login',
      register: '/users',
    },
    products: {
      list: '/products',
      data: (param: string | number) => `/products/${param ?? ''}`,
      create: '/products',
      update: (param: string | number) => `/products/${param ?? ''}`,
      delete: (param: string | number) => `/products/${param ?? ''}`,
    },
    recently: {
      list: '/recently',
      create: '/recently',
      delete: (param: string | number) => `/recently/${param}`,
    },
    cart: {
      list: '/cart',
      create: '/cart',
      update: (param: string | number) => `/cart/${param}`,
      delete: (param: string | number) => `/cart/${param}`,
    },
  },
  intervals: {},
  requestTimeout: {},
  retries: {},
  staleTimes: {},
}
