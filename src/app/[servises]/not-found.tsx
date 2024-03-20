import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';


export default function NotFound() {

    return (
        <main className="flex h-full flex-col items-center justify-center gap-2">
            <FaceFrownIcon className="w-10 dark:text-gray-300 text-gray-500" />
            <h2 className="text-xl font-semibold dark:text-stone-300">404 Не найдено</h2>
            <p className='dark:text-gray-300 text-gray-500'>Такая страница не существует.</p>
            <Link
                href="/"
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
            >
                НА ГЛАВНУЮ
            </Link>
        </main>
    );
}