import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const LoaderSpiner = () => (
  <div>
    <Segment style={{ marginTop: "300px" }}>
      <Dimmer active inverted>
        <Loader size="medium">Loading</Loader>
      </Dimmer>

      <Image src="/images/wireframe/paragraph.png" />
    </Segment>
  </div>
);

export default LoaderSpiner;
