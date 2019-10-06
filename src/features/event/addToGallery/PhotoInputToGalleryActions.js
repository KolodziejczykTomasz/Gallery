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

