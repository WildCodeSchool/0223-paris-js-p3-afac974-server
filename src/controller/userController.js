const { findAll, findOneUser } = require('../model/userModel.js')

const getAll = (req, res) => {
    findAll()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json({ message: "Server error"}))
}

const getOneUser = (req, res) => {
    // Récupération de l'ID et conversion en int
    const id = parseInt(req.params.id)
    
    //si l'id n'est pas un nombre alors affiche une erreur
    if (isNaN(id)) {
        res.status(400).json({ message: "wrong id type !" })
    }

    // utilisation de la fonction findOneUser pour envoyer les données selon l'id
    findOneUser(id)
        .then(([data]) => {
            // envoie des données si les data existe
            if(data) {
                res.json(data)
            } else {
                res.status(404).json({ message: "No user found with this id !!!" })
            }
        })
        .catch((err) => res.status(500).json({ message: "Servor error" }))
}

module.exports = {getAll, getOneUser}