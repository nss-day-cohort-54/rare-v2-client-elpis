import { deleteTag } from "../tags/TagManager";

export const TagModal = ({ tagId, setModalStatus, getTags }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to delete this tag?</p>
        <button
          onClick={() => {
            deleteTag(tagId).then(() => {
              setModalStatus(false);
              getTags();
            });
          }}
        >
          Confirm delete
        </button>
        <button
          onClick={() => {
            setModalStatus(false);
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};
