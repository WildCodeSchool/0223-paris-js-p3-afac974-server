const router = require('express').Router();
const { 
    getAllTech,
    getOneTech,
    createTech,
    editOneTech,
    deleteOneTech
} = require('./controller');

router.get('/', getAllTech);
router.get('/:id', getOneTech);
router.post('/', createTech);
router.put("/:id", editOneTech);
router.delete('/:id', deleteOneTech);

module.exports = router;