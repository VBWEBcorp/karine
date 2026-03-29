import { Outlet } from 'react-router-dom'

import { CartDrawer } from '@/components/layout/cart-drawer'
import { FloatingCart } from '@/components/layout/floating-cart'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { ScrollToTop } from '@/components/scroll-to-top'

export function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingCart />
      <CartDrawer />
    </div>
  )
}
