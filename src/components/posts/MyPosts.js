import { useState, useEffect } from "react"
import { Post } from "./Post"
import { getUserPosts } from "./PostManager"

export const MyPosts = () => {
    const currentUser = localStorage.getItem("lu_token")
    const [posts, setPosts] = useState([])


    useEffect(
        () => {
            getUserPosts(currentUser)
                .then(setPosts)
        },
        []
    )

    return <>
        {
            posts.map(post => {
                return <div key={`post-${post.id}`}>
                    <Post listView={true} cardView={true} post={post} />
                </div> 
            })
        }
    </>
}

// const [sortedPosts, setSortedPosts] = useState()

// useEffect(() => {
//     setSortedPosts(
//     posts.sort(function (a, b) {
//         if (a.publication_date < b.publication_date) {
//         return -1;
//         }
//         if (a.publication_date > b.publication_date) {
//         return 1;
//         }
//         return 0;
//     })
//     );
// }, [[tags]]);