const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const users = [
  { id: 1, name: "Shabana", email: "shabana@gmail.com" },
  { id: 2, name: "Shabnoor", email: "shabnoor@gmail.com" },
  { id: 3, name: "Sabila", email: "sabila@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Users Management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

// app.post("/users", (req, res) => {
//   console.log("post api hitting");
//   console.log(req.body);
// });

app.post("/users", (req, res) => {
  console.log("add user");
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
