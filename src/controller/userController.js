<<<<<<< HEAD
const { findAll } = require('../model/userModel.js')
const {modifydAll} = require('../model/userModel.js')
=======
const { findAll, findOneUser, addUser } = require('../model/userModel.js')
>>>>>>> b875447e582a524098bfdb7625acb1fbf1956408

const getAll = (req, res) => {
    findAll()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json({ message: "Server error"}))
}

<<<<<<< HEAD
const putAll = (req, res)=> {
    modifyAll()
    .then((data) => res.json(data))
    .catch((err)=> res.status(500).json({ message: "Server error"}))
}

module.exports = {getAll, putAll}
=======
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

// const createUser = (user) => {
//     const { firstname , lastname, user_name, password, mail, isAdmin, profile_picture } = user
//     return db 
//         .query("insert into user (firstname , lastname, user_name, password, mail, isAdmin, profile_picture) values (?, ?, ?, ?, ?, ?, ?)",
//         [firstname , lastname, user_name, password, mail, isAdmin, profile_picture])
//         .then(([data]) => {
//             return { id: data.insertId, ...user}
//         })
//         .catch((err) => res.status(500).json({ message: "Servor error" }))
// }
 
const createUser = (req, res) => {
    const user = req.body
  
    addUser(user)
      .then((result) => res.status(201).json(result))
      .catch((err) => res.status(500).json({ message: "Server error" }))
  }

module.exports = {getAll, getOneUser, createUser}
>>>>>>> b875447e582a524098bfdb7625acb1fbf1956408
