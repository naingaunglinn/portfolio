'use client'
import { motion } from "motion/react"
import Link from "next/link"
import Heading from "./components/Heading"
import HeadTag from "./components/HeadTag"
import TextBounce from "./components/TextBounce"


const Main = () => {
    return(
      	<div>          
		<div className="flex flex-wrap">
			<Heading text="Naing Aung Linn" />
			<HeadTag text="404" />
		</div>			  
		<br/>
		<TextBounce 
			textBounce={{
			text  : "Developer out of the box!",
			animation : {
				initial: {x: 200, opacity: 0},
				animate: {x: 0, opacity: 1},
				transition: {duration: 1.5, type: 'spring', bounce: 0.5},
			}
		}}
		/>
		<p className="text-justify text-[18px] mt-2">An optimistic, flexible, and team-oriented web developer, dedicated to inspiring innovation and fostering collaboration. Committed to excellence in every project, I strive to drive positive change through coding. My journey is defined by a dedication to continuous growth and adaptation, as I seek to push the boundaries of what is possible in the world of coding.</p>
		<div className="mt-20">
			<Link href={'/contact'} className="text-[30px] bg-black text-white dark:bg-white dark:text-black transition-colors duration-300 ease-in-out hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white hover:shadow-sm p-2">Contact Me!</Link>
		</div>
        </div>
    )
}

export default Main; 
