require('dotenv').config();
const connection = require('./model/db');
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/index.routes');

const port = process.env.PORT || 8000;

const {getAll} = require('./controller/userController')
const {putAll}=require('./controller/userController')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use('/api', router);


app.get("/", (req, res) => {
    res.send("Welcome");
});

app.get('/users', getAll)
app.put('/users', putAll)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;