const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = (req, res) => {
    mongodb
    .getDatabase()
    .db()
    .collection('playlist-1')
    .find()
    .toArray().then((err, lists) => {
        if (err) {
            res.status(400).json({ message: err });
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getSingle = (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid song id to find a song.');
    }
    const songId = new ObjectId(req.params.id);
    mongodb.getDatabase().db().collection('playlist-1').find({_id: songId})
    .toArray().then((err, result) => {
        if (err) {
            res.status(400).json({ message: err });
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result[0]);
    });
};

const addSong = async (req, res) => {
    const song = {
        artist: req.body.artist,
        title: req.body.title,
        album: req.body.album,
        genre: req.body.genre,
        releaseDate: req.body.releaseDate,
        duration: req.body.duration
    };
    const response = await mongodb.getDatabase().db().collection('playlist-1').insertOne(song);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while creating the song in playlist 1.')
    }
};

const updateSong = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid song id to update a song.');
    }
    const songId = new ObjectId(req.params.id);
    const song = {
        artist: req.body.artist,
        title: req.body.title,
        album: req.body.album,
        genre: req.body.genre,
        releaseDate: req.body.releaseDate,
        duration: req.body.duration
    };
    const response = await mongodb.getDatabase().db().collection('playlist-1').replaceOne({_id: songId}, song);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while updating the song in playlist 1.')
    }
};

const deleteSong = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid song id to delete a song.');
    }
    const songId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('playlist-1').deleteOne({_id: songId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while deleting the song in playlist 1.')
    }
};

module.exports = {
    getAll,
    getSingle,
    addSong,
    updateSong,
    deleteSong
};