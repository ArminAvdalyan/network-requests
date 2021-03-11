import React, { Component } from "react";

import Post from "components/Post/Post";
import service from "api/service";
// import { getAllPosts } from "api/requestData";

import "./Posts.scss";
import fbService from "api/fbService";

const limit = 8;

export class Posts extends Component {
  state = {
    posts: null,
    start: 0,
    hasMore: true,
    loading: false,
  }

  componentDidMount() {
    fbService.getPosts(this.state.start, limit)
      .then(resJson => {
        this.setState({
          posts: resJson,
        })
      })
  }

  updatePost = () => {
    service.updatePost(3, { title: "Another Title" })
      .then(data => {
        const newPosts = this.state.posts.map(el => {
          if (el.id == data.id) {
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
    const newStart = this.state.start + limit + 1;
    this.setState({
      start: newStart,
      loading: true
    })
    fbService.getPosts(newStart, newStart + limit)
      .then(data => {
        this.setState({
          posts: [...this.state.posts, ...data],
          hasMore: data.length < limit ? false : true,
          loading: false
        })
      })
  }

  render() {
    const { loading, hasMore, posts } = this.state;
    if (!posts) {
      return <div>Loading...</div>
    }
    return (
      <div className="app-posts">
        {posts.length > 0 ? (
          <>
            <div className="app-posts__container">
              {
                posts.map(post => {
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
            {hasMore ? <button onClick={this.getMore} disabled={loading}>{loading ? "Loading..." : "Get More"}</button> : null}
          </>
        ) : (
            <div>No results</div>
          )}
        
      </div>
    )
  }
}

export default Posts;