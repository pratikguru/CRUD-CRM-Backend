const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Auth/auth");
const router = require("./Auth/auth");
const initRoutes = require("./Routes/init");
const serviceRoutes = require("./Routes/service_request_handler");
const clientManagementRoutes = require("./Routes/client_management_handler");
const productManagementRoutes = require("./Routes/product_management_handler");
const cors = require("cors");
dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to DB!");
  }
);

app.use(express.json());
app.use(cors());

//Router Middelwares.
app.use("/api/user", authRoute);
app.use("/api/", initRoutes);
app.use("/api/service/", serviceRoutes);
app.use("/api/clients/", clientManagementRoutes);
app.use("/api/products/", productManagementRoutes);
app.listen(9000, () => {
  console.log("Server up and running.");
});
