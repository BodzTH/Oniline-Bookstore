import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'



export const metadata: Metadata = {
  icons: {
    icon: '/book.svg',
  },
  title: 'Bookz',
  description: 'Bookz is a book review site.',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body >

        <Navbar />

        <SideBar />

        <Header />
        <main>
          {children}
        </main>

        <Footer />

      </body>

    </html>
  )
}