
import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google';
import { inter } from "./ui/fonts";
import SideNav from "./ui/menu/sidenav";
import Header from "./ui/header/header";
import { StoreProvider } from "./ui/services/store-provider";
import Footer from "./ui/footer/footer";
import clsx from "clsx";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "Центр кузовного ремонта Пит-Стоп на Борисовской 37а",
    template: "%s | Пит-Стоп | Борисовская 37а",
  },
  description: "Кузовной ремонт, покраска деталей кузова, ремонт бамперов, локальная покраска, полировка кузова и фар, удаление вмятин без покраски  с гаратией 2 года",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    shortcut: '../../public/favicon/apple-touch-icon.png',
    apple: '../../public/favicon/apple-touch-icon.png',
  },
  // robots: {
  //   index: true,
  //   follow: true,
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="ru">
      <GoogleTagManager gtmId="	GTM-5S7PP2" />
      <StoreProvider>
        <body className={clsx(`${inter.className} flex flex-col dark:bg-gradient-to-r from-[#20334D] to-[#1b2e43]`,)}>
          <Header />

          <div className={`flex basis-full  flex-row mt-4 `}>
            <div className="sm:w-64 ">
              <SideNav />
            </div>
            <section className="overflow-y-auto overflow-x-hidden max-h-[calc(100vh-135px)]  mr-2 w-[100%] sm:w-[calc(100%-256px)] ">

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

