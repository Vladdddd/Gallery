import React, { useState } from 'react';
import s from './paginator.module.scss';
import cn from 'classnames';

let Paginator = ({ totalItemsCount, portionSize = 10, ...props }) => {
    let pagesCount = Math.ceil(totalItemsCount / props.pageSize);
    let pages = [];
    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);

    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    if (totalItemsCount < props.pageSize) {
        return <></>
    }

    return (
        <div className={s.items}>
            
            {portionNumber > 1 &&
                <button className={s.toogleButton} onClick={() => { setPortionNumber(portionNumber - 1) }}>Left</button>}
            
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, index) => {
                    return <span key={index} className={cn({ [s.selectedPage]: props.currentPage === p }, s.pageNumber)}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            
            {portionCount > portionNumber &&
                <button className={s.toogleButton} onClick={() => { setPortionNumber(portionNumber + 1) }}>Right</button>}
        
        </div>
    );
}

export default Paginator