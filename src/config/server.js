const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
// pour éviter les confilts entre les ports backend et frontend :
app.use(cors())

const userRouter = require("../modules/users");

app.use("/users", userRouter);


module.exports = app;