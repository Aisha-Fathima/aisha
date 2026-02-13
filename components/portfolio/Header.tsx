'use client'

import { Mail, Music, Youtube, Instagram } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.section
      className="py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header with profile and info */}
      <div className="flex items-start gap-6">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0 overflow-hidden rounded-full border border-white/10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/img33.jpeg"
            alt="Profile"
            width={100}
            height={100}
            className="h-24 w-24 object-cover"
            loading="eager"
            priority
          />
        </motion.div>

        {/* Name and Location */}
        <motion.div
          className="flex flex-col justify-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-2xl font-medium text-white">Aisha</h1>
          <p className="flex items-center gap-2 text-base text-gray-300">
            <span>📍</span>
            Bangalore , India
          </p>
        </motion.div>
      </div>

      {/* Social Icons */}
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.a
          href="mailto:aishafathimamohammed@gmail.com"
          className="text-white transition-all hover:text-gray-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Email"
        >
          <Mail size={24} />
        </motion.a>
        <motion.a
          href="https://open.spotify.com/user/31jr4cubkwlcnfknb2resvcjuh2i?si=2ba1a0cc26c5425e"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-all hover:text-gray-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="TikTok"
        >
          <Music size={24} />
        </motion.a>
        <motion.a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-all hover:text-gray-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="YouTube"
        >
          <Youtube size={24} />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/_aishafm/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-all hover:text-gray-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </motion.a>
      </motion.div>
    </motion.section>
  )
}

