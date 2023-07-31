const router = require('express').Router();
const {
  getAllArt,
  getOneArt,
  createArt,
  putOneArt,
  deleteArt,
} = require('./controller');

const { validateAddArt} = require('./validator')
const upload = require('../../middleware/fileUpload');

router.get('/', getAllArt);
router.get('/:id', getOneArt);
router.post('/', upload.any(),validateAddArt, createArt);
router.put('/:id', upload.any(), putOneArt);
router.delete('/:id', deleteArt);

module.exports = router;
