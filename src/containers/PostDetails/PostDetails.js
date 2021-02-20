import service from "api/service";
import React, { Component } from  "react";


import Post from "components/Post/Post";

export class PostDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(props.match.params.postsId);
    this.state = {
      post: null
    }
  }

  componentDidMount() {
    service.getPost(this.props.match.params.postsId)
    .then(data => {
      this.setState({
        post: data
      }) 
    })
    .catch (err => {
      console.log(err);
      this.props.history.push("/");
    })
  }

  render() {
    const {post} = this.state;
    if(!post) {
      return <div>Loading...</div>
    }
    return (
      <div className="app-detail">
        <Post 
          post = {this.state.post}
        />
      </div>
    )
  }
}

export default PostDetails;