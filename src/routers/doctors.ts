import express from "express";
import { doctorController } from "../controller/doctor.controller";

const doctorsRouter = express.Router();

doctorsRouter.get("/:id", doctorController.get);
doctorsRouter.get("/", doctorController.find);
doctorsRouter.post("/", doctorController.create);
doctorsRouter.put("/:id", doctorController.update);
doctorsRouter.delete("/:id", doctorController.delete);

export default doctorsRouter;
