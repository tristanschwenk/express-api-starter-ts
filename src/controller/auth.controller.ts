import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userService } from "../service/user.service";
import { Response, Request } from "express";

export const authController = {
  register: (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const encruptedPassword = bcrypt.hashSync(password, salt);

    const newUser = userService.create({
      name,
      email,
      password: encruptedPassword,
    });

    return res.status(201).json(newUser);
  },

  login: (req: Request, res: Response) => {
    const { email, password } = req.body;

    const matchingUser = userService.findByEmail(email);
    if (!matchingUser) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    if (
      !(matchingUser && bcrypt.compareSync(password, matchingUser.password))
    ) {
      res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { email: matchingUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ token });
  },
};
