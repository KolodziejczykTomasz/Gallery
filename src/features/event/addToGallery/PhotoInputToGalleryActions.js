import { toastr } from "react-redux-toastr";
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../../async/asyncActions";
import cuid from 'cuid';
import "firebase/storage";


export const uploadImageToGallery = (file, fileName) =>

    async (dispatch, getState, { getFirebase, getFirestore }) => {
        const imageName = cuid();
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        const path = `photos`;
        const options = {
            name: imageName
        };
        try {
            dispatch(asyncActionStart())
            let uploadedFile = await firebase.uploadFile(path, file, null, options);
            let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
            let userDoc = await firestore.get(`users/${user.uid}`);
            // check if user has photo, if not update profile
            if (!userDoc.data().photoURL) {
                await firebase.uploadedFile({
                    photoURL: downloadURL
                });
                await user.uploadedFile({
                    photoURL: downloadURL
                })
            }

            console.log({ downloadURL })
            await firestore.add({
                collection: 'photos'
            }, {
                name: imageName,
                url: downloadURL
            })
            dispatch(asyncActionFinish())
        } catch (error) {
            console.log(error)
            dispatch(asyncActionError())
        }
    }

export const deletePhoto = (photo) =>
    async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        try {
            await firebase.deleteFile(`${user.uid}/user_images/${photo.name}`);
            await firestore.delete({
                collection: 'users',
                doc: user.uid,
                subcollections: [{ collection: 'photos', doc: photo.id }]
            })
        } catch (error) {
            console.log(error)
            toastr.error('Problem deleting the photo')
        }
    }