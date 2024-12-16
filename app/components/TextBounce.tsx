'use client'

import { motion } from "motion/react"

const TextBounce = () => {
    return (
        <motion.div
        initial={{ x: -200, opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        transition={{ duration: 1.5, type: 'spring', bounce: 0.5, }}>
            <p>
				<span className="bg-black text-white dark:bg-white dark:text-black px-2 text-[20px] font-bold hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white duration-300">Developer out of the box!</span>
			</p>
        </motion.div>
    )
}

export default TextBounce;