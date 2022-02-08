import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from './list.module.scss';

const ListItem = ({ onImgClicked, photoInfo }) => {
    //console.log(photoInfo);
    return (
        <div className={s.listItem}>
            <div className={s.imgWrapper}>
                <NavLink to="/full"><img className={s.smallImg} src={photoInfo.urls.small} alt="" onClick={() => { onImgClicked(photoInfo) }} /></NavLink>
            </div> 
            <h1 className={s.author}>Author: {photoInfo.user.first_name}</h1>
        </div>
    );
}

export default ListItem;