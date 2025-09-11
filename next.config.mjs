// next.config.js

import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  pageExtensions: ['ts', 'tsx', 'mdx'], // include .mdx pages
}

export default withMDX(nextConfig)
