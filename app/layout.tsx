// app/layout.tsx (Server Component)
import type { Metadata } from "next"
import { Inter, Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ClientWrapper from "@/components/ClientWrapper"

const inter = Inter({ subsets: ["latin"] })
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: '--font-bricolage',
})

export const metadata: Metadata = {
  title: "Digizinc - Transform Your Digital Presence with AI",
  description:
    "Digizinc offers cutting-edge AI solutions and comprehensive digital marketing services to help your business thrive in the digital era.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${bricolage.variable} min-h-screen bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ClientWrapper />
        </ThemeProvider>
      </body>
    </html>
  )
}
