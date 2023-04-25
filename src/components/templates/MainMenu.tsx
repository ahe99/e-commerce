'use client'
import { useRef } from 'react'
import Link from 'next/link'
import {
  Box,
  IconButton,
  useDisclosure,
  DrawerBody,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Button,
} from '@chakra-ui/react'
import { MdMenu } from 'react-icons/md'

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

const NavItem = ({
  name,
  route,
  className,
}: {
  name: string
  route: string
  className?: string
}) => {
  return (
    <li
      className={`${className} text-slate-800 hover:cursor-pointer hover:text-slate-400`}
    >
      <Link href={route}>{name}</Link>
    </li>
  )
}
const MenuPortrait = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<any>(null)

  return (
    <Box className="landscape:hidden">
      <IconButton
        aria-label="menu"
        ref={btnRef}
        icon={<MdMenu className="text-4xl" />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="bg-slate-200">
          <DrawerHeader className="border-b-2 border-slate-400">
            e-commerce
          </DrawerHeader>

          <DrawerBody className="">
            <ul className="flex flex-col">
              {ROUTES.map(({ id, name, route }) => (
                <NavItem
                  key={id}
                  name={name}
                  route={route}
                  className="py-4 text-lg"
                />
              ))}
            </ul>
          </DrawerBody>

          <DrawerFooter>
            <Button className="w-full hover:bg-slate-400">Login</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
const MenuLandscape = () => {
  return (
    <ul className="flex flex-row items-center gap-2 portrait:hidden">
      {ROUTES.map(({ id, name, route }) => (
        <NavItem
          key={id}
          name={name}
          route={route}
          className="hover:underline"
        />
      ))}
    </ul>
  )
}
export const MainMenu = {
  Portrait: MenuPortrait,
  Lanscape: MenuLandscape,
}
