import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    console.log(data.users);
    const createdUsers = await User.insertMany(data.users);
    //console.log("created users: ", createdUsers);
    res.send({ createdUsers });
  })
);
export default userRouter;
