const {
  findAllUser,
  findOneUser,
  modifyOneUser,
  addUser,
  
} = require("./model");

const getAllUser = (req, res) => {
  findAllUser()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ message: "Server error" }));
};

const putOneUser = (req, res) => {
  const user = req.body;
  const id = req.params.id;

  modifyOneUser(user, id).then((result) => {
    if (result.affectedRows === 1) {
      res.json({ id, ...user });
    } else {
      res.status(404).json({ message: "No student found with this id !" });
    }
  });
};

const createUser = (req, res) => {
  const user = req.body;

  addUser(user)
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(500).json({ message: "Server error" }));
};

const getOneUser = (req, res) => {
  // Récupération de l'ID et conversion en int
  const id = parseInt(req.params.id);
  //si l'id n'est pas un nombre alors affiche une erreur
  if (isNaN(id)) {
    res.status(400).json({ message: "wrong id type !" });
  }
  // utilisation de la fonction findOneUser pour envoyer les données selon l'id
  findOneUser(id)
    .then(([data]) => {
      // envoie des données si les data existe
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: "No user found with this id !!!" });
      }
    })
    .catch((err) => res.status(500).json({ message: "Servor error" }));
};

module.exports = { getAllUser, getOneUser, putOneUser, createUser };
