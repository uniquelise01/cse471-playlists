const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => { 
    res.send('Happy Mothers Day!'); 
});

router.use('/playlist1', require('./playlist1'));
router.use('/playlist2', require('./playlist2'));

module.exports = router;