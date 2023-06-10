const {findAll, findOneAuthor, addAuthor, modifyOneAuthor, removeOneAuthor} = require('./model')

const getAll = (req, res) => {
    findAll()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => res.status(500).json({ message : "Server error"}))
}

const getOneAuthor = (req, res) => {
    const id = parseInt(req.params.id)

    if(isNaN(id)) {
        res.status.json({ message: "wrong id type" })
    }

    findOneAuthor(id)
        .then(([data]) => {
            if (data) {
                res.json(data)
            } else {
                res.status(404).json({ message: "No author found with this id!"})
            }
        })
        .catch((err) => res.status(500).json({ message : "Server error"}))
}

const createAuthor = (req, res) => {
    const author = req.body

    addAuthor(author)
        .then((result) => res.status(201).json(result))
        .catch((err) => res.status(500).json({ message: "Server error" }));
}

const editOneAuthor = (req, res) => {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
    res.status(400).json({ message: "wrong id type !" })
    }

    const author = req.body
    modifyOneAuthor(author, id)
        .then((result) => {
            if(result.affectedRows === 1) {
                res.json({ id, ...author })
            } else {
                res.status(404).json({ message: 'No author found with this id' })
            }
        })
        .catch((err) => res.status(500).json({ message: "Server error" }));

}

const deleteOneAuthor = (req, res) => {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
        res.status(400).json({ message: "wrong id type !" })
    }

    removeOneAuthor(id) 
        .then((result) => {
            console.log(result);
            if(result.affectedRows === 1) {
                res.sendStatus(204)
            } else {
                res.status(404).json({ message: "No author found with this id !" })
            }
        })
        .catch((err) => res.status(500).json({ message: "Server error" }))



}

module.exports = { getAll, getOneAuthor, createAuthor, editOneAuthor,deleteOneAuthor }