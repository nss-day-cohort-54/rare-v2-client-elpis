// imports
// import getAllCategories from /.CategoryManager 
import { deleteCategory, getAllCategories } from "./CategoryManager";
import React, { useEffect, useState } from "react";
import { NewCategoryForm } from "./CreateCategoryForm";
import { EditCategoryForm } from "./EditCategory";
import { CategoryModal } from "../modal/CategoryModal";
// import React, useEffect, useState 

// declare and export function AllCategories which get all category objects

export const AllCategories = () => {
// use UseState to set the state for the categories array for
// when the state changes.
    const [categories, setCategories] = useState([])
    const [editable, setEditableState] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState()
    const [modalStatus, setModalStatus] = useState(false)
    const [categoryToDelete, setCategoryToDelete] = useState()
    // use UseEffect to getAllCategories and set the state of the category array.
    useEffect(() => {
        getCategories()
    },
    [])
    
    const getCategories = () => {
        getAllCategories()
            .then((categories) => {
                setCategories(categories)
            })
        

    }

// return a map through the categories array that will have 
// edit and delete buttons  
    return <>
    {modalStatus ? <CategoryModal categoryId = {categoryToDelete} getCategories = {getCategories} setModalStatus = {setModalStatus} /> : null }
        <div>AllCategories Page</div>
        {editable === false ?
        <div className="CreateNewCategoryFormContainer">
            <NewCategoryForm getCategories={getCategories} />
        </div>
        :
        <div className="CreateNewCategoryFormContainer">
            <EditCategoryForm selectedCategory={selectedCategory} setEditableState={setEditableState} getCategories={getCategories} />
        </div>}

        {categories.map((category) => {
            return <div key={`category--${category.id}`} value={`${category.id}`}>{category.label}
                {localStorage.getItem('is_admin') === "true" ? <><button name={category.label} id={category.id} onClick={(evt) => {
                    setSelectedCategory({id:parseInt(evt.target.id), label:evt.target.name})
                    setEditableState(true)}}>edit</button> 
                <button id="deleteCategory" 
                name={category.id} 
                onClick={ (evt) => {
                setCategoryToDelete(evt.target.name)
                setModalStatus(true)
                }}>
                Delete post
                </button></>: null}
            </div>
        })}


    </>
}

