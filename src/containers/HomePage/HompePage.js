import React, { Component } from "react";

// import postsMockup from "data-mockup/posts-mockup";
import fbService from "api/fbService";

export class HomePage extends Component {

  componentDidMount() {
  //   fetch("https://react-learn-7f09a-default-rtdb.firebaseio.com/posts.json", {
  //     method: "PUT",
  //     body: JSON.stringify(postsMockup)
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
    fbService.initilizePosts();
  }
  render() {
    return (
      <div>
        Home Page
      </div>
    )
  }
}

export default HomePage;