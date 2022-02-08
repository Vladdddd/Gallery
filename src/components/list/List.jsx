import React from "react";
import s from './list.module.scss';
import ListItem from "./ListItem";

const List = ({ images, onPageChanged, currentPage, totalPhotosCount, pageSize, Paginator, onImgClicked }) => {

    if (!images) {
        return <div>loading...</div>
    }
    
    return (
        <div>
            <div className={s.images}>
                {images.map((item, index) => {
                    return <ListItem photoInfo={item} author={item.user.first_name} key={index} onImgClicked={onImgClicked}/>
                })}
            </div>

            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                totalItemsCount={totalPhotosCount} pageSize={pageSize}/>
        </div>
    );
}

export default List;