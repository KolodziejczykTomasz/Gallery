import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {
  Image,
  Segment,
  Header,
  Divider,
  Grid,
  Button
} from 'semantic-ui-react';
import DropzoneInput from './DropzoneInput';
import CropperInput from './CropperInput';
import {
  uploadProfileImage,
  
} from '../../user/userActions';
import { toastr } from 'react-redux-toastr';
import PhotoInput from './PhotoInput';



const query = ({ auth }) => {
  return [
    {
      collection: 'users',
      doc: auth.uid,
      subcollections: [{ collection: 'photos' }],
      storeAs: 'photos'
    }
  ];
};



const actions = {
  uploadProfileImage,

};




const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  photos: state.firestore.ordered.photos,
  loading: state.async.loading
});





const AddPhoto = ({
  uploadProfileImage,
  photos,
  profile,
  deletePhoto,
  setMainPhoto,
  loading
}) => {
  const [files, setFiles] = useState([]);
  const [cropResult, setCropResult] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
      URL.revokeObjectURL(cropResult);
    };
  }, [files, cropResult]);




  const handleUploadImage = async () => {
    try {
      await uploadProfileImage(image, files[0].name);
      handleCancelCrop();
      toastr.success('Success', 'Photo has been uploaded');
    } catch (error) {
      toastr.error('Oops', 'Something went wrong');
    }
  };



  
  const handleCancelCrop = () => {
    setFiles([]);
    setImage(null);
    setCropResult('');
  };
  

  return (
    <Segment>
      <Header dividing size='large' content='Your Photos' />
      <Grid>
        <Grid.Row />
        <Grid.Column width={4}>
          <Header color='teal' sub content='Step 1 - Add Photo' />
          <DropzoneInput setFiles={setFiles} />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color='teal' content='Step 2 - Resize image' />
          {files.length > 0 && (
            <CropperInput
              imagePreview={files[0].preview}
              setCropResult={setCropResult}
              setImage={setImage}
            />
          )}
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color='teal' content='Step 3 - Preview & Upload' />
          {files.length > 0 && (
            <Fragment>
              <Image
                src={cropResult}
                style={{ minHeight: '200px', minWidth: '200px' }}
              />
              <Button.Group>
                <Button
                  onClick={handleUploadImage}
                  loading={loading}
                  style={{ width: '100px' }}
                  positive
                  icon='check'
                />
                <Button
                  disabled={loading}
                  onClick={handleCancelCrop}
                  style={{ width: '100px' }}
                  icon='close'
                />
              </Button.Group>
            </Fragment>
          )}
        </Grid.Column>
      </Grid>

      <Divider />
      <PhotoInput
        photos={photos}
        profile={profile}     
      />
    </Segment>
  );
};

export default compose(
  connect(
    mapState,
    actions
  ),
  firestoreConnect(auth => query(auth))
)(AddPhoto);