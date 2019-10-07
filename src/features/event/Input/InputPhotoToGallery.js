import React from "react";
import styles from "./InputPhotoToGallery.module.scss";

const InputPhotoToGallery = ({ photos }) => {

    return (
        <div className={styles.gallery} >
            {photos && photos.map(photo => (
                <div  className={styles.galleryItem} key={photo.id}>
                    <img className={styles.galleryItemImg}src={photo.url} alt={photo.name} />
                </div>))}

        </div>
    );
};

export default InputPhotoToGallery;
