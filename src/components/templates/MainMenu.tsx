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
    name: 'Home',
    route: '/',
  },
  {
    id: 'products',
    name: 'Products',
    route: '/products',
  },
]

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
          <DrawerHeader className="border-b-2 border-dashed border-slate-400">
            Cravings Fix
          </DrawerHeader>

          <DrawerBody>
            <ul className="flex w-full flex-col">
              {ROUTES.map(({ id, name, route }) => (
                <NavItem
                  key={id}
                  name={name}
                  route={route}
                  className="h-full w-full py-4 text-lg"
                  onClick={onClose}
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
          className="rounded-md p-2 text-lg"
        />
      ))}
    </ul>
  )
}

const NavItem = ({
  name,
  route,
  className,
  onClick = () => {},
}: {
  name: string
  route: string
  className?: string
  onClick?: () => void
}) => {
  return (
    <li>
      <Link
        className={`${className} inline-block h-full w-full text-slate-800 hover:cursor-pointer hover:bg-slate-200 `}
        href={route}
        onClick={onClick}
      >
        {name}
      </Link>
    </li>
  )
}
export const MainMenu = {
  Portrait: MenuPortrait,
  Lanscape: MenuLandscape,
}
