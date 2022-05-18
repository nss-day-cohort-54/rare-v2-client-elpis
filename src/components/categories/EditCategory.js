// imports
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { updateCategory } from "./CategoryManager";


export const EditCategoryForm = ({ selectedCategory, setEditableState, getCategories }) => {
  const [form, updateForm] = useState({ label: "" });
  const [category, setCategory] = useState([])

  const submitNewCategory = (e) => {
    e.preventDefault();
    const newCategory = {
      label: e.target.value
    }
    setCategory(newCategory)
    }

  return (
    <>
      <fieldset>
        <div className="form-group">
          <label htmlFor="category">Edit Category</label>
          <input
            required
            autoFocus
            type="text"
            id="category"
            className="form-control"
            defaultValue= {selectedCategory.label}
            onChange={(e) => {
              submitNewCategory(e)
            }}
          />
          <div className="submitButtonCreateNewCategoryForm">
            <button
              onClick={() => {
                updateCategory(category,selectedCategory.id);
                setEditableState(false)
                getCategories()
              }}
              className="submit-button"
            >
              Save
            </button>
            <button
              className="cancel-button" 
            >
              Cancel
            </button>
          </div>
        </div>
      </fieldset>
    </>
  );
};

// add a button, which when clicked will invoke the submit new category function from the top of this module
/* <button onClick={submitNewCategory} className="submit-button">
                    Submit
                </button> */
