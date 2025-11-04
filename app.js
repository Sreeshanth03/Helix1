const express = require("express");
const { router } = require("./Routers/router.js");
const app = express();
//dot env
require("dotenv").config();
//cors
const cors = require("cors");
app.use(
  cors({ origin: "http://localhost:5174", methods: ["GET", "POST", "PUT"] })
);
//Built in middleware
app.use(express.json());
//Datbase Connection
const { ConnectionDB } = require("./Config/Database.js");
ConnectionDB();
//MiddleWare
app.use("/userform", router);
//Creating the server
app.listen(process.env.PORT, () => {
  console.log("The server is running");
});
