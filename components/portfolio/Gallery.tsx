'use client'

import { motion } from 'framer-motion'

export default function CinematicEnding() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-black">

      {/* Cinematic line */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl text-xl md:text-2xl font-light tracking-wide text-neutral-100 leading-relaxed"
      >
        if sarcasm and building cool things sound like a good time,
        <br />
        you’re in the right place.
      </motion.p>

      {/* Shield badges */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-wrap justify-center gap-3"
      >
        <a
          href="https://www.linkedin.com/in/aisha-fathima-mohammed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="LinkedIn"
            src="https://img.shields.io/badge/LinkedIn-%230E76A8.svg?style=for-the-badge&logo=LinkedIn&logoColor=white"
          />
        </a>

        <a
          href="https://github.com/Aisha-Fathima"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="GitHub"
            src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
          />
        </a>

        <a href="mailto:aishafathimamohamme@gmail.com">
          <img
            alt="Email"
            src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white"
          />
        </a>
      </motion.div>

    </section>
  )
}