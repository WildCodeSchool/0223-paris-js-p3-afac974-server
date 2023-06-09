require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/index.routes');
const port = process.env.PORT || 8000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
// pour éviter les confilts entre les ports backend et frontend :
app.use(cors())
app.use('/api', router);


app.get("/", (req, res) => {
    res.send("Welcome");
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;