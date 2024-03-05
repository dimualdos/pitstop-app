
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideNav from "./ui/menu/sidenav";
import Header from "./ui/header/header";
import { StoreProvider } from "./ui/services/store-provider";
import "./globals.css";
import Footer from "./ui/footer/footer";


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
        <body className={`${inter.className} `}>
          <Header />

          <div className={`h-[82vh] flex basis-full  flex-row mt-4`}>
            <div className="sm:w-64 ">
              <SideNav />
            </div>
            <section className="flex-row justify-center mr-2 w-[100%] sm:w-[calc(100%-256px)] overflow-y-auto overflow-x-hidden ">
              {children}
            </section>
          </div>
          <Footer />
          <div id='portal' aria-modal="true"></div>
        </body>
      </StoreProvider>
    </html>
  );
}

