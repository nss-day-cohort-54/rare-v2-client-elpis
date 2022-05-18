// fetch all the categories

import { fetchIt } from "../utils/Fetch"

const API = 'http://localhost:8000'

export const getAllCategories = () => {
  return fetchIt(`${API}/categories`)
    
}
export const getSingleCategory = (categoryId) => {
  return fetch(`http://localhost:8000/categories/${categoryId}`, {
      headers:{
          "Authorization": `Token ${localStorage.getItem("lu_token")}`
      }
   })
      .then(response => response.json())
}
export const updateCategory = (updatedCategory, categoryId) => {
  return fetch(`http://localhost:8000/categories/${categoryId}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCategory),
  }).then(getAllCategories);
};

export const deleteCategory = (categoryId) => {
  return fetch(`http://localhost:8000/categories/${categoryId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
  }).then(getAllCategories);
};
