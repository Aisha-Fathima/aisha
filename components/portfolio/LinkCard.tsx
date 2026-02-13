'use client'

import { type LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface LinkCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  delay?: number
}

export default function LinkCard({
  icon: Icon,
  title,
  description,
  href,
  delay = 0,
}: LinkCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 rounded-lg p-5 transition-all hover:bg-white/15"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="mt-1 rounded-lg p-3"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <Icon size={20} className="text-white" />
      </motion.div>

      <div className="flex-1">
        <h3 className="font-light text-white">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </motion.a>
  )
}
