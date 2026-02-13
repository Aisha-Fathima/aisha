'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function Resume() {
  return (
    <motion.section
      className="py-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="mb-8 text-2xl font-light text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        
      </motion.h2>

      <motion.a
        href="#"
        download
        className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-light text-white transition-all hover:bg-white/10"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        
        
      </motion.a>
    </motion.section>
  )
}
