import express from "express";
import { appointmentController } from "../controller/appointments.controller";

const appointmentRouter = express.Router();

appointmentRouter.get("/:id", appointmentController.get);
appointmentRouter.get("/", appointmentController.find);
appointmentRouter.post("/", appointmentController.create);
appointmentRouter.put("/:id", appointmentController.update);
appointmentRouter.delete("/:id", appointmentController.delete);

export default appointmentRouter;
