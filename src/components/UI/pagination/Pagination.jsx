import React, {useMemo} from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = useMemo(() => {
        console.log(totalPages)
        return getPagesArray(totalPages)
    }, [totalPages])
    return (
        <div className='page__wrapper'>
            {pagesArray.map((p) => <span onClick={() => {
                changePage(p)
            }} key={p} className={page === p ? 'page__item page__current' : 'page__item'}>
                    {p}
                </span>)}
        </div>
    );
};

export default Pagination;