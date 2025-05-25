"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

const navItems = [
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Careers", href: "/careers" },
  { name: "Blogs", href: "/blog" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      // Use bg-background for the base, and border-border for the bottom border
      className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm"
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-end space-x-8 flex-1 ml-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              // Use text-foreground for default, text-primary for active
              className={`text-sm font-medium transition-colors hover:text-primary hover:underline-offset-4 hover:underline ${
                pathname === item.href ? "text-primary" : "text-foreground/80" // Use foreground for better contrast, or muted-foreground if links are less prominent
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-4 ml-4">
          <ModeToggle />
          <Button
            size="sm"
            // Use your primary and secondary colors for the gradient
            className="hidden sm:flex rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:opacity-90 transition-opacity shadow-lg text-primary-foreground" // Ensure text is white on the gradient
          >
            Get Started
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="shrink-0">
                <Menu className="h-5 w-5 text-foreground" /> {/* Ensure icon color respects theme */}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-card border-border" // Use bg-card and border-border
            >
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors p-2 rounded-lg ${
                      pathname === item.href
                        ? "text-primary bg-primary/10" // Active link styling
                        : "text-foreground hover:bg-accent hover:text-accent-foreground" // Use foreground, then accent for hover
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  className="mt-4 w-full rounded-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg text-primary-foreground" // Ensure text is white on the gradient
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