import { connection } from "../db/conn.js";
import { StatusCodes } from "http-status-codes";

export const createOrders = (req, res) => {
  const { cid, name, phone, address, city, pincode, date } = req.body;

  if (!cid || !name || !phone || !address || !city || !pincode || !date) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please provide all fields" });

    return false;
  }

  const createQuery = `INSERT INTO ORDERS (cid, name , phone , address , city , pincode ,date ) VALUES ( ${cid} , "${name} ", ${phone} , "${address}" ," ${city} ", ${pincode} , "${date}" )`;

  try {
    connection.query(createQuery, async function (err, result) {
      if (err) {
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ msg: "Somthing went wrong! try again" });
      }
      if (result) {
        const findquery = `SELECT * FROM ORDERS , CUSTOMERS WHERE ORDERS.OR_ID = ${result.insertId} AND ORDERS.CID = CUSTOMERS.CID`;
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
    if (err) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: "Somthing went wrong! try again" });
    }
  }
};

export const updateStatus = (req, res) => {
  const { status, or_id } = req.body;

  try {
    const updateQuery = `UPDATE ORDERS SET STATUS = "${status}" WHERE OR_ID = ${or_id}`;

    connection.query(updateQuery, function (err, result) {
      if (err) {
        console.log(err);
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ msg: "Somthing went wrong! try again" });
      }

      if (result) {
        const findquery = `SELECT * FROM ORDERS , CUSTOMERS WHERE ORDERS.OR_ID = ${or_id} AND ORDERS.CID = CUSTOMERS.CID`;
        connection.query(findquery, function (err, result) {
          if (err) {
            return res
              .status(StatusCodes.INTERNAL_SERVER_ERROR)
              .json({ msg: "Somthing went wrong! try again" });
          }
          if (result) {
            res.status(StatusCodes.OK).json({ result });
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Somthing went wrong! try again" });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const findquery = `SELECT * FROM ORDERS , CUSTOMERS WHERE ORDERS.CID = CUSTOMERS.CID ORDER BY OR_ID`;
    connection.query(findquery, async function (err, result) {
      if (err) {
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ msg: "Somthing went wrong! try again" });
      }

      if (result) {
        res.status(StatusCodes.OK).json({ result });
      }
    });
  } catch {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Somthing went wrong! try again" });
  }
};

export const getSingleOrder = (req, res) => {
  const { cphone } = req.params;

  try {
    const findquery = `SELECT * FROM ORDERS , CUSTOMERS WHERE CUSTOMERS.CPHONE = ${cphone} AND ORDERS.CID = CUSTOMERS.CID ORDER BY OR_ID`;
    connection.query(findquery, async function (err, result) {
      if (err) {
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ msg: "Somthing went wrong! try again" });
      }

      if (result) {
        res.status(StatusCodes.OK).json({ result });
      }
    });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Somthing went wrong! try again" });
  }
};
