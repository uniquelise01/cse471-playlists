const express = require('express');
const router = express.Router();

const playlist2Controller = require('../controllers/playlist2');
const validation = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', playlist2Controller.getAll);

router.get('/:id', playlist2Controller.getSingle);

router.post('/', isAuthenticated, validation.saveSong, playlist2Controller.addSong);

router.put('/:id', isAuthenticated, validation.saveSong, playlist2Controller.updateSong);

router.delete('/:id', isAuthenticated, playlist2Controller.deleteSong);

module.exports = router;