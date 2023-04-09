'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, Stack } from '@chakra-ui/react'
import Link from 'next/link'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-200">
        <CacheProvider>
          <ChakraProvider>
            <Header />
            {children}
            <Footer />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}

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

const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between bg-slate-400 px-10">
      <Box className="flex flex-row items-center gap-2">
        <h1 className="border-r-2 border-slate-200 pr-2 text-2xl text-slate-800">
          e-commerce
        </h1>
        <ul className="flex flex-row items-center gap-2">
          {ROUTES.map(({ id, name, route }) => (
            <NavItem key={id} name={name} route={route} />
          ))}
        </ul>
      </Box>
      <Box
        className="text-amber-800
        hover:cursor-pointer
        hover:text-amber-400
        hover:underline"
      >
        <Link href="login">logout</Link>
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
const Footer = () => {
  return (
    <footer className="h-20 bg-slate-600">
      <div>footer</div>
    </footer>
  )
}
