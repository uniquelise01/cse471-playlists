const express = require('express');
const router = express.Router();

const playlist2Controller = require('../controllers/playlist2');
const validation = require('../middleware/validate');

router.get('/', playlist2Controller.getAll);

router.get('/:id', playlist2Controller.getSingle);

router.post('/', validation.saveSong, playlist2Controller.addSong);

router.put('/:id', validation.saveSong, playlist2Controller.updateSong);

router.delete('/:id', playlist2Controller.deleteSong);

module.exports = router;