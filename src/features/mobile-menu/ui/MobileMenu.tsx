'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/shared/config'
import { cn } from '@/shared/lib'

interface MobileMenuProps {
  className?: string
}

export function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className={cn('md:hidden', className)}>
      <button
        onClick={toggleMenu}
        className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm dark:bg-black/40"
            />
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-4 right-4 top-full z-50 mt-2 rounded-xl border border-gray-300 bg-white p-4 shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <ul className="space-y-1">
                {siteConfig.navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-colors hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
