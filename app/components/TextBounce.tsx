'use client'

import { textBounce } from "@/types"
import { motion } from "motion/react"

interface TextBounceProps {
    textBounce: textBounce
}

const TextBounce = ({textBounce}: TextBounceProps) => {
    console.log(textBounce);
    return (
        <motion.div
            initial={textBounce.animation.initial}
            animate={textBounce.animation.animate}
            transition={textBounce.animation.transition}
        >
            <p>
				<span className="bg-black text-white dark:bg-white dark:text-black px-2 text-[20px] font-bold hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white duration-300">{textBounce['text']}</span>
			</p>
        </motion.div>
    )
}

export default TextBounce;