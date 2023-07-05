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

// const userRouter = require("../modules/users");
// const techniqueRouter = require("../modules/technique");
// const categoryRouter = require("../modules/category");
// const artsRouter = require("../modules/arts");
// const authorsRouter = require("../modules/authors");

// app.use("/users", userRouter);
// app.use("/technique", techniqueRouter);
// app.use("/category", categoryRouter);
// app.use("/arts", artsRouter);
// app.use("/authors", authorsRouter);

module.exports = app;
