// fetch all the tags

import { fetchIt } from "../utils/Fetch";

const API = "http://localhost:8000";

export const getAllTags = () => {
  return fetchIt(`${API}/tags`);
};

export const deleteTag = (tagId) => {
  return fetch(`http://localhost:8000/tags/${tagId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then(getAllTags);
};

export const editTag = (editedTag, tagId) => {
  return fetch(`http://localhost:8000/tags/${tagId}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedTag),
  }).then(getAllTags);
};

export const getSingleTag = (tagId) => {
  return fetch(`http://localhost:8000/tags/${tagId}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};
