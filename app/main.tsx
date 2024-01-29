import Link from "next/link"

const Main = () => {
    return(
        <div>
          <h1 className="bg-black text-white dark:bg-white dark:text-black inline text-[70px] font-bold my-2 px-2 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white duration-300">
            	<Link href='https://github.com/naingaunglinn' target="_blank">Naing Aung Linn</Link>
          </h1>
          <span className="bg-black text-white dark:bg-white dark:text-black inline text-[70px] font-bold my-2 ml-2 px-2 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white duration-300">404</span>  
          <br/>
          <p className="mt-2">
            <span className="bg-black text-white dark:bg-white dark:text-black px-2 text-[20px] font-bold hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white duration-300">Developer out of the box!</span>
          </p>
          <p className="text-justify text-[18px] mt-2">An optimistic, flexible, and team-oriented web developer, dedicated to inspiring innovation and fostering collaboration. Committed to excellence in every project, I strive to drive positive change through coding. My journey is defined by a dedication to continuous growth and adaptation, as I seek to push the boundaries of what is possible in the world of coding.</p>
          <div className="mt-20">
            <Link href={'/contact'} className="text-[30px] bg-black text-white dark:bg-white dark:text-black transition-colors duration-300 ease-in-out hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white hover:shadow-sm p-2">Contact Me!</Link>
          </div>
        </div>
    )
}

export default Main; 