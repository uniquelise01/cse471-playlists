const express = require('express');
const router = express.Router();

const playlist1Controller = require('../controllers/playlist1');
const validation = require('../middleware/validate');

router.get('/', playlist1Controller.getAll);

router.get('/:id', playlist1Controller.getSingle);

router.post('/', validation.saveSong, playlist1Controller.addSong);

router.put('/:id', validation.saveSong, playlist1Controller.updateSong);

router.delete('/:id', playlist1Controller.deleteSong);

module.exports = router;