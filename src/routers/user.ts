
import express from "express";
import { userController } from "../controller/user.controller";

const userRouter = express.Router();

userRouter.get("/:id", userController.get);
userRouter.get("/", userController.find);
userRouter.post("/", userController.create);
userRouter.put("/:id", userController.update);
userRouter.delete("/:id", userController.delete);

export default userRouter;
