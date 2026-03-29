import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from '@/layouts/root-layout'
import { HomePage } from '@/pages/home-page'
import { ProductsPage } from '@/pages/products-page'
import { ProductDetailPage } from '@/pages/product-detail-page'
import { CartPage } from '@/pages/cart-page'
import { CheckoutPage } from '@/pages/checkout-page'
import { LoginPage } from '@/pages/login-page'
import { AboutPage } from '@/pages/about-page'
import { ContactPage } from '@/pages/contact-page'
import { LegalPage } from '@/pages/legal-page'
import { PrivacyPage } from '@/pages/privacy-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'produits', element: <ProductsPage /> },
      { path: 'produit/:slug', element: <ProductDetailPage /> },
      { path: 'panier', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'connexion', element: <LoginPage /> },
      { path: 'a-propos', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'mentions-legales', element: <LegalPage /> },
      { path: 'politique-de-confidentialite', element: <PrivacyPage /> },
    ],
  },
])
