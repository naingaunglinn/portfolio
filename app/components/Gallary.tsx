import Image from "next/image";

const Gallary = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-6 grid-rows-4 gap-4">
            <div className="row-span-4 col-span-2 grid gap-4">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="/hobby/img-3.JPG"
                        alt="buffelo"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
            <div className="grid gap-4  col-span-4">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="/hobby/img-5.jpeg"
                        alt="buffelo"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
            <div className="grid gap-4 col-span-2">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="/hobby/img-1.jpg"
                        alt="buffelo"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
            <div className="grid gap-4 col-span-2">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="/hobby/img-4.JPG"
                        alt="buffelo"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </div>
    )
}

export default Gallary;