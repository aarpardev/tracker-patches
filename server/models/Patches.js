import mongoose from "mongoose";

const patchSchema = mongoose.Schema({
    title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  download: {
    type: String,
    required: true,
  },

  sound: {
    type: String,
    required: false,
  },

  tags: [{
    type: String,
    required: false,
  }],
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

export const PatchesModel = mongoose.model("patches", patchSchema);