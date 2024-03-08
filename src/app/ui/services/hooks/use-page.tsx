import { useEffect, useMemo, useState } from "react";
import { pagesArr } from "../../pager-arr/pages-arr";
import { IPages } from "../../types";

// хук возвращает  страницу отфильтрованную по названию страницы в ссылке

const usePageObj = (pageName: string) => {
    const [page, setPage] = useState<IPages>();

    useEffect(() => {
        let pageFilter = pagesArr?.find(item => item.path === `/${pageName}`);
        setPage(pageFilter)
    }, [pageName]);

    // запоминаем в переменную page,  и возвращаем из хука
    const pageObj = useMemo(() => ({
        page
    }), [page])
    return pageObj;
}

export default usePageObj;
