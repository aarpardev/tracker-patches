import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import '../index.css';

export const Home = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [patches, setPatches] = useState([]);
  const [patch,setPatch] = useState([])
  const userID = useGetUserID();

  const navigate = useNavigate();

  // Display patches
  useEffect(() => {
    window.localStorage.removeItem("patchData")
    const fetchPatches = async () => {
      try {
        const response = await axios.get("http://localhost:3001/patches/");
        setPatches(response.data);
      } catch (err) {
        console.log(err);
      }
    };
      fetchPatches();
    }, []);

  // Delete Button
  const deletePatch = async (patchID) => {
    try {
      const response = await axios.delete(`http://localhost:3001/patches/${patchID}`);
      navigate("/");
      console.log(`Patch deleted!`)
    } catch (err) {
      console.log(err);
      console.log(`Couldn't delete ${patchID} . Sad face...`)
    }
  }

  // Edit Button
  const editPatch = async (patchID) => {
    try {
      const handoff = `http://localhost:3001/patches/${patchID}`
      // Uses local storage to pass data using hook getPatchData
      window.localStorage.setItem("patchData", handoff)
      window.localStorage.setItem("patchID", patchID)
    } catch (err) {
      console.log(err);
      console.log(`Couldn't pass the data.`)
    }
  }

  return (
    <div className="patch-container">
      <h1>List of Patches</h1>
      <h2>Check out some new sounds from our community!</h2>
      <ul className="mobile-fix">
        {patches.map((patch) => (
          <li className="patches" key={patch._id}>
              <h2 className="patchtitle">{patch.title}</h2>
              <p className="patch-description">{patch.description}</p>
            <audio className="patch-elements"
        controls
        src={patch.sound}>
            <a href={patch.sound}>
                Download audio
            </a>
    </audio> <p className="patch-elements"><Link className="patch-download" to={patch.download}>Download Patch</Link></p> 
        {!cookies.access_token ? ( <div></div> ) : ( <div>
            <p className="patch-elements"><Link className="patch-elements" to="http://localhost:3000/update-patch"><button className="furn-buttons" onClick={() => editPatch(patch._id)}>Edit</button></Link> 
            <button className="furn-buttons" onClick={() => deletePatch(patch._id)}>Delete</button></p>
            </div> )}
          </li>
        ))}
      </ul>
    </div>
  );
};