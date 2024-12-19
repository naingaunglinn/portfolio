import Image from "next/image";
import ImageBounce from "./ImageBounce";

const Gallary = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-6 grid-rows-2 gap-4">
            <div className="row-span-4 col-span-2 grid gap-4">
                <ImageBounce imageBounce={{
                    className: "h-auto max-w-full rounded-lg",
                    src: "/hobby/img-3.JPG",
                    alt: "skyline",
                    dimension: {
                        width: 1000,
                        height: 1000
                    },
                    animation: {
                        initial: {y: -200, opacity: 0},
                        animate: {y: 0, opacity: 1},
                        transition: {duration: 1.5, type: 'spring', bounce: 0.5},
                    }
                }} />
            </div>
            <div className="grid gap-4  col-span-4">
                <ImageBounce imageBounce={{
                    className: "h-auto max-w-full rounded-lg",
                    src: "/hobby/img-5.jpeg",
                    alt: "donation",
                    dimension: {
                        width: 1000,
                        height: 1000
                    },
                    animation: {
                        initial: {y: 200, opacity: 0},
                        animate: {y: 0, opacity: 1},
                        transition: {duration: 1.5, type: 'spring', bounce: 0.5},
                    }
                }} />
            </div>
            <div className="grid gap-4 col-span-2">
                <ImageBounce imageBounce={{
                    className: "h-auto max-w-full rounded-lg",
                    src: "/hobby/img-1.jpg",
                    alt: "the gril and the sea",
                    dimension: {
                        width: 1000,
                        height: 1000
                    },
                    animation: {
                        initial: {x: 200, opacity: 0},
                        animate: {x: 0, opacity: 1},
                        transition: {duration: 1.5, type: 'spring', bounce: 0.5},
                    }
                }} />
            </div>
            <div className="grid gap-4 col-span-2">
                <ImageBounce imageBounce={{
                    className: "h-auto max-w-full rounded-lg",
                    src: "/hobby/img-4.JPG",
                    alt: "buffelo",
                    dimension: {
                        width: 1000,
                        height: 1000
                    },
                    animation: {
                        initial: {x: 200, opacity: 0},
                        animate: {x: 0, opacity: 1},
                        transition: {duration: 1.5, type: 'spring', bounce: 0.5},
                    }
                }} />
            </div>
        </div>
    )
}

export default Gallary;