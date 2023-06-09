require('dotenv').config();
const connection = require('./model/db');
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/index.routes');

const port = process.env.PORT || 8000;

const {getAll, getOneUser, createUser, putOneUser} = require('./controller/userController');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// pour éviter les confilts entre les ports backend et frontend :
app.use(cors())
app.use('/api', router);


app.get("/", (req, res) => {
    res.send("Welcome");
});

app.get('/users', getAll)
app.get('/users/:id', getOneUser )
app.post('/users', createUser)
app.put('/users/:id', putOneUser)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;