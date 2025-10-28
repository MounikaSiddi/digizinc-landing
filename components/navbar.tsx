'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { navItems } from '@/lib/nav-items'
import { cn } from '@/lib/utils'
import { useContactModal } from './ClientWrapper'
import { MobileNav } from './MobileNav'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import Image from 'next/image';

const Navbar = () => {
  const { openContactModal } = useContactModal()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsScrolled(offset > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.header
      className={cn(
        'sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-sm transition-colors duration-300',
        {
          'bg-background/80 backdrop-blur-sm border-b border-border/20': isScrolled,
        }
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/digizinc-header-logo-light.png"
              alt="Digizinc Logo"
              width={140}
              height={32}
              className="h-8 w-[140px] dark:hidden"
              priority
            />
            <Image
              src="/digizinc-header-logo-dark.png"
              alt="Digizinc Logo"
              width={140}
              height={32}
              className="h-8 w-[140px] hidden dark:block"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {item.children.map((child) => (
                          <ListItem
                            key={child.name}
                            title={child.name}
                            href={child.href}
                          >
                            {child.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.href!} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button
            onClick={() => openContactModal()}
            variant={'gradient'}
            className="hidden sm:flex shadow-lg text-primary-foreground bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/20 text-white py-3 px-6 rounded-full transition-all duration-300 text-center font-medium"
          >
            Get Started
          </Button>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </motion.header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-primary/10  hover:bg-primary/20 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default Navbar