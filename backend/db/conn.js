import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "courier",
});

export const connect = () => {
  connection.connect((err) => {
    if (err) {
      return console.log(err);
    }
  });

  return true;
};
