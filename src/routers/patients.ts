import express from "express";
import { patientController } from "../controller/patient.controller";
import { sessionMiddleware } from "../middleware/session.middleware";

const patientsRouter = express.Router();

patientsRouter.get("/:id", patientController.get);
patientsRouter.get("/", patientController.find);
patientsRouter.post("/", patientController.create);
patientsRouter.put("/:id", patientController.update);
patientsRouter.delete("/:id", patientController.delete);

export default patientsRouter;
