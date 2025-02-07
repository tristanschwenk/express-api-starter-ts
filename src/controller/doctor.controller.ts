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
      return res.json(doctorService.get(parseInt(id)));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  create: (req: Request, res: Response) => {
    try {
      const doctor = req.body;
      return res.json(doctorService.create(doctor));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  update: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const doctor = req.body;
      return res.json(doctorService.update(parseInt(id), doctor));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  delete: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      return res.json(doctorService.delete(parseInt(id)));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
