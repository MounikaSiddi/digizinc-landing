// components/navbar.tsx
'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { useContactModal } from './ClientWrapper'; // Import the custom hook

const navItems = [
  { name: "Solutions", href: "/#solutions", isSection: true },
  { name: "Services", href:"/#services", isSection: true },
  { name: "Industries", href: "/#industries", isSection: true },
  { name: "Careers", href: "/careers", isSection: false },
  { name: "Blogs", href: "/blog", isSection: false },
]

export default function Navbar() { // No props needed here anymore
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openContactModal } = useContactModal(); // Use the hook here!

  const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.isSection) {
      e.preventDefault()
      setIsMobileMenuOpen(false)
      if (pathname !== '/') {
        await router.push('/')
        setTimeout(() => {
          const element = document.getElementById(item.name.toLowerCase())
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        const element = document.getElementById(item.name.toLowerCase())
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <Image
            src="/digizinc-header-logo-light.png"
            alt="Digizinc Logo"
            width={120}
            height={30}
            className="h-8 w-auto block dark:hidden"
          />
          <Image
            src="/digizinc-header-logo-dark.png"
            alt="Digizinc Logo"
            width={120}
            height={30}
            className="h-8 w-auto hidden dark:block"
          />
        </Link>

        <nav className="hidden md:flex items-center justify-center flex-1 ml-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className="text-sm font-medium transition-colors hover:text-foreground/80 hover:underline-offset-4 hover:underline mx-4 text-foreground/60"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 ml-4">
          <ModeToggle />
          <Button
            variant={'gradient'}
            className="hidden sm:flex   shadow-lg text-primary-foreground bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/20 text-white  py-3 px-6 rounded-full transition-all duration-300 text-center font-medium"
            onClick={() => openContactModal(undefined)} // Use the openContactModal from context
          >
            Get Started
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="lg" className="shrink-0 p-2">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-card border-border"
            >
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-lg font-medium transition-colors p-2 rounded-lg ${
                      pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  className="mt-4 w-full rounded-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg text-primary-foreground"
                  onClick={() => {
                    openContactModal(undefined); // Use the openContactModal from context
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}