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
  });
};
