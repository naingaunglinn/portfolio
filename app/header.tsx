import Link from "next/link";
import { nav } from "@/types";
import ThemeSwitch from "./components/ThemeSwitch";

interface navProps {
    nav: nav[]
}

const Header = ({nav}:navProps) => {
    return(
        <header className="z-10 fixed top-8 w-full">
            <div className="flex justify-center text-[18px] font-ti ">
                <div className="shadow-sm backdrop-blur-sm dark:bg-white/10 bg-black/30 flex justify-center gap-4 rounded-full p-2">
                    {nav.map((content,index) => {
                        return(
                            <div key={index} className="px-4 dark:text-white text-black dark:hover:bg-black hover:text-black hover:bg-white dark:hover:text-white hover:rounded-full font-bold "><Link href={content.slug} className="">{content.name}</Link></div>
                        )
                    })}
                    <div className="px-4 self-center dark:text-white text-black  font-bold "><ThemeSwitch /></div>
                </div>
            </div>
        </header>
    )
} 

export default Header;