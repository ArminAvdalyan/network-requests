import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from 'components/Header/Header';
import Layout from 'components/Layout/Layout';
import Posts from 'containers/Posts/Posts';
import Todo from "containers/Todo/Todo";
import HomePage from "containers/HomePage/HompePage";
import PostsDetails from "containers/PostDetails/PostDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Layout >
        {/* <Switch> */}
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:postsId" component={PostsDetails} />
          <Route exect path="/todo" render={(routeParams) => <Todo {...routeParams} />} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="*" >
            {/* <div>404</div> */}
          </Route>
        {/* </Switch> */}
      </Layout>
    </BrowserRouter>
  )
}

export default AppRoutes;