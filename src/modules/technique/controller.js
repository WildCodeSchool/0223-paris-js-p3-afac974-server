const { 
    findAllTech, 
    findOneTech, 
    addTech, 
    modifyOneTech, 
    removeOneTech 
} = require('./model');

const getAllTech = (req, res) => {
    findAllTech()
    .then((data) => {
        res.json(data)
    })
    .catch((err) => res.status(500).json({ message: "Server error"}))
}

const getOneTech = (req, res) => {
    const id = parseInt(req.params.id)

    if(isNaN(id)) {
        res.status.json({ message: "wrong id type" })
    }

    findOneTech(id)
        .then(([data]) => {
            if (data) {
                res.json(data)
            } else {
                res.status(404).json({ message: "No technique found with this id!"})
            }
        })
        .catch((err) => res.status(500).json({ message : "Server error"}))
}

const createTech = (req, res) => {
    const technique = req.body

    addTech(technique)
        .then((result) => res.status(201).json(result))
        .catch((err) => res.status(500).json({ message: "Server error" }));
}

const editOneTech = (req, res) => {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
    res.status(400).json({ message: "wrong id type !" })
    }

    const technique = req.body
    modifyOneTech(technique, id)
        .then((result) => {
            if(result.affectedRows === 1) {
                res.json({ id, ...technique })
            } else {
                res.status(404).json({ message: 'No technique found with this id' })
            }
        })
        .catch((err) => res.status(500).json({ message: "Server error" }));
}

const deleteOneTech = (req, res) => {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
        res.status(400).json({ message: "wrong id type !" })
    }

    removeOneTech(id) 
        .then((result) => {
            if(result.affectedRows === 1) {
                res.sendStatus(204)
            } else {
                res.status(404).json({ message: "No technique found with this id !" })
            }
        })
        .catch((err) => res.status(500).json({ message: "Server error" }))
}



module.exports = { 
    getAllTech,
    getOneTech,
    createTech,
    editOneTech,
    deleteOneTech
};