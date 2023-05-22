'use client'
import React, { useEffect, useState, UIEvent, Fragment } from 'react'
import {
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { useScroll } from 'framer-motion'
import { MdShoppingCart, MdPerson } from 'react-icons/md'
import Link from 'next/link'

import { MainMenu } from './MainMenu'

export const Header = () => {
  const { scrollY } = useScroll()
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    return scrollY.on('velocityChange', updateVisibility)
  }, [])

  const updateVisibility = (scrollVelocity: number) => {
    if (scrollVelocity < -800) {
      setIsHidden(false)
    } else if (scrollVelocity > 800) {
      setIsHidden(true)
    }
  }

  return (
    <Fragment>
      <header
        className={`${isHidden ? '-translate-y-20' : ''} 
      fixed
      z-50
      flex h-20 w-screen items-center justify-center bg-primary-300 px-4 duration-200 ease-in-out sm:px-8`}
      >
        <Box className="flex h-full w-full items-center justify-between">
          <MainMenu.Portrait />

          <MainMenu.Lanscape />
          <Box className="flex flex-shrink-0 flex-row items-center gap-4">
            <IconButton
              aria-label="shopping cart"
              color="brown.800"
              colorScheme="brown"
              bg=""
              _hover={{ bg: 'brown.100' }}
              icon={
                <Link href="cart">
                  <MdShoppingCart className="text-4xl" />
                </Link>
              }
            />
            <Menu>
              <MenuButton
                as={IconButton}
                color="brown.800"
                colorScheme="brown"
                bg=""
                _hover={{ bg: 'brown.100' }}
                aria-label="Profile"
                icon={<MdPerson className="text-4xl" />}
              />
              <ProfileMenu.Auth />
            </Menu>
          </Box>
        </Box>
      </header>
      <div className="h-20 w-full" />
    </Fragment>
  )
}

const ProfileMenu = {
  Auth: () => (
    <MenuList>
      <MenuItem className="font-bold text-brown-800 hover:bg-brown-100">
        <Link className="h-full w-full" href="/my-profile">
          Profile
        </Link>
      </MenuItem>
      <MenuItem className="font-bold text-brown-800 hover:bg-brown-100">
        <Link className="h-full w-full" href="/orders">
          History Orders
        </Link>
      </MenuItem>
      <MenuItem
        className="h-full w-full font-bold text-red-400 hover:bg-red-100"
        onClick={() => console.log('logout')}
      >
        Logout
      </MenuItem>
    </MenuList>
  ),
  Default: () => (
    <MenuList>
      <MenuItem className="font-bold text-brown-800 hover:bg-brown-100">
        <Link href="/login">Login</Link>
      </MenuItem>
      <MenuItem className="font-bold text-brown-800 hover:bg-brown-100">
        <Link href="/register">Register</Link>
      </MenuItem>
    </MenuList>
  ),
}
