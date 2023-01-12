import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import "express-async-errors";

import { connect } from "./db/conn.js";

import userRoutes from "./routes/users.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

const baseUrl = "/api/v1";

app.use(`${baseUrl}/user`, userRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  const result = await connect();
  if (result) {
    console.log(`server running at port ${port}`);
  } else {
    console.log(`connection failed`);
  }
});
