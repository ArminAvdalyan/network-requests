import React from "react";
import PropTypes from "prop-types";

import "./Post.scss";

const Post = ( { post, className = "" } ) => {
  return (
    <div className={`app-post ${className}`}>
      <span className="app-post__title">{post.title}</span>
      console.log(post.title);
      <span className="app-post__body">{post.body}</span>
    </div>
  )
}

Post.prototypes = {
  post:PropTypes.shape( {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  }),
  className: PropTypes.string,
}

export default Post;