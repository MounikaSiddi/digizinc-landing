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

// Updated Metadata export with AI focus
export const metadata: Metadata = {
  // Primary Meta Tags
  title: "Digizinc | AI-Powered Digital Marketing & Branding Solutions", // Emphasize AI
  description: "Digizinc offers cutting-edge AI solutions for digital marketing, strategic branding, and creative design. Transform your business, automate content, and elevate your online presence with our artificial intelligence-driven strategies.", // AI-centric description
  keywords: [
    "AI digital marketing agency",
    "AI branding experts",
    "AI solutions for marketing",
    "artificial intelligence in marketing",
    "machine learning marketing",
    "generative AI design",
    "AI-powered content creation",
    "digital transformation AI",
    "AI brand strategy",
    "ROI-driven AI marketing",
    "Digizinc AI", // Specific to your brand + AI
    "AI web design",
    "AI ad campaigns"
  ],
  authors: [{ name: "Digizinc" }],

  // Open Graph (OG) Tags for Facebook, LinkedIn, etc.
  openGraph: {
    title: "Digizinc | AI-Powered Digital Marketing & Branding Agency", // AI in title
    description: "Transform your brand with Digizinc – your trusted partner for strategic, AI-driven branding and ROI-focused digital marketing solutions.", // AI in description
    url: "https://digizinc.com/", // Make sure this is your live domain
    siteName: "Digizinc",
    images: [
      {
        url: "https://miscellaneous-0.s3.ap-south-1.amazonaws.com/digizinc_main_og.jpg", // OG Image URL
        width: 1200, // Optimal width
        height: 630, // Optimal height
        alt: "Digizinc AI Solutions Logo - Digital Marketing & Branding Agency", // AI in alt text
      },
    ],
    type: "website",
  },

  // Twitter Card Tags
  twitter: {
    card: "summary_large_image",
    title: "Digizinc | AI-Powered Digital Marketing & Branding Agency", // AI in title
    description: "Transform your brand with Digizinc – your trusted partner for strategic, AI-driven branding and ROI-focused digital marketing solutions.", // AI in description
    images: ["https://miscellaneous-0.s3.ap-south-1.amazonaws.com/digizinc_main_og.jpg"], // Twitter Image URL
  },

  // Favicon (link rel="icon")
  icons: {
    icon: "/favicon.ico", // Path to your favicon in the public directory
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