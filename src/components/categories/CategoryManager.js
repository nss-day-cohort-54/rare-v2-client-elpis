// fetch all the categories

<<<<<<< HEAD
=======
import { fetchIt } from "../utils/Fetch"

>>>>>>> main
const API = 'http://localhost:8000'

export const getAllCategories = () => {
  return fetchIt(`${API}/categories`)
    
}

export const updateCategory = (updatedCategory, categoryId) => {
  return fetch(`http://localhost:8000/games/${categoryId}`, {
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
