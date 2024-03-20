'use client'

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { links } from './links-map';
import Image from 'next/image';

export default function NavLinks() {
  const router = useRouter();
  const pathname = usePathname();


  return (
    <>
      {links && links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            aria-current={pathname === link.href ? 'page' : undefined}
            aria-label={`Ссылка на страницу ${link.name}`}
            role='menubar'
            className={clsx(
              'z-10 flex h-[48px] items-center gap-2 rounded-md p-3 text-sm font-medium flex-auto w-48 sm:w-56 justify-start  px-3 hover:bg-sky-200 hover:text-[#AE4A84] bg-gray-200 text-blue-600 dark:bg-gray-800 dark:text-stone-300 dark:hover:bg-gray-800 ',
              {
                'dark:bg-gray-900/70 dark:[color:#AE4A84] [color:#AE4A84] ': pathname === link.href,
              },
            )}

          // style={{ textShadow: '5px 2px 2px pink' }}

          >
            <Image src={link.icon} alt={link.name} className='h-auto w-6 sm:w-[35]' />
            <p className='truncate'>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
