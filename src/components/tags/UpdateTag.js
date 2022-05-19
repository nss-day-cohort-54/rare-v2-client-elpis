import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { editTag, getSingleTag } from "./TagManager";

export const EditTagForm = ({ selectedTag, setEditableTagState, getTags }) => {
  const [tag, setTag] = useState([]);

  const submitNewTag = (e) => {
    e.preventDefault();
    const newTag = {
      label: e.target.value,
    };
    setTag(newTag);
  };

  return (
    <>
      <fieldset>
        <div className="form-group">
          <label htmlFor="tag">Edit Tag</label>
          <input
            required
            autoFocus
            type="text"
            id="tag"
            className="form-control"
            defaultValue={selectedTag.label}
            onChange={(e) => {
              submitNewTag(e);
            }}
          />
          <div className="submitButtonCreateNewTagForm">
            <button
              onClick={() => {
                editTag(tag, selectedTag.id).then(getTags);
                setEditableTagState(false);
              }}
              className="submit-button"
            >
              Save
            </button>
            <button className="cancel-button">Cancel</button>
          </div>
        </div>
      </fieldset>
    </>
  );
};
