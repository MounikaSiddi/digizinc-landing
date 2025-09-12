'use client'

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useContactModal } from '@/components/ClientWrapper';
import { useActiveSection } from '@/hooks/useActiveSection';
import { navItems } from '@/lib/nav-items';

interface MobileNavProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { openContactModal } = useContactModal();
  const sectionIds = navItems.filter(item => item.isSection).map(item => item.id || '');
  const activeSectionId = useActiveSection(sectionIds);

  const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.isSection) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      if (pathname !== '/') {
        await router.push('/');
        setTimeout(() => {
          const element = document.getElementById(item.id || '');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(item.id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
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
              openContactModal(undefined);
              setIsMobileMenuOpen(false);
            }}
          >
            Get Started
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
