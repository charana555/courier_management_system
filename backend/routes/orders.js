import express from "express";

import {
  createOrders,
  updateStatus,
  getAllOrders,
  getSingleOrder,
  getStatusOrders,
} from "../controllers/ordersController.js";

const router = express.Router();

router.post("/create", createOrders);
router.put("/status", updateStatus);
router.get("/orders", getAllOrders);
router.get("/orders/:status", getStatusOrders);
router.get("/order/:cphone", getSingleOrder);

export default router;
