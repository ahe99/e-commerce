'use client'
import { Box } from '@chakra-ui/react'
import { MdShoppingCart } from 'react-icons/md'
import Link from 'next/link'

const ROUTES = [
  {
    id: 'home',
    name: 'home',
    route: '/',
  },
  {
    id: 'products',
    name: 'products',
    route: '/products',
  },
]

export const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between bg-slate-400 px-10">
      <Box className="flex flex-row items-center gap-2">
        <h1 className="flex-shrink-0 border-r-2 border-slate-200 pr-2 text-2xl text-slate-800">
          e-commerce
        </h1>
        <ul className="flex flex-row items-center gap-2">
          {ROUTES.map(({ id, name, route }) => (
            <NavItem key={id} name={name} route={route} />
          ))}
        </ul>
      </Box>
      <Box className="flex flex-row gap-4">
        <Link
          href="cart"
          className="text-2xl text-slate-800 hover:cursor-pointer hover:text-slate-400"
        >
          <MdShoppingCart />
        </Link>
        <Box
          className="text-amber-800
        hover:cursor-pointer
        hover:text-amber-400
        hover:underline"
        >
          <Link href="login">logout</Link>
        </Box>
      </Box>
    </header>
  )
}
const NavItem = ({ name, route }: { name: string; route: string }) => {
  return (
    <li className="text-slate-800 hover:cursor-pointer hover:text-slate-400 hover:underline">
      <Link href={route}>{name}</Link>
    </li>
  )
}
