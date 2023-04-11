const API_BASE_URL = process.env.API_BASE_URL

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
      list: '/posts',
      data: `/posts/${param ?? ''}`,
      create: '/posts',
      update: `/posts/${param ?? ''}`,
      delete: `/posts/${param ?? ''}`,
    }),
  },
  intervals: {},
  requestTimeout: {},
  retries: {},
  staleTimes: {},
}
