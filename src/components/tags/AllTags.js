import { getAllTags, deleteTag } from "./TagManager";
import React, { useEffect, useState } from "react";
import { NewTagForm } from "./CreateTagForm";
export const AllTags = () => {
  const [tags, setTags] = useState([]);
  const [sortedTags, setSortedTags] = useState([]);

  const getTags = () => {
    return getAllTags().then((tags) => {
      setTags(tags);
    });
  };

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

  const deleteHandler = (id) => {
    deleteTag(id)
      .then(getAllTags)
      .then((data) => setTags(data));
  };

  useEffect(() => {
    getTags();
  }, []);
  return (
    <>
      <div>AllTags Page</div>
      <div className="CreateNewTagFormContainer">
        <NewTagForm getTags={getTags} />
      </div>

      {sortedTags.map((tag) => {
        return (
          <div key={`tag--${tag.id}`}>
            {tag.label}
            <button>edit</button>{" "}
            <button onClick={() => deleteHandler(tag.id)}>delete</button>
          </div>
        );
      })}
    </>
  );
};
