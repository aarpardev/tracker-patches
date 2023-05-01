import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const CreatePatch = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [patch, setPatch] = useState({
    title: "",
    description: "",
    sound: "",
    download: "",
    tags: [`furnace`],
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPatch({ ...patch, [name]: value });
  };

  const handleTagsChange = (event, index) => {
    const { value } = event.target;
    const tags = [...patch.tags];
    tags[index] = value;
    setPatch({ ...patch, tags });
  };

  const handleAddTag = () => {
    const tags = [...patch.tags, ""];
    setPatch({ ...patch, tags });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/patches",
        { ...patch },
        {
          headers: { authorization: cookies.access_token },
        }
      );

      alert("Thanks for sharing your Furnace / Deflemask Patch");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-patch">
      <h2>Post A Patch</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="title">Name</label>
        <input className="form-control"
          type="text"
          id="title"
          name="title"
          value={patch.title}
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="description">Description</label>
        <textarea className="form-control"
          id="description"
          name="description"
          value={patch.description}
          onChange={handleChange}
        ></textarea>
        <label className="form-label" htmlFor="sound">Audio Demo Link</label>
        <input className="form-control"
          type="text"
          id="sound"
          name="sound"
          value={patch.sound}
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="download">Download Link</label>
        <input className="form-control"
          type="text"
          id="download"
          name="download"
          value={patch.download}
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="tags">Tags</label>
        {patch.tags.map((tag, index) => (
          <input className="form-control"
            key={index}
            type="text"
            name="tags"
            value={tag}
            onChange={(event) => handleTagsChange(event, index)}
          />
        ))}
        <button className="furn-buttons" type="button" onClick={handleAddTag}>
          Add Tag
        </button> 

        <button className="furn-buttons" type="submit">Submit Patch</button>
      </form>
    </div>
  );
};