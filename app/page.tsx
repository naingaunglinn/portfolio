import Image from "next/image";
import Gallary from "./components/Gallary";
import Link from "next/link";
import Main from "./main";

export default function Home() {
  return (
    <main className="mt-20 font-ti">
      <div className="grid grid-cols-2 grid-flow-col gap-4 justify-between overflow-hidden">
        <Main/>
        <div className="row-start-1 row-end-3">
          <Gallary/>
        </div>
      </div>
      <div className="">
          <h1 className="bg-black text-white dark:bg-white dark:text-black inline text-[70px] font-bold my-2 px-2 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white duration-300">
            	Projects
          </h1>
          <span className="bg-black text-white dark:bg-white dark:text-black inline text-[70px] font-bold my-2 ml-2 px-2 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white duration-300">05</span> 
        <div>
            <div className="grid grid-cols-5 grid-flow-col gap-4 justify-between pt-4">
                <div className="col-span-2">
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="/hobby/img-5.jpeg"
                        alt="buffelo"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="col-span-3">
                    <span className="bg-black text-white dark:bg-white dark:text-black px-2 text-[20px] font-bold hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white duration-300">FMG Management System</span>
                    <p className="text-justify text-[18px] mt-2   ">
                        Car rental service is a web application that allows users to book and rent cars online. Users can choose from different car models, insurance options, and guarantor services. The application handles contract creation, quotation generation, product management, delivery inspection, and payment management. The application is built using the Laravel framework and hosted on an Azure cloud server.
                    </p>
                    <div className="mt-8">
                        <Link href={'/project/1'} className="text-[30px] bg-black text-white dark:bg-white dark:text-black transition-colors duration-300 ease-in-out hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white hover:shadow-sm p-2">Seek more &gt;&gt;&gt;</Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 grid-flow-col gap-4 justify-between pt-4 mt-[100px]">
                <div className="col-span-3 text-right">
                    <span className="bg-black text-white dark:bg-white dark:text-black px-2 text-[20px] font-bold hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white duration-300">Uma Owner Horse Management System</span>
                    <p className="text-justify text-[18px] mt-2   ">
                        We have developed a Horse Support System that allows users to support their favorite horses with donations and rewards. The system is built with database, AWS for the cloud services, and Stripe for the payment processing. The system features a payment system that enables users to donate to horses and receive invoices and receipts, and a point system that allows users to earn points for supporting horses and redeem them for various benefits. The system is designed to be user-friendly, secure, Educationand scalable.
                    </p>
                    <div className="mt-20 text-right">
                        <Link href={'/project/1'} className="text-[30px] bg-black text-white dark:bg-white dark:text-black transition-colors duration-300 ease-in-out hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white hover:shadow-sm p-2">Seek more &gt;&gt;&gt;</Link>
                    </div>
                </div>
                <div className="col-span-2">
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="/hobby/img-4.JPG"
                        alt="buffelo"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
            <div className="grid grid-cols-5 grid-flow-col gap-4 justify-between pt-4">
                <div className="col-span-1">
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="/hobby/img-3.JPG"
                        alt="buffelo"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="col-span-4">
                    <span className="bg-black text-white dark:bg-white dark:text-black px-2 text-[20px] font-bold hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white duration-300">Key Persons Event Management Application</span>
                    <p className="text-justify text-[18px] mt-2   ">
                    Developed a comprehensive event management application that allows users to create, edit, and join events online. Utilized React for the front end to provide a dynamic and interactive user experience. Employed TypeScript for type safety and enhanced code quality. Implemented GraphQL for efficient data fetching and manipulation. Used MUI for building consistent and visually appealing UI components. Managed version control using Git to ensure smooth collaboration and code management. Leveraged AWS Lambda for serverless back-end functions, ensuring scalability and cost-efficiency. Integrated a chat feature that allows participants and organizers to communicate seamlessly within the application.
                    </p>
                    <div className="mt-8">
                        <Link href={'/project/1'} className="text-[30px] bg-black text-white dark:bg-white dark:text-black transition-colors duration-300 ease-in-out hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white hover:shadow-sm p-2">Seek more &gt;&gt;&gt;</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
