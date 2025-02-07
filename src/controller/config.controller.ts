import { Request, Response } from "express";
import { configService } from "../service/config.service";

export const configController = {
  find: (req: Request, res: Response) => {
    try {
      return res.json(configService.find());
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  get: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      return res.json(configService.get(id));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  create: (req: Request, res: Response) => {
    try {
      const patient = req.body;
      return res.json(configService.create(patient));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  update: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const patient = req.body;
      return res.json(configService.update(id, patient));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  delete: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      return res.json(configService.delete(id));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
