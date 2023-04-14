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
    user: (param?: string | number) => ({
      data: `/user/${param ?? ''}`,
      update: `/user/${param ?? ''}`,
      delete: `/user/${param ?? ''}`,
      list: '/users',
      login: '/login',
      register: '/users',
    }),
    products: (param?: string | number) => ({
      list: '/products',
      data: `/products/${param ?? ''}`,
      create: '/products',
      update: `/products/${param ?? ''}`,
      delete: `/products/${param ?? ''}`,
    }),
  },
  intervals: {},
  requestTimeout: {},
  retries: {},
  staleTimes: {},
}
