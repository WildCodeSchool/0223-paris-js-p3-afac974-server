const { findAllArt } = require("./model")

const getAllArt = (req, res) => {
    findAllArt()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json({ message: "Server error" }));
  };

module.exports = { getAllArt }