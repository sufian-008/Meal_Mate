import express from "express";
import { loginUser, registerUser, getUserInfo } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/userinfo", getUserInfo);

export default userRouter;
