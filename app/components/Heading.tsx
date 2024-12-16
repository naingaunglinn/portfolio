'use client'

import { motion } from "motion/react"
import Link from "next/link"

type props = {
    text: string
}

const Heading = ({text}:props) => {
    return (
        <motion.div
            initial={{ y: -200, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.5, }}
        >
            <h1 className="bg-black text-white dark:bg-white dark:text-black inline text-[70px] font-bold my-2 px-2 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white duration-300">
            	<Link href='https://github.com/naingaunglinn' target="_blank">{text}</Link>
          </h1>
        </motion.div>
    ); 
}

export default Heading;