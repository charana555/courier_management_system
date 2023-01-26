import { connection } from "../db/conn.js";
import { StatusCodes } from "http-status-codes";

export const getCustomerInfo = (req, res) => {
  const { phone } = req.params;

  const findquery = `SELECT * FROM CUSTOMERS WHERE CPHONE = ${phone}`;

  try {
    connection.query(findquery, function (err, result) {
      if (err) {
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ msg: "Somthing went wrong! try again", err });
      }

      if (result.length === 0) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ msg: "Customer Doesn't Exists" });
      }

      if (result) {
        return res.status(StatusCodes.OK).json({ result });
      }
    });
  } catch {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Somthing went wrong! try again" });
  }
};

export const createCustomer = (req, res) => {
  const { cphone, caddress, ccity, cpincode, cname } = req.body;

  if (!cphone || !caddress || !ccity || !cpincode || !cname) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please provide all fields" });

    return false;
  }

  const createQuery = `INSERT INTO CUSTOMERS(CPHONE , CADDRESS , CCITY , CPINCODE , CNAME) VALUES (${cphone} , "${caddress}" , "${ccity}" , ${cpincode} , "${cname}" ) `;

  try {
    connection.query(createQuery, function (err, result) {
      if (err) {
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ msg: "Somthing went wrong! try again", err });
      }
      if (result) {
        const findquery = `SELECT * FROM CUSTOMERS WHERE CID = ${result.insertId} `;
        connection.query(findquery, async function (err, result) {
          if (err) {
            console.log(err);
            return false;
          }
          if (result) {
            res.status(StatusCodes.CREATED).json({ result });
          }
        });
      }
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Somthing went wrong! try again", error });
  }
};
