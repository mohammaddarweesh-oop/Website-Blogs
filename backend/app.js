const express = require("express");
const connectToDB = require("./config/connectToDB");
require("dotenv").config();
//connection to mongodb
connectToDB();

const app = express();

// Middlewares
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode...`
  );
});
