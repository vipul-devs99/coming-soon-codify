"use client"

import { useEffect, useState } from "react"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function ComingSoon() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-600 to-purple-800"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      />

      {/* Animated wave */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 left-0 right-0 h-[10vh] bg-blue-500/10"
            style={{
              y: 10 + i * 15,
              scaleY: 1 + i * 0.2,
              zIndex: 5 - i,
            }}
            animate={{
              x: [-(i + 1) * 100, (i + 1) * 100],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              duration: 10 + i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Codify Wave
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-300">Something amazing is coming soon</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative"
        >
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <Mail className="h-4 w-4" />
          <a href="mailto:hello@codifywave.com" className="text-sm md:text-base">
            hello@codifywave.com
          </a>
        </motion.div>
      </div>

      {/* Animated dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/30"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [Math.random() * 10, Math.random() * -10],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: Math.random() * 3 + 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

