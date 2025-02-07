import express from "express";
import { configController } from "../controller/config.controller";

const configRouter = express.Router();

configRouter.get("/:id", configController.get);
configRouter.get("/", configController.find);
configRouter.post("/", configController.create);
configRouter.put("/:id", configController.update);
configRouter.delete("/:id", configController.delete);

export default configRouter;
