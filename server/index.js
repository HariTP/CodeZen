const express = require("express");
const app = express();
const router = require("./routes/router.js");
const connectDB = require("./config/dbConnection.js");
const cors = require("cors");

const PORT = 3000;
require("dotenv").config();

connectDB(process.env.AZURE_COSMOS_CONNECTIONSTRING || process.env.DB_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/", router);

const port = process.env.PORT || 8080; 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});