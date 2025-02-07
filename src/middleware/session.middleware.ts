import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { userService } from "../service/user.service";

export const sessionMiddleware = {
  isLoggedIn: (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers?.authorization) {
      res
        .status(401)
        .json({ message: "You must be logged in to access this route" });
    }
    const token = req.headers.authorization.split(" ")[1] as string;
    //check for token validity
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    const user = userService.findByEmail(verify.email);

    //If token as no user, return 400
    if (!user) {
      return res.status(400).json({ message: "Bad token" });
    }

    req.user = { ...user, password: undefined };
    next();
  },
};
