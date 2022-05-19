// imports React, useEffect, useSate, useHistory, sendPost, fetchTags
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllTags } from "../tags/TagManager";
import { getSinglePost, updatePost } from "./PostManager";
import { getAllCategories } from "../categories/CategoryManager";
import { useParams } from "react-router-dom";

export const EditPost = () => {
    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])
    const { postId } = useParams()
    const history = useHistory()
    const [currentPost, setCurrentPost] = useState({})

    useEffect(() => {
        getAllCategories()
            .then((categories) => {
                setCategories(categories)
            })
    },
        [])

    useEffect(() => {
        getAllTags()
            .then((tags) => {
                setTags(tags)
            })
    },
        [])

    useEffect(
        () => {
        getSinglePost(postId)
            .then((data) => {
                data.category = data.category.id
                setCurrentPost(data)})
        }, []
    )

  
    return (
        <form className="postForm">
            <h2 className="postForm__title">Update Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" defaultValue={currentPost.title} required autoFocus className="form-control"
                        onChange={
                            (event) => {
                                const copy = {...currentPost}
                                copy.title = event.target.value
                                setCurrentPost(copy)
                        }
                    }
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="imageUrl">Image URL: </label>
                    <input type="text" name="imageUrl" defaultValue={currentPost.image_url} required autoFocus className="form-control"
                        onChange={
                            (event) => {
                                const copy = {...currentPost}  
                                copy.image_url = event.target.value
                                setCurrentPost(copy)
                        }
                    }
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleContent">Content: </label>
                    <input type="text" name="articleContent" defaultValue={currentPost.content} required autoFocus className="form-control"
                        onChange={
                            (event) => {
                                const copy = {...currentPost}
                                copy.content = event.target.value
                                setCurrentPost(copy)
                        }
                    }
                    />
                </div>
            </fieldset>

            <fieldset>
                <label id="categoryDropdown" htmlFor="category">Category: </label>
                <select name="category"
                        onChange={(e) => {
                            const copy = { ...currentPost }
                            copy.category = parseInt(e.target.value)
                            setCurrentPost(copy)
                        }}
                        value={currentPost.category}>
                        <option value="0" selected>Choose a category</option>
                        {
                            categories.map(
                                (c) => {
                                    if (c.id === parseInt(currentPost.category?.id)) {
                                        return null
                                    } else {
                                        return <option key={`category--${c.id}`} value={`${c.id}`}>
                                        {`${c.label}`}
                                    </option>
                                    }}
                            )
                        }
                    </select>
            </fieldset>

            <fieldset>
                <label id="tagCheckboxes" htmlFor="tags">Tags: </label>
                {tags.map(tag => {
                    return <div key={`formTags-${tag.id}`} className="checkbox">
                        <input name="tags"
                            type="checkbox"
                            htmlFor="tag"
                            id={tag.id}
                            onChange={(e) => {
                                const copy = { ...currentPost }
                                copy.tags = []
                                copy.tags.push(parseInt(e.target.id))
                                setCurrentPost(copy)
                            }}
                        />
                        <label htmlFor={tag.id}>{tag.label}</label>
                    </div>
            })
            }
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const newPost = {
                        title: currentPost.title,
                        image_url: currentPost.image_url,
                        content: currentPost.content,
                        category: parseInt(currentPost.category),
                        tags: currentPost.tags,
                        publication_date: (new Date()).toISOString().split('T')[0],
                        approved: true
                    }

                    // Send POST request to your API
                    updatePost(newPost, currentPost.id)
                        .then(() => history.push("/posts/all"))
                }}
                className="btn btn-primary">Update</button>
        </form>
    )
}