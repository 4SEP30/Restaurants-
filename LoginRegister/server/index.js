// Our dependecies
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port = 3000;

app.use(express.json());
app.use(cors());

// Let us run the server. So its running
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Let us create our database (mysql)
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "plantdb",
});

// Let us now create a router to the server that will register a user

app.post("/register", (req, res) => {
  // We need to get variables sent from the form
  const sentEmail = req.body.Email;
  const sentUserName = req.body.UserName;
  const sentPassword = req.body.Password;

  // Lets create SQL statement to insert the user to the Database table Users
  const SQL = "INSERT INTO users (email, username, password) VALUES (?,?,?)"; // We are going to enter these values through a variable
  const Value = [sentEmail, sentUserName, sentPassword];

  // Query to execute the sql statement stated above

  db.query(SQL, Value, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log("User inserted successfully");
      res.send({ message: "User added" });
    }
  });
});

// Now we need to login with these credentials from a registered User
// Lets create another route
app.post("/login", (req, res) => {
  // We need to get variables sent from the form
  const sentLoginUserName = req.body.LoginUserName;
  const sentLoginPassword = req.body.LoginPassword;

  // Lets create SQL statement to insert the user to the Database table Users
  const SQL = "SELECT * FROM users WHERE username = ? && password = ?"; // We are going to enter these values through a variable
  const Value = [sentLoginUserName, sentLoginPassword];

  db.query(SQL, Value, (err, results) => {
    if (err) {
      res.send({ error: err });
    }
    if (results.length > 0) {
      res.send(results);
    } else {
      res.send({ message: `Credentials Don't match` });
    }
  });
});

app.post("/dashboard", (req, res) => {
  res.send("Coming soon");
});
