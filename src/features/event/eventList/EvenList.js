import React, { Component } from "react";
import LoaderSpiner from "../spin/Spin";
import styles from "./EventList.module.scss";


class EventList extends Component {
  state = {
    items: "",
    isLoaded: false,   
  };

  componentDidMount() {
    fetch(
      "https://pixabay.com/api/?key=10344099-eb370ff956eb9435dbed2c02c&q=flower&image_type=photo"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.hits
        });
      });
  }

  render() {
    let { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <LoaderSpiner />;
    } else {
      return (              
          <div className={styles.gallery}>
            {items.map(item => (
              <div className={styles.galleryItem} key={item.id} id={item.id}>
                <img src={item.userImageURL} alt={item.user} />
              </div>
            ))}           
            
          </div>    
      );
    }
  }
}

export default EventList;
