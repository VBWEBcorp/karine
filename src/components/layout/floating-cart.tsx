import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

import { useCart } from '@/contexts/cart-context'

export function FloatingCart() {
  const { itemCount, total, setCartOpen } = useCart()

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setCartOpen(true)}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-shadow hover:shadow-xl hover:shadow-primary/40"
      style={{ padding: itemCount > 0 ? '14px 20px' : '16px' }}
    >
      <span className="relative">
        <ShoppingBag className="size-5" />
        {itemCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-2.5 -top-2.5 flex size-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-primary"
          >
            {itemCount}
          </motion.span>
        )}
      </span>
      {itemCount > 0 && (
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 'auto', opacity: 1 }}
          className="text-sm font-semibold"
        >
          {total.toFixed(2)}€
        </motion.span>
      )}
    </motion.button>
  )
}
