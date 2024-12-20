'use client'

import { motion } from "motion/react";

type props = {
    text: string
} 

const HeadTag = ({text}:props) => {
    return (
        <motion.div
            initial={{ y: 200}}
            animate={{ y: 0}}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.5, }}
            
        >
            <span className="bg-black text-white dark:bg-white dark:text-black inline text-[70px] font-bold my-2 px-2 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white duration-300">{text}</span>
        </motion.div>
    )
}

export default HeadTag;

