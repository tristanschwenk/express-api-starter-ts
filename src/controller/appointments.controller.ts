import { Request, Response } from "express";
import { appointmentService } from "../service/appointment.service";

export const appointmentController = {
  find: (req: Request, res: Response) => {
    try {
      return res.json(appointmentService.find());
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  get: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      return res.json(appointmentService.get(id));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  create: (req: Request, res: Response) => {
    try {
      const patient = req.body;
      return res.json(appointmentService.create(patient));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  update: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const patient = req.body;
      return res.json(appointmentService.update(id, patient));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  delete: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      return res.json(appointmentService.delete(id));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
