import { useState, useEffect } from "react"
import { Post } from "./Post"
import { getUserPosts } from "./PostManager"

export const MyPosts = () => {
    const currentUser = localStorage.getItem("lu_token")
    const [posts, setPosts] = useState([])

    const loadUsers = () => {
        getUserPosts(currentUser)
                    .then(setPosts)
    }

    useEffect(
        () => {
            loadUsers()
        },
        []
    )


    return <>
        {
            posts.map(post => {
                return <div key={`post-${post.id}`}>
                    <Post listView={true} loadUsers={loadUsers} cardView={true} post={post} />
                </div> 
            })
        }
    </>
}
