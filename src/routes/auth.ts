import express from "express";
import { authController } from "../controller/auth";

export const authRoutes = express.Router();

authRoutes.post("/login", authController.login);
authRoutes.post("/signup", authController.signup);
