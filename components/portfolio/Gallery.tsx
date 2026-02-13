'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const galleryImages1 = [
  { id: 1, src: '/images/img1.jpeg', alt: 'Gallery image 1' },
  { id: 2, src: '/images/img2.jpeg', alt: 'Gallery image 2' },
  { id: 3, src: '/images/img3.jpeg', alt: 'Gallery image 3' },
  { id: 4, src: '/images/img4.jpeg', alt: 'Gallery image 4' },
  { id: 5, src: '/images/img5.jpeg', alt: 'Gallery image 5' },
  { id: 6, src: '/images/img6.jpeg', alt: 'Gallery image 6' },
  { id: 7, src: '/images/img7.jpeg', alt: 'Gallery image 7' },
  { id: 8, src: '/images/img8.jpeg', alt: 'Gallery image 8' },
  { id: 9, src: '/images/img9.jpeg', alt: 'Gallery image 9' },
  { id: 10, src: '/images/img10.jpeg', alt: 'Gallery image 10' },
  { id: 11, src: '/images/img11.jpeg', alt: 'Gallery image 11' },
  { id: 12, src: '/images/img12.jpeg', alt: 'Gallery image 12' },
  { id: 13, src: '/images/img13.jpeg', alt: 'Gallery image 13' },
  { id: 14, src: '/images/img14.jpeg', alt: 'Gallery image 14' },
  { id: 15, src: '/images/img15.jpeg', alt: 'Gallery image 15' },
  { id: 16, src: '/images/img16.jpeg', alt: 'Gallery image 16' },
  { id: 17, src: '/images/img17.jpeg', alt: 'Gallery image 17' },
  { id: 18, src: '/images/img18.jpeg', alt: 'Gallery image 18' },
]

const galleryImages2 = [
  { id: 19, src: '/images/img19.jpeg', alt: 'Gallery image 19' },
  { id: 20, src: '/images/img20.jpeg', alt: 'Gallery image 20' },
  { id: 21, src: '/images/img21.jpeg', alt: 'Gallery image 21' },
  { id: 22, src: '/images/img22.jpeg', alt: 'Gallery image 22' },
  { id: 23, src: '/images/img23.jpeg', alt: 'Gallery image 23' },
  { id: 24, src: '/images/img24.jpeg', alt: 'Gallery image 24' },
  { id: 25, src: '/images/img25.jpeg', alt: 'Gallery image 25' },
  { id: 26, src: '/images/img26.jpeg', alt: 'Gallery image 26' },
  { id: 27, src: '/images/img27.jpeg', alt: 'Gallery image 27' },
  { id: 28, src: '/images/img28.jpeg', alt: 'Gallery image 28' },
  { id: 29, src: '/images/img29.jpeg', alt: 'Gallery image 29' }, 
  { id: 30, src: '/images/img30.jpeg', alt: 'Gallery image 30' },
  { id: 31, src: '/images/img31.jpeg', alt: 'Gallery image 31' },
  { id: 32, src: '/images/img32.jpeg', alt: 'Gallery image 32' },

]

const Carousel = ({
  images,
  direction,
}: {
  images: { id: number; src: string; alt: string }[]
  direction: 'left' | 'right'
}) => {
  const duplicatedImages = [...images, ...images]

  return (
    <div className="relative w-full overflow-hidden py-4">
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: 25, // speed (lower = faster)
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="192px"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}


export default function Gallery() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="mb-8 text-center text-2xl font-light text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        side quests
      </motion.h2>

      <div className="space-y-6">
        <Carousel images={galleryImages1} direction="left" />
        <Carousel images={galleryImages2} direction="right" />
      </div>
    </motion.section>
  )
}
