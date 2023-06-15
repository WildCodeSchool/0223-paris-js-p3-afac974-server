const argon = require('argon2');

const hashPassword = (req, res, next) => {
  const { password } = req.body;
  argon.hash(password).then((hashedPassword) => {
    req.body.password = hashedPassword;
    next()
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json('servor error')
  })
};

module.exports = { hashPassword }
