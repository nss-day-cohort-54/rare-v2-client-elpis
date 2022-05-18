import { deletePost } from "../posts/PostManager"

export const Modal = ({postId, setModalStatus, loadUsers}) => {
    return <div className="modal">
        <div className="modal-content">
            <p>Are you sure you want to delete this post?</p>
            <button onClick={
                () => {
                    deletePost(postId)
                        .then(() => {
                            loadUsers()
                            setModalStatus(false)
                        })
                }
            }>Confirm delete</button>
            <button onClick={
                () => {
                    setModalStatus(false)
                }
            }>No</button>
        </div>
    </div>
}