const validator = require('../helpers/validate');

const saveSong = (req, res, next) => {
    const validationRule = {
        artist: 'required|string',
        title: 'required|string',
        album: 'required|string',
        genre: 'string',
        releaseDate: 'required|string',
        duration: 'required|number'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    saveSong
};