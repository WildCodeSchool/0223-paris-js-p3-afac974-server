const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// pour éviter les confilts entre les ports backend et frontend :
app.use(cors())

const artRouter = require("../modules/arts")
const authorRouter = require('../modules/authors')

app.use("/arts", artRouter)
app.use('/authors', authorRouter)


module.exports = app;