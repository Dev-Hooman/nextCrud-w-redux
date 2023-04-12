import '../globals.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Providers } from '../GlobalRedux/provider'


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <title>AR's Blog</title>
      </head>
      <body>
        <Header />
        <Providers>

          {children}
        </Providers>

        <Footer />
      </body>
    </html>
  )
}
