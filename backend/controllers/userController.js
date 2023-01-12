import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { StatusCodes } from "http-status-codes";

import { connection } from "../db/conn.js";

export const signupController = async (req, res) => {
  const { name, phone, email, password } = req.body;

  if (!name || !phone || !email || !password) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please provide all fields" });
  }

  const uid = uuidv4();
  const findquery = `SELECT * FROM USERS WHERE PHONE = ${phone}`;

  try {
    await connection.query(findquery, async function (error, result, fields) {
      if (error) {
        console.log(error);
      }
      if (result.length !== 0) {
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "User already exists please login!" });
        return false;
      }
    });

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const insertquery = `INSERT INTO USERS VALUES ("${uid}" , "${name}" , ${phone} , "${email}" , "${hashedpassword}")`;

    await connection.query(insertquery, async function (error, result, fields) {
      if (error) {
        console.log(error);
      }

      if (result) {
        await connection.query(
          findquery,
          async function (error, result, fields) {
            if (error) {
              console.log(error);
            }

            const token = jwt.sign(
              { userId: this._id },
              process.env.JWT_SECREAT,
              {
                expiresIn: "60d",
              }
            );

            res.status(StatusCodes.OK).json({
              result: {
                uid: result[0].uid,
                name: result[0].name,
                phone: result[0].phone,
                email: result[0].email,
              },
              token,
            });
          }
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
};
export const loginController = async (req, res) => {
  const { phone, password } = req.body;

  const findquery = `SELECT * FROM USERS WHERE PHONE = ${phone}`;

  await connection.query(findquery, async function (error, result, fields) {
    if (error) {
      console.log(error);
    }
    if (result.length === 0)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "User doesn't exists please signup!" });

    const isMatch = await bcrypt.compare(password, result[0].password);

    if (!isMatch) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ userId: this._id }, process.env.JWT_SECREAT, {
      expiresIn: "60d",
    });

    res.status(StatusCodes.OK).json({
      result: {
        uid: result[0].uid,
        name: result[0].name,
        phone: result[0].phone,
        email: result[0].email,
      },
      token,
    });
  });
};
