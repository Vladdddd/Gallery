import React from "react";
import s from './fullPhoto.module.scss';
import { NavLink } from "react-router-dom";

const FullPhoto = ({ currentPhoto }) => {
    let imgClass = "";

    if(!currentPhoto) {
        return <div>loading...</div>
    }

    let chooseClass = currentPhoto.width <= currentPhoto.height;

    return (
        <>
            <div className={s.background}></div>
            <div className={s.full}>
                <div className={s.backButton}>
                    <NavLink to="/">Go Back</NavLink>
                </div>
                <h1 className={s.author}>Author: {currentPhoto.user.first_name}</h1>
                <img className={chooseClass ? s.verticalImg : s.horizontalImg} src={currentPhoto.urls.full} alt="" />
                <div className={s.stuff}>
                    <h1 className={s.stuffItem}>Likes: {currentPhoto.likes}</h1>
                    <h1 className={s.stuffItem}>description: {currentPhoto.description} {!currentPhoto.description && "-"}</h1>
                </div>
            </div>
        </>
    );
}

export default FullPhoto;