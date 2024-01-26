import Image from "next/image";
import Gallary from "./components/Gallary";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-20 font-ti">
      <div className="grid grid-rows-2 grid-cols-2 grid-flow-col gap-4 justify-between p-4">
        <div>
          <h1 className="bg-white text-black inline text-[70px] font-bold my-2 px-2 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300">
            	<Link href='https://github.com/naingaunglinn' target="_blank">Naing Aung Linn</Link>
          </h1>
          <span className="bg-white text-black inline text-[70px] font-bold my-2 ml-2 px-2 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300">404</span>  
          <br/>
          <p className="mt-2">
            <span className="bg-white text-black px-2 text-[20px] font-bold hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300">Developer out of the box!</span>
            <span></span>
          </p>
          <p className="text-justify text-[18px] mt-2">An optimistic, flexible, and team-oriented developer, dedicated to inspiring innovation and fostering collaboration. Committed to excellence in every project, I strive to drive positive change through coding.My journey is defined by a dedication to continuous growth and adaptation, as I seek to push the boundaries of what is possible in the world of coding.</p>
        </div>
        <div className="row-start-1 row-end-3">
          <Gallary/>
        </div>
      </div>
    </main>
  );
}
