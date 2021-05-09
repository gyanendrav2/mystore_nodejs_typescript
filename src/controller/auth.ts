import { Request, Response } from "express";
import { Users } from "../model/users";
import joi from "joi";
import { signupSchema } from "../validation/authSchema";
import { throwMessage } from "../util/failedMessage";
import bcrypt from "bcrypt";

const signup = async (req: Request, res: Response) => {
  const { email, password, confirmPassword } = req.body;
  const { error } = signupSchema.validate(req.body);
  if (!error) {
    const user = await Users.findOne({ where: { email } });
    if (user) {
      return res.status(400).json(throwMessage("email already exist."));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Users.create({ email, password: hashedPassword });
    if (newUser) {
      return res
        .status(200)
        .json(
          throwMessage(
            "user created successfully. please verify your email address."
          )
        );
    }
    return res.status(200).json("somthing went wrong");
  }
  res.status(400).json(error);
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user: any = await Users.findOne({
    where: { email },
  });
  if (user) {
    const comparePassword = await bcrypt.compare(password, user.password);
    if (comparePassword) {
      return res.json(user);
    }
    return res.status(400).json(throwMessage("password is incorrect"));
  }
  return res.status(404).json(throwMessage("User not found"));
};

export const authController = {
  signup,
  login,
};
