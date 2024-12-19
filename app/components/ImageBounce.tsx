'use client'

import { imageBounce } from "@/types"
import { motion } from "motion/react"
import Image from "next/image"

interface ImageBounceProps {
  imageBounce: imageBounce
}

const ImageBounce = ({imageBounce}:ImageBounceProps) => {
  return (
    <motion.div
      initial={imageBounce.animation.initial}
      animate={imageBounce.animation.animate}
      transition={imageBounce.animation.transition}
    >
      <Image
        className={imageBounce.className}
        src={imageBounce.src}
        alt={imageBounce.alt}
        width={imageBounce.dimension.width}
        height={imageBounce.dimension.height}
    />
    </motion.div>
  )
}

export default ImageBounce;
