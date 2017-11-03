import React from "react";
import { Route, IndexRoute } from "react-router";
import Home from "./components/home";
import PostList from "./components/post-list";
import Post from "./components/post";


export const routes = (
  <Route path="/">
    <IndexRoute component={Home} />
    <Route path="posts" component={PostList} />
    <Route path="posts/:id" component={Post} />
  </Route>
)
