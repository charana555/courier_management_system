import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid User" });
  }
  try {
    const token = authHeader.split(" ")[1];

    let payload;

    payload = jwt.verify(token, process.env.JWT_SECREAT);
    req.user = { uid: payload?.uid };

    next();
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid User" });
  }
};

export default auth;
