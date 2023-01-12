import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "courier",
});

export const connect = async () => {
  await connection.connect((err) => {
    if (err) {
      return console.log(err);
    }
  });

  return true;
};
