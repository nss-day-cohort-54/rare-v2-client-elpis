import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./home/Home.js";
import { AllPosts } from "./posts/AllPosts.js";
import { UserList } from "./users/UserList.js";
import { AllTags } from "./tags/AllTags.js";
// import { TagEdit } from "./tags/UpdateTag.js";
import { AllCategories } from "./categories/AllCategories";

import { User } from "./users/User.js"
import { CreatePosts } from "./posts/CreatePosts.js"
import { MyPosts } from "./posts/MyPosts.js"
import { PostsByUser } from "./posts/PostsByUser.js"
import { SinglePost } from "./posts/SinglePost.js"
import { EditPost } from "./posts/EditPost.js"


export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/posts/all">
        <AllPosts />
      </Route>
      <Route exact path="/users">
        <UserList />
      </Route>
      <Route exact path="/users/:userId(\d+)">
        <User listView={false} />
      </Route>
      <Route path="/tags">
        <AllTags />
      </Route>
      {/* <Route exact path="/tags/:tagId(\d+)">
        <TagEdit />
      </Route> */}
      <Route exact path="/newPost">
        <CreatePosts editing={false} />
      </Route>
      <Route exact path="/editPost/:postId(\d+)">
        <CreatePosts editing={true} />
      </Route>
      <Route exact path="/posts/single/:postId(\d+)">
        <SinglePost />
      </Route>
      <Route exact path="/posts/myPosts">
        <MyPosts />
      </Route>
      <Route exact path="/posts/user/:userId(\d+)">
        <PostsByUser />
      </Route>
      <Route exact path="/updatePost/:postId(\d+)">
        <EditPost />
      </Route> 
      <Route exact path="/categories">
        <AllCategories />
      </Route>
    </>
  );
};
