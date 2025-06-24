import { Montserrat } from 'next/font/google'
import './globals.css'

const mont = Montserrat({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-montserrat',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className= 'dark {mont.variable}'>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}