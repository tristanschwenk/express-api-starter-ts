import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import * as middlewares from "./middlewares";
import api from "./api";
import MessageResponse from "./interfaces/MessageResponse";
import patientsRouter from "./routers/patients";
import doctorsRouter from "./routers/doctors";
import configRouter from "./routers/config";
import appointmentRouter from "./routers/appointments";
import { userController } from "./controller/user.controller";
import userRouter from "./routers/user";
import authRouter from "./routers/auth";
import { sessionMiddleware } from "./middleware/session.middleware";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/auth", authRouter);
app.use(sessionMiddleware.isLoggedIn);
app.use("/patients", patientsRouter);
app.use("/appointments", appointmentRouter);
app.use("/doctors", doctorsRouter);
app.use("/config", configRouter);
app.use("/users", userRouter);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
