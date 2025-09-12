'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ToggleSwitchProps {
  checked?: boolean // external state (controlled mode)
  defaultChecked?: boolean // initial value (uncontrolled mode)
  onCheckedChange?: (isOn: boolean) => void // Renamed from onChange for clarity with native input onChange
  className?: string
  withLabels?: boolean
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  defaultChecked = false,
  onCheckedChange,
  className,
  withLabels = false,
}) => {
  const [internal, setInternal] = useState(defaultChecked)
  const isControlled = checked !== undefined
  const isOn = isControlled ? checked : internal

  const toggle = () => {
    const newState = !isOn
    if (!isControlled) setInternal(newState)
    onCheckedChange?.(newState)
  }

  return (
    <div className="flex items-center gap-2">
      {withLabels && <span className="text-sm font-medium">Human</span>}

      <button
        role="switch"
        aria-checked={isOn}
        onClick={toggle}
        className={cn(
          "relative inline-flex items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500",
          "w-20 h-10", // fixed size for consistency
          isOn
            ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.7)]"
            : "bg-gray-300 dark:bg-gray-700",
          className
        )}
      >
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
          className="absolute top-1 left-1 w-8 h-8 rounded-full bg-white shadow-md"
          style={{ transform: `translateX(${isOn ? '40px' : '0px'})` }}
        />
      </button>

      {withLabels && <span className="text-sm font-medium">AI</span>}
    </div>
  )
}

export default ToggleSwitch