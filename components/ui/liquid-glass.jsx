"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function LiquidGlassNav({ items, className = "" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const navRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    if (hoveredIndex !== null && itemRefs.current[hoveredIndex]) {
      const item = itemRefs.current[hoveredIndex]
      const nav = navRef.current
      
      if (nav && item) {
        const navRect = nav.getBoundingClientRect()
        const itemRect = item.getBoundingClientRect()
        
        setIndicatorStyle({
          left: itemRect.left - navRect.left,
          width: itemRect.width,
          opacity: 1,
        })
      }
    } else {
      setIndicatorStyle({ opacity: 0 })
    }
  }, [hoveredIndex])

  return (
    <div
      ref={navRef}
      className={cn(
        "relative flex items-center gap-1",
        "backdrop-blur-xl bg-white/10 border border-white/20",
        "rounded-full px-1 py-1",
        "shadow-2xl shadow-black/20",
        className
      )}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Liquid glass indicator */}
      <div
        className="absolute top-1 bottom-1 bg-white/30 rounded-full backdrop-blur-sm border border-white/40 transition-all duration-300 ease-out"
        style={indicatorStyle}
      />

      {items.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          ref={(el) => (itemRefs.current[index] = el)}
          className={cn(
            "relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
            hoveredIndex === index 
              ? "text-gray-900" 
              : "text-white/90 hover:text-white"
          )}
          onMouseEnter={() => setHoveredIndex(index)}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

// Keep the original LiquidGlass for backward compatibility
export function LiquidGlass({
  children,
  className = "",
  padding = "12px 24px",
  cornerRadius = 16,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "relative overflow-hidden transition-all duration-300 ease-out",
        "backdrop-blur-xl bg-white/[0.08] border border-white/[0.12]",
        "shadow-2xl hover:shadow-3xl",
        "transform hover:scale-105 active:scale-95",
        isHovered ? "bg-white/[0.12]" : "bg-white/[0.08]",
        className
      )}
      style={{
        padding,
        borderRadius: `${cornerRadius}px`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Glass reflection effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-transparent to-transparent opacity-60"
        style={{ borderRadius: `${cornerRadius}px` }}
      />
      
      {/* Animated liquid effect */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-stone-400/30 to-slate-500/30 blur-sm",
          "transition-all duration-500 ease-out",
          isHovered ? "opacity-100 scale-110" : "opacity-0 scale-100"
        )}
        style={{ borderRadius: `${cornerRadius}px` }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default LiquidGlass 