const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const apiRouter = require("../modules");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// pour éviter les confilts entre les ports backend et frontend :
const corsOption = { origin: "http://localhost:5173", credentials: true };
app.use(cors(corsOption));
app.options("*", cors(corsOption));
app.use(cookieParser());
app.use(apiRouter);

module.exports = app;
