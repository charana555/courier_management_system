import express from "express";

const router = express.Router();

import {
  getCustomerInfo,
  createCustomer,
} from "../controllers/costomerController.js";

router.get("/customer/:phone", getCustomerInfo);
router.post("/create", createCustomer);

export default router;
