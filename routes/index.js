const router = require('express').Router();
const passport = require('passport');

router.use('/', require('./swagger'));

router.use('/playlist1', require('./playlist1'));
router.use('/playlist2', require('./playlist2'));

router.get('/login', passport.authenticate('github'),(req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if(err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router;