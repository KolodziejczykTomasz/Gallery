import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { uploadImageToGallery } from '../addToGallery/PhotoInputToGalleryActions';
import InputPhotoToGallery from './InputPhotoToGallery';



const query = () => {
    return [
        {
            collection: 'photos',
            storeAs: 'photos'
        }
    ];
};


const actions = {
    uploadImageToGallery
};


const mapState = state => ({
    auth: state.firebase.auth,
    photos: state.firestore.ordered.photos,
});




const InputToGallery = ({  photos}) => {
    const [files] = useState([]);
    const [cropResult] = useState('');    



    useEffect(() => {
        return () => {
            files.forEach(file => URL.revokeObjectURL(file.preview));
            URL.revokeObjectURL(cropResult);
        };
    }, [files, cropResult]);



    return (        
        <InputPhotoToGallery
                photos={photos}
            />        
       
    );
};

export default compose(connect(mapState, actions), firestoreConnect(auth => query(auth)))(InputToGallery);