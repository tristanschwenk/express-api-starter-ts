import { Request, Response } from "express";
import { patientService } from "../service/patient.service";

export const patientController = {
  find: (req: Request, res: Response) => {
    console.log(req.user);
    try {
      const result = patientService.find();
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  get: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      return res.json(patientService.get(parseInt(id)));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  create: (req: Request, res: Response) => {
    try {
      const patient = req.body;
      return res.json(patientService.create(patient));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  update: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const patient = req.body;
      return res.json(patientService.update(parseInt(id), patient));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  delete: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      return res.json(patientService.delete(parseInt(id)));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
