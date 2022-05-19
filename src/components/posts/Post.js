import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { ButtonControls } from "../buttonControls/ButtonControls"
import { CommentList } from "../comments/CommentsList"
import { Modal } from "../modal/Modal"
import { EditPost } from "./EditPost"
import "./Post.css"
// function that renders a single post
export const Post = ({ listView, cardView, post, loadUsers }) => {

    const [showComments, setShowComments] = useState(false)
    const history = useHistory()
    const currentUser = parseInt(localStorage.getItem("token"))
    const [modalStatus, setModalStatus] = useState(false)
    const [postToDelete, setPostToDelete] = useState()
    const [postToEdit, setPostToEdit] = useState()


    return <>
        {modalStatus ? <Modal postId = {postToDelete} loadUsers = {loadUsers} setModalStatus = {setModalStatus} /> : null }
        {/* Content needed in all posts list */}
        {/* Title, Author, Date, Category, Tags */}
        {
            listView && cardView
                ? <div key={`post--${post.id}`} className="postCard">
                    <div className="cardTitle">
                        <div>
                            <Link to={`/posts/single/${post.id}`}>
                                {post.title}
                            </Link>
                        </div>
                        <div>{post.publication_date}</div>
                    </div>
                    <div className="cardImage">
                        <img src={`${post.imageUrl || "https://picsum.photos/300/100"}`} />
                    </div>
                    <div className="cardBottom">
                        <div>Author: {post.user.user.first_name} {post.user.user.last_name}</div>
                        <div className="cardFunctions">
                            <div>Reaction Count: 0</div>
                            {
                                post.is_authorized 
                                    ? <div className="cardButtons">
                                        <button id="deletePost" name={post.id} onClick={
                                            (evt) => {
                                                setPostToDelete(evt.target.name)
                                                setModalStatus(true)
                                            }
                                        }>
                                            Delete post
                                        </button>
                                        <button id="editPost" name={post.id} onClick={
                                            (evt) => {
                                                setPostToEdit(evt.target.name)
                                                history.push({ pathname: `/updatePost/${post.id}` })
                                            }
                                        }>
                                            Edit post
                                        </button>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                : listView
                    ? <div key={`post--${post.id}`} className="singlePost">
                        <div>
                            <Link to={`/posts/single/${post.id}`}>
                                {post.title}
                            </Link>
                            {
                                post.is_authorized 
                                    ? <div className="cardButtons">
                                    <button id="deletePost" name={post.id} onClick={
                                        (evt) => {
                                            setPostToDelete(evt.target.name)
                                            setModalStatus(true)
                                        }
                                    }>
                                        Delete post
                                    </button>
                                    <button id="editPost" name={post.id} onClick={
                                        (evt) => {
                                            setPostToEdit(evt.target.name)
                                        }
                                    }>
                                        Edit post
                                    </button>
                                    </div>
                                    : null
                            }
                        </div>
                        <div>{post.user.user.first_name} {post.user.user.last_name}</div>
                        <div>{post.publication_date}</div>
                        <div>{post.category.label}</div>
                        {/* <div>{post.tags.map(tag => <div key={`posttag${post.id}${tag.id}`}>{tag.label}</div>)}</div> */}
                    </div>
                    : <div key={`post--${post.id}`} className="postDetails">
                        <div className="postDetailsMain">
                            <div className="postDetailsTitle">
                                <div className="cardButtons">
                                    {
                                        post.is_authorized 
                                            ? <div className="cardButtons">
                                            <button id="deletePost" name={post.id} onClick={
                                                (evt) => {
                                                    setPostToDelete(evt.target.name)
                                                    setModalStatus(true)
                                                }
                                            }>
                                                Delete post
                                            </button>
                                            <button id="editPost" name={post.id} onClick={
                                            (evt) => {
                                                setPostToEdit(evt.target.name)
                                            }
                                        }>
                                            Edit post
                                        </button>
                                        </div>
                                            : null
                                    }
                                </div>
                                <div>{post.title}</div>
                                <div>{post.category.label}</div>
                            </div>
                            <div><img src={`${post.imageUrl || "https://picsum.photos/300/100"}`} /></div>
                            <div className="postDetailsBelowCard">
                                <div>By <Link to={`/users/${post.userId}`} >
                                    {post.user.user.username}
                                </Link>
                                </div>
                                <div>{post.publication_date}</div>
                                {
                                    showComments
                                        ? <button onClick={() => { setShowComments(false) }}>Show Post</button>
                                        : <button onClick={() => setShowComments(true)}>View Comments</button>
                                }
                                <div>Reactions</div>
                            </div>
                            {
                                showComments
                                    ? <CommentList postId={post.id} />
                                    : <div>{post.content}</div>
                            }
                        </div>
                        {/* <div className="postDetailsTags">{post.tags.map(tag => <div key={`posttag${post.id}${tag.id}`}>{tag.label}</div>)}</div> */}
                    </div>
        }
        {/* Content needed in card view */}
        {/* Title, Image, Author Name (not username), Publication date, reaction count */}
        {/* Content needed in post details */}
        {/* Title, category, tags, content, username, image, reactions */}
    </>
}