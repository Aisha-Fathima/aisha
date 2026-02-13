'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Camera,
  Palette,
  Music,
  BookmarkIcon,
  PenTool,
  FileText,
} from 'lucide-react'
import LinkCard from './LinkCard'

const links = [
  {
    icon: Code2,
    title: 'projects',
    description: 'things I built instead of sleeping responsibly',
    href: 'https://github.com/Aisha-Fathima',
  },
  {
    icon: Camera,
    title: 'photography',
    description: 'me pretending I understand lighting and composition',
    href: 'https://in.pinterest.com/aisha_fathima/skiee/',
  },
  {
    icon: Palette,
    title: "aisha's art",
    description: 'my art stuff',
    href: 'https://www.tumblr.com/blog/aishafm',
  },
  {
    icon: Music,
    title: 'spotify',
    description: 'yes i have a gradient descent playlist',
    href: 'https://open.spotify.com/user/31jr4cubkwlcnfknb2resvcjuh2i?si=3ceee7573f0e4c26',
  },
  {
    icon: BookmarkIcon,
    title: 'pinterest',
    description: 'ideas I might try… someday',
    href: 'https://in.pinterest.com/aisha_fathima/',
  },
  {
    icon: PenTool,
    title: 'writing',
    description: 'what i write when I’m not writing code',
    href: 'https://medium.com/@aishafathimamohammed',
  },
  {
    icon: FileText,
    title: 'resume',
    description: 'the serious version of me, in PDF form',
    href: '#',
  },
]

export default function LinksSection() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="space-y-3">
        {links.map((link, index) => (
          <LinkCard
            key={link.title}
            icon={link.icon}
            title={link.title}
            description={link.description}
            href={link.href}
            delay={index * 0.05}
          />
        ))}
      </div>
    </motion.section>
  )
}
