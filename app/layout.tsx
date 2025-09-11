// app/layout.tsx (Server Component)
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ClientWrapper from "@/components/ClientWrapper"

const inter = Inter({ subsets: ["latin"] })
// const bricolage = Bricolage_Grotesque({
//   subsets: ["latin"],
//   variable: '--font-bricolage',
// })
const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

// Updated Metadata export
export const metadata: Metadata = {
  // Primary Meta Tags
  title: "Digizinc | Digital Marketing & Branding Solutions",
  description: "Digizinc offers cutting-edge solutions for digital marketing, strategic branding, and creative design. Transform your business, automate content, and elevate your online presence with our data-driven strategies.",
  keywords: [
    "digital marketing agency",
    "branding experts",
    "solutions for marketing",
    "data-driven marketing",
    "machine learning marketing",
    "generative design",
    "content creation",
    "digital transformation",
    "brand strategy",
    "ROI-driven marketing",
    "Digizinc",
    "web design",
    "ad campaigns"
  ],
  authors: [{ name: "Digizinc" }],

  // Open Graph (OG) Tags for Facebook, LinkedIn, etc.
  openGraph: {
    title: "Digizinc | Digital Marketing & Branding Agency",
    description: "Transform your brand with Digizinc – your trusted partner for strategic, data-driven branding and ROI-focused digital marketing solutions.",
    url: "https://digizinc.com/",
    siteName: "Digizinc",
    images: [
      {
        url: "https://miscellaneous-0.s3.ap-south-1.amazonaws.com/digizinc_main_og.jpg",
        width: 1200,
        height: 630,
        alt: "Digizinc Digital Marketing & Branding Agency Logo",
      },
    ],
    type: "website",
  },

  // Twitter Card Tags
  twitter: {
    card: "summary_large_image",
    title: "Digizinc | Digital Marketing & Branding Agency",
    description: "Transform your brand with Digizinc – your trusted partner for strategic, data-driven branding and ROI-focused digital marketing solutions.",
    images: ["https://miscellaneous-0.s3.ap-south-1.amazonaws.com/digizinc_main_og.jpg"],
  },

  // Favicon (link rel="icon")
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${poppins.variable} min-h-screen bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientWrapper>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}