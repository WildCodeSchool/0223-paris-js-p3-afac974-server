const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// pour éviter les confilts entre les ports backend et frontend :
app.use(cors())

const userRouter = require("../modules/users");

const techniqueRouter = require('../modules/technique');
const categoryRouter = require ("../modules/category")

app.use("/users", userRouter);
app.use('/technique', techniqueRouter);
app.use("/category", categoryRouter);


module.exports = app;