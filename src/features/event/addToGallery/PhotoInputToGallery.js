import React, { Fragment } from "react";
import { Header, Card, Image } from "semantic-ui-react";


const PhotoInputToGallery = ({ photos, deletePhoto }) => {

    return (
        <Fragment>
            <Header sub color="teal" content="My Photos" />
            <Card.Group itemsPerRow={5}>
                {photos && photos.map(photo => (
                    <Card key={photo.id}>
                        <Image src={photo.url} />
                        
                    </Card>

                ))}
            </Card.Group>
        </Fragment>
    );
};

export default PhotoInputToGallery;
