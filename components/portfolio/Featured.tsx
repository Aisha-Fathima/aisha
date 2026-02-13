'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function Featured() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="group relative overflow-hidden rounded-xl p-1"
        whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
      >
        <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
          <Image
            src="/placeholder.jpg"
            alt="Featured project"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-white p-4"
            >
              <Play size={24} className="fill-black text-black" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.p
        className="mt-4 text-center text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
         Latest Work
      </motion.p>
    </motion.section>
  )
}
