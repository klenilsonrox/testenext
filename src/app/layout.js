import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Meu portfólio',
  description: 'desenvolvedor web',
}

export default function RootLayout({ children }) {



  return (
    <html lang="pt-BR">
    
      <body className={`${inter.className} scroll-smooth` }>
     
      {children}</body>
    </html>
  )
}
