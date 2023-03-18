import localFont from '@next/font/local'
const inter = localFont({ src: '../../public/ProggyClean.ttf' })
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-zinc-800 flex flex-col items-center justify-center w-screen h-screen">
        {children}
      </body>
    </html>
  )
}
