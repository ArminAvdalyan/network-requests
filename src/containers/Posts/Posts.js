import React, { Component } from "react";

import Post from "components/Post/Post";
import service from "api/service";
// import { getAllPosts } from "api/requestData";

import "./Posts.scss";

const limit = 9;

export class Posts extends Component {
  state = {
    posts: [],
    start: 0,
    hasMore: true,

  }

  componentDidMount() {
    service.getPosts(this.state.start, limit)
    .then(resJson => {
      this.setState({
        posts: resJson
      })
    })
    // .catch(err => {

    // })
  }

  updatePost = () => {
    service.updatePost(3, {title: "Another Title"})
    .then(data => {
      const newPosts = this.state.posts.map(el => {
        if(el.id == data.id) {
          return data;
        }
        return el;
      })
      this.setState({
        posts: newPosts
      })
    })
  }

  createPost = () => {
    service.createPost({
      title: "Awsome Title",
      body: "Nice body",
      userId: 1
    })
    .then(data => {
      this.setState({
        posts: [...this.state.posts, data]
      })
    })
  }

  deletePost = (id) => {
    service.deletePost(id)
    .then(() => {
      this.setState({
        posts: this.state.posts.filter((el) => {
          return el.id !== id;
        })
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  getMore = () => {
  
    const newStart = this.state.start + limit;
    this.setState({
      start: newStart,
    })
    service.getPosts(newStart)
    .then(data => {
      this.setState({
        posts: [...this.state.posts, ...data],
        hasMore: data.length < limit ? false : true,
      })
    })
  } 

  render() {
    return (
      <div className="app-posts">
        <div className="app-posts__container">
        {
          this.state.posts.map(post => {
            return <Post 
            key={post.id}
            post={post}
            className="app-posts__container__post" />
          })
        }
        </div>
        {/* <button onClick={this.createPost}>Create post</button>
        <button onClick={this.updatePost}>Update post</button>
        <button onClick={() => this.deletePost(1)}>Delete post</button> */}
        {this.state.hasMore ? <button onClick={this.getMore}>Get more</button> : null }     
      </div>
    )
  }
}

export default Posts;