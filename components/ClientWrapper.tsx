// components/ClientWrapper.tsx
"use client"

import { useState } from "react"
import SaviBot from "@/components/SaviBot"

export default function ClientWrapper() {
  const [showBot, setShowBot] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowBot(!showBot)}
        className="fixed bottom-6 right-6 bg-gradient-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        aria-label="Open Savi AI assistant"
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            AI
          </span>
        </div>
      </button>

      <SaviBot isOpen={showBot} onClose={() => setShowBot(false)} />
    </>
  )
}
