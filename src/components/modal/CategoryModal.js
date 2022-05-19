import { deleteCategory } from "../categories/CategoryManager"

export const CategoryModal = ({categoryId, setModalStatus, getCategories}) => {
    return <div className="modal">
        <div className="modal-content">
            <p>Are you sure you want to delete this category?</p>
            <button onClick={
                () => {
                    deleteCategory(categoryId)
                        .then(() => {
                            setModalStatus(false)
                            getCategories()
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