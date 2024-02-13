'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { links } from './links-map';
import Image from 'next/image';

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links && links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            aria-current={pathname === link.href ? 'page' : undefined}
            className={clsx(
              ' flex h-[48px] items-center  gap-2 rounded-md  p-3  text-sm font-medium   flex-auto w-48 sm:w-56 justify-start  px-3',
              'dark:bg-gray-800 dark:text-stone-300 dark:hover:bg-gray-800 dark:hover:text-[#AE4A84]',
              'hover:bg-sky-200 hover:text-[#AE4A84] bg-gray-200 text-blue-600',
              {
                'bg-[#bae6fd]  text-[#ae4a84]': pathname === link.href,
                ' dark:bg-gray-900 dark:text-[#AE4A84]': pathname === link.href,
              },
            )}
          >
            <Image src={link.icon} alt={link.name} className='h-auto w-6 sm:w-[35]' />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
