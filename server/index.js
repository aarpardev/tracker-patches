import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

import { userRouter } from "./routes/user.js";
import { patchesRouter } from "./routes/patches.js";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config({path: '.env'});

app.use("/auth", userRouter);
app.use("/patches", patchesRouter);

const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then (() => {
    app.listen(PORT, () => console.log(`Server activated sucessfully! Live on port: ${PORT}`))
  })
  .catch((error) => console.log(`${error} Connection failed.`));