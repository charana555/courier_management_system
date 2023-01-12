import express from "express";

import {
  loginController,
  signupController,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/login", loginController);
router.post("/signup", signupController);

export default router;
