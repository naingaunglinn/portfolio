import type { Metadata } from "next";
import { Inter, Titillium_Web } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });
const titillium = Titillium_Web({ 
  weight: ['200','300','400','600','700','900'], 
  style:['normal','italic'],
  subsets:['latin'], 
  variable: '--font-ti', 
})

export const metadata: Metadata = {
  title: "naingaungl_404",
  description: "Amazing Beast with swap brain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const nav = [
    {
      name: 'Home',
      slug: '/'
    },
    {
      name: 'Project',
      slug: 'project'
    },
    {
      name: 'About',
      slug: 'about',
    },
    {
      name: 'Contact',
      slug: 'contact'
    }
  ]
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-gradient-to-b text-black dark:text-white from-gray-50 dark:from-black to-white dark:to-black ${inter.className} ${titillium.variable} p-10`}>
        <Providers>
          <Header nav={nav}/>
            {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
