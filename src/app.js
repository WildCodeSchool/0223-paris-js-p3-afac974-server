require('dotenv').config();
const connection = require('./model/db');
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/index.routes');

const port = process.env.PORT || 8000;

<<<<<<< HEAD
const {getAll} = require('./controller/userController')
const {putAll}=require('./controller/userController')
=======
const {getAll, getOneUser, createUser} = require('./controller/userController')
>>>>>>> b875447e582a524098bfdb7625acb1fbf1956408

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// pour éviter les confilts entre les ports backend et frontend :
app.use(cors())
app.use('/api', router);


app.get("/", (req, res) => {
    res.send("Welcome");
});

app.get('/users', getAll)
<<<<<<< HEAD
app.put('/users', putAll)
=======
app.get('/users/:id', getOneUser )
app.post('/users', createUser)
>>>>>>> b875447e582a524098bfdb7625acb1fbf1956408

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;