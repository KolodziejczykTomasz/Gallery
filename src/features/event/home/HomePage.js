import React from "react";
import {
  Segment,
  Container,
  Header,
  Image,
  Button,
  Icon
} from "semantic-ui-react";
import brand from "../../../assets/images/brand.png";

const HomePage = ({ history }) => {
  return (
    //    style={{ marginTop: '50px' }}>
    <Segment
      style={{ height: "100vh" }}
      inverted
      textAlign="center"
      vertical
      className="masthead"
    >
      <Container text>
        <Header as="h1" inverted style={{ marginTop: "30vh" }}>
          <Image
            size="massive"
            src={brand}
            alt="logo"
            style={{ marginBottom: 12, marginLeft: -20 }}
          />
          <span style={{ marginLeft: "8px", textTransform: "uppercase" }}>
            <span style={{ color: "orange" }}>Gal</span>lery
          </span>
        </Header>
        <Button onClick={() => history.push("/event")} size="huge" inverted>
          Get started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
