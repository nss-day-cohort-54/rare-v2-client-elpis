import { fetchIt } from "../utils/Fetch";
import { Settings } from "../utils/Settings";

export const getAllPosts = () => {
  return fetchIt(`${Settings.API}/posts`)
}

// export function that fetches single post, needs param to take id as arg, then parse from json to js

export const getSinglePost = (id) => {
  return fetchIt(`${Settings.API}/posts/${id}`);
};
// export function that adds post

// for each post, return the fetch entries,

// method is POST
// headers

// body will have stringified json with (post) as arg
// then getAllPosts

// export function that deletes a single post "postId => {"
// return a fetch with /${postId},
// method: DELETE
export const deletePost = (id) => {
  return fetchIt(`${Settings.API}/posts/${id}`, "DELETE");
};

// export a function that edits a post "post => {"
// return fetch with /{post.id}
// method: PUT
// normal headers
// body is stringified json with entry passed as arg

// get posts by user id
export const getUserPosts = () => {
  return fetchIt(`${Settings.API}/posts/current_user_list`)
};

export const getPostsByUser = (id) => {
  return fetchIt(`${Settings.API}/posts?user=${id}`);
};

export const getPostsByTag = (id) => {
  return fetchIt(`${Settings.API}/posts?tag_id=${id}`);
};
// get posts by categoryId
// export const getPostsByCategoryId = (categoryId) => {
//   return fetch(`http://localhost:8000/posts?categoryId=${categoryId}`)
//   .then(response => response.json())
// }

// create post
// export const createPost = (body) => {
//   return fetch(`http://localhost:8000/posts`, {

//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   }).then((response) => response.json());
// };

export const searchPostTitles = titleString => {
  return fetchIt(`http://localhost:8000/posts?title=${titleString}`)
};

export const searchPostCategories = categoryId => {
  return fetchIt(`http://localhost:8000/posts?category=${categoryId}`)
};

export const updatePost = (newPost, postId) => {
  return fetch(`http://localhost:8000/posts/${postId}`, {
      method: "PUT",
      headers: {
          "Authorization": `Token ${localStorage.getItem("lu_token")}`,
          "Content-Type": "application/JSON"
      },
      body: JSON.stringify(newPost)
  })
  .then(getAllPosts())
}
