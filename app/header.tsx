import Link from "next/link";
import { nav } from "@/types";

interface navProps {
    nav: nav[]
}

const Header = ({nav}:navProps) => {
    return(
        <header className="z-10 fixed top-8 w-full">
            <div className="flex justify-center text-[18px] font-ti ">
                <div className="shadow-sm backdrop-blur-sm bg-white/10 flex justify-center rounded-full p-2">
                    {nav.map((content,index) => {
                        return(
                            <div key={index} className="px-4 hover:bg-black hover:rounded-full font-bold "><Link href={content.slug} className="">{content.name}</Link></div>
                        )
                    })}
                </div>
            </div>
        </header>
    )
} 

export default Header;