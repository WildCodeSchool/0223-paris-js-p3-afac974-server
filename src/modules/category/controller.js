const {
    findAllCategory,
    findOneCategory,
    modifyOneCategory,
    addCategory,
    removeCategory,
  } = require("./model");
  
  const getAllCategory = (req, res) => {
    findAllCategory()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json({ message: "Server error" }));
  };
  
  const putOneCategory = (req, res) => {
    const category = req.body;
    const id = req.params.id;
  
    modifyOneCategory(category, id).then((result) => {
      if (result.affectedRows === 1) {
        res.json({ id, ...category });
      } else {
        res.status(404).json({ message: "No category found with this id !" });
      }
    });
  };
  
  const createCategory = (req, res) => {
    const category = req.body;
  
    addCategory(category)
      .then((result) => res.status(201).json(result))
      .catch((err) => res.status(500).json({ message: "Server error" }));
  };
  
  const getOneCategory = (req, res) => {
    // Récupération de l'ID et conversion en int
    const id = parseInt(req.params.id);
    //si l'id n'est pas un nombre alors affiche une erreur
    if (isNaN(id)) {
      res.status(400).json({ message: "wrong id type !" });
    }
    // utilisation de la fonction findOneCategory pour envoyer les données selon l'id
    findOneCategory(id)
      .then(([data]) => {
        // envoie des données si les data existe
        if (data) {
          res.json(data);
        } else {
          res.status(404).json({ message: "No category found with this id !!!" });
        }
      })
      .catch((err) => res.status(500).json({ message: "Servor error" }));
  };

  const deleteCategory = (req, res) => {
    const id = req.params.id;
    removeCategory(id)
    .then((data) => {   
        if (data.affectedRows === 1) {
            res.sendStatus(204);
        } else {
            res.status(404).json({ message : "No category found"})
        }
    })
    .catch((err) => res.status(500).json({ message :  "Server error"}))
}

module.exports = { getAllCategory, getOneCategory, putOneCategory, createCategory , deleteCategory};
  