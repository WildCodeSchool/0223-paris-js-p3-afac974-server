const {
  findAllArt,
  findOneArt,
  addArt,
  modifyOneArt,
  removeArt,
} = require('./model');

const getAllArt = (req, res) => {
  findAllArt(req.query)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ message: 'Server error' }));
};

const getOneArt = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ message: 'Wrong id type !' });
  }
  findOneArt(id)
    .then(([data]) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: 'No art found with this id !!!' });
      }
    })
    .catch((err) => res.status(500).json({ message: 'Servor error' }));
};

const createArt = (req, res) => {
  const art = req.body;

  if (!req.files || !req.files[0] || !req.files[0].filename) {
    return res.status(400).json({ message: 'Une oeuvre doit être ajoutée' });
  }
  if (!art.full_title || art.full_title.trim() === '') {
    return res.status(400).json({ message: 'Le titre de l\'oeuvre doit être ajouté' });
  }
  if (!art.achievement_date) {
    return res.status(400).json({ message: 'Date de réalisation est obligatoire.' });
  }

  const uploadedFilePath = req.protocol + '://' + req.get('host') + '/upload/' + req.files[0].filename;

  addArt(art, uploadedFilePath)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: 'DUPLICATE_REF_IMG', message: 'Cette référence d\'oeuvre existe déjà.' });
      }
      console.error("Erreur lors de l'ajout de l'oeuvre:", err);
      res.status(500).json({ message: 'Server error' })
    });
};


const putOneArt = (req, res) => {
  const art = req.body;
  const id = req.params.id;
  const uploadedFilePath =
    req.protocol + '://' + req.get('host') + '/upload/' + req.files[0].filename;

  modifyOneArt(art, uploadedFilePath, id).then((result) => {
    if (result.affectedRows === 1) {
      res.json({ id, ...art });
    } else {
      res.status(404).json({ message: 'No art found with this id !' });
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
        res.status(404).json({ message: 'No art found' });
      }
    })
    .catch((err) => res.status(500).json({ message: 'Server error' }));
};


module.exports = { getAllArt, getOneArt, createArt, putOneArt, deleteArt };
