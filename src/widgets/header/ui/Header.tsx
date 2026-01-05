'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui'
import { ThemeToggle } from '@/features/theme-toggle'
import { MobileMenu } from '@/features/mobile-menu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-gray-200/50 bg-white/80 backdrop-blur-lg dark:border-gray-800/50 dark:bg-gray-950/80'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            <span className="text-violet-600 dark:text-violet-400">D</span>B
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </nav>
      </Container>
    </motion.header>
  )
}
