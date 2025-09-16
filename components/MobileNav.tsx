'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image' // Added Image import
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { useContactModal } from '@/components/ClientWrapper'
import { navItems } from '@/lib/nav-items'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const MobileNav = () => {
  const { openContactModal } = useContactModal()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm bg-background">
        <div className="p-4">
          <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setIsOpen(false)}>
             <Image
              src="/digizinc-header-logo-light.png"
              alt="Digizinc Logo"
              width={140}
              height={32}
              className="h-8 w-[140px] dark:hidden"
            />
            <Image
              src="/digizinc-header-logo-dark.png"
              alt="Digizinc Logo"
              width={140}
              height={32}
              className="h-8 w-[140px] hidden dark:block"
            />
          </Link>

          <div className="flex flex-col space-y-2">
            {navItems.map((item) =>
              item.children ? (
                <Accordion key={item.name} type="single" collapsible className="w-full">
                  <AccordionItem value={item.name} className="border-b-0">
                    <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                      {item.name}
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <div className="flex flex-col space-y-2 mt-2">
                        {item.children.map((child) => (
                          <SheetClose asChild key={child.name}>
                            <Link
                              href={child.href}
                              className="block py-2 text-muted-foreground hover:text-foreground"
                            >
                              {child.name}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <SheetClose asChild key={item.name}>
                  <Link
                    href={item.href!}
                    className="block py-3 text-base font-medium text-foreground hover:bg-accent rounded-md"
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              )
            )}
          </div>

          <Button
            onClick={() => {
              setIsOpen(false)
              openContactModal()
            }}
            variant={'gradient'}
            className="w-full mt-6 shadow-lg text-primary-foreground bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/20 text-white py-3 px-6 rounded-full transition-all duration-300 text-center font-medium"
          >
            Get Started
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}