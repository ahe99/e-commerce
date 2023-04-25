'use client'
import React from 'react'
import {
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { MdShoppingCart, MdPerson } from 'react-icons/md'
import Link from 'next/link'

import { MainMenu } from './MainMenu'

export const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between bg-slate-400 px-4 lg:px-8">
      <Box className="flex flex-row items-center gap-2">
        <MainMenu.Portrait />
        <h1 className="flex-shrink-0 border-slate-200 pr-2 text-2xl text-slate-800 landscape:border-r-2">
          e-commerce
        </h1>
        <MainMenu.Lanscape />
      </Box>
      <Box className="flex flex-row items-center gap-4">
        <Link
          href="cart"
          className="text-4xl text-slate-800 hover:cursor-pointer hover:text-slate-400"
        >
          <MdShoppingCart />
        </Link>
        <Menu>
          <MenuButton
            className="rounded-full"
            as={IconButton}
            aria-label="Profile"
            icon={<MdPerson className="text-4xl" />}
          />
          <ProfileMenu.Auth />
        </Menu>
      </Box>
    </header>
  )
}

const ProfileMenu = {
  Auth: () => (
    <MenuList>
      <MenuItem>
        <Link href="/my-profile">Profile</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/orders">History Orders</Link>
      </MenuItem>
      <MenuItem onClick={() => console.log('logout')}>Logout</MenuItem>
    </MenuList>
  ),
  Default: () => (
    <MenuList>
      <MenuItem>
        <Link href="/login">Login</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/register">Register</Link>
      </MenuItem>
    </MenuList>
  ),
}
