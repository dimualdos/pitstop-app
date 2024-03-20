import { links } from '../ui/menu/links-map';
import DynamicPage from '../ui/dynamic-page';
import { FC } from 'react';


export async function generateStaticParams() {
    return links.map((product) => ({
        servises: product.href
    }))
}

const Page: FC<{ params: { servises: string } }> = ({ params }) => {


    return (
        <>
            <DynamicPage />
        </ >
    )
}

export default Page;


