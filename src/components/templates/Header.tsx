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
    <header className="flex h-20 w-screen items-center justify-center bg-slate-400 px-4 sm:px-8">
      <Box className="flex h-full w-full items-center justify-between">
        <MainMenu.Portrait />

        <MainMenu.Lanscape />
        <Box className="flex flex-shrink-0 flex-row items-center gap-4">
          <IconButton
            aria-label="shopping cart"
            icon={
              <Link href="cart">
                <MdShoppingCart className="text-4xl" />
              </Link>
            }
          />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Profile"
              icon={<MdPerson className="text-4xl" />}
            />
            <ProfileMenu.Auth />
          </Menu>
        </Box>
      </Box>
    </header>
  )
}

const ProfileMenu = {
  Auth: () => (
    <MenuList>
      <MenuItem>
        <Link className="h-full w-full" href="/my-profile">
          Profile
        </Link>
      </MenuItem>
      <MenuItem>
        <Link className="h-full w-full" href="/orders">
          History Orders
        </Link>
      </MenuItem>
      <MenuItem className="h-full w-full" onClick={() => console.log('logout')}>
        Logout
      </MenuItem>
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
