import express from "express";
import mongoose from "mongoose";
import { PatchesModel } from "../models/Patches.js";
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./user.js";

const router = express.Router();

// Display patches at home
router.get("/", async (req, res) => {
    try {
      const result = await PatchesModel.find({});
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Create a new patch
router.post("/", verifyToken, async (req, res) => {
    const user = await UserModel.findById(req.body.userID);
    const patch = new PatchesModel({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      description: req.body.description,
      sound: req.body.sound,
      download: req.body.download,
      tags: req.body.tags,
      userOwner: req.body.userOwner,
    });
    console.log(patch);
  
    try {
      const result = await patch.save();
      res.status(201).json({
        createdPatch: {
          title: result.title,
          description: result.description,
          sound: result.sound,
          download: result.download,
          tags: result.tags,
          userOwner: result.userOwner,
          _id: result._id,
        },
      });
    } catch (err) {
      // console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Get patch by ID
  router.get("/:patchId", async (req, res) => {
    try {
      const result = await PatchesModel.findById(req.params.patchId);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Update patch
  router.patch("/:patchId", async (req, res) => {
    const user = await UserModel.findById(req.body.userID);
    try {
      const result = await PatchesModel.findByIdAndUpdate(req.params.patchId, req.body, {new: true});
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Delete a patch
  router.delete("/:patchId", async (req, res) => {
    const user = await UserModel.findById(req.body.userID);
    try {
      const result = await PatchesModel.findByIdAndDelete(req.params.patchId);
      if (!result) {
        return res.status(404).json({ message: 'Patch not found' });
      }
      res.json({ message: 'Patch deleted successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  export { router as patchesRouter };