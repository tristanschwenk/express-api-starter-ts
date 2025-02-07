import { Request, Response } from "express";
import { doctorService } from "../service/doctor.service";

export const doctorController = {
  find: (req: Request, res: Response) => {
    try {
      return res.json(doctorService.find());
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  get: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      return res.json(doctorService.get(id));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  create: (req: Request, res: Response) => {
    try {
      const patient = req.body;
      return res.json(doctorService.create(patient));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  update: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const patient = req.body;
      return res.json(doctorService.update(id, patient));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  delete: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      return res.json(doctorService.delete(id));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
