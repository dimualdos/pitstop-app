
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideNav from "./ui/menu/sidenav";
import Header from "./ui/header/header";
import { StoreProvider } from "./ui/services/store-provider";
import "./globals.css";
import Footer from "./ui/footer/footer";
import clsx from "clsx";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Центр кузовного ремонта Пит-Стоп на Борисовской 37а",
  description: "Кузовной ремонт с гаратией 2 года",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="ru">

      <StoreProvider>
        <body className={clsx(`${inter.className} flex flex-col dark:bg-gradient-to-r from-[#20334D] to-[#1b2e43]`,)}>

          <Header />

          <div className={`flex basis-full  flex-row mt-4 `}>
            <div className="sm:w-64 ">
              <SideNav />
            </div>
            <section className="overflow-y-auto overflow-x-hidden max-h-[calc(100vh-125px)]  mr-2 w-[100%] sm:w-[calc(100%-256px)] ">
              {children}
            </section>
          </div>
          <div className="fixed bottom-0 w-[100vw]">
            <Footer />
          </div>

          <div id='portal' aria-modal="true"></div>
        </body>
      </StoreProvider>
    </html>
  );
}

