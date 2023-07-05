const { findAllArt, findOneArt, addArt, modifyOneArt, removeArt} = require("./model")

const getAllArt = (req, res) => {
    findAllArt()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json({ message: "Server error" }));
  };

  const getOneArt = (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "Wrong id type !" });
    }
    findOneArt(id)
      .then(([data]) => {
        if (data) {
          res.json(data);
        } else {
          res.status(404).json({ message: "No art found with this id !!!" });
        }
      })
      .catch((err) => res.status(500).json({ message: "Servor error" }));
  };


  const createArt = (req, res) => {
    const art = req.body;
    const uploadedFilePath = req.protocol + "://" + req.get("host") + "/upload/" + req.file.filename;

  
    addArt(art, uploadedFilePath)
      .then((result) => {
        res.status(201).json(result)
      })
      .catch((err) => res.status(500).json({ message: "Server error" }));
  };

  const putOneArt = (req, res) => {
    const art = req.body;
    const id = req.params.id;
  
    modifyOneArt(art, id).then((result) => {
      if (result.affectedRows === 1) {
        res.json({ id, ...art });
      } else {
        res.status(404).json({ message: "No art found with this id !" });
      }
    });
  };

  const deleteArt = (req, res) => {
    const id = req.params.id;
    removeArt(id)
    .then((data) => {   
        if (data.affectedRows === 1) {
            res.sendStatus(204);
        } else {
            res.status(404).json({ message : "No art found"})
        }
    })
    .catch((err) => res.status(500).json({ message :  "Server error"}))
}


module.exports = { getAllArt, getOneArt, createArt, putOneArt, deleteArt }