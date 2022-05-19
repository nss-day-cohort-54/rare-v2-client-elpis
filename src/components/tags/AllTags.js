import { getAllTags, deleteTag } from "./TagManager";
import React, { useEffect, useState } from "react";
import { NewTagForm } from "./CreateTagForm";
import { EditTagForm } from "./UpdateTag";

// declare and export function AllTags w/ all tag objects

export const AllTags = () => {
  // useState sets the state for tags array for when the state changes
  const [tags, setTags] = useState([]);
  const [sortedTags, setSortedTags] = useState([]);
  const [editableTag, setEditableTagState] = useState(false);
  const [selectedTag, setSelectedTag] = useState();

  useEffect(() => {
    getTags();
  }, []);

  useEffect(() => {
    setSortedTags(
      tags.sort(function (a, b) {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      })
    );
  }, [[tags]]);

  const getTags = () => {
    getAllTags().then((tags) => {
      setTags(tags);
    });
  };

  return (
    <>
      <div>AllTags Page</div>
      {editableTag === false ? (
        <div className="CreateNewTagFormContainer">
          <NewTagForm getTags={getTags} />
        </div>
      ) : (
        <div className="CreateNewTagFormContainer">
          <EditTagForm
            selectedTag={selectedTag}
            setEditableTagState={setEditableTagState}
            getTags={getTags}
          />
        </div>
      )}

      {sortedTags.map((tag) => {
        return (
          <div key={`tag--${tag.id}`} value={`${tag.id}`}>
            {tag.label}
            <button
              name={tag.label}
              id={tag.id}
              onClick={(evt) => {
                setSelectedTag({
                  id: parseInt(evt.target.id),
                  label: evt.target.name,
                });
                setEditableTagState(true);
              }}
            >
              edit
            </button>

            <button onClick={() => deleteTag(tag.id).then(getTags)}>
              delete
            </button>
          </div>
        );
      })}
    </>
  );
};
