const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApp(app = express()) {
    const router = express.Router();
    app.user('/api/movies', router);

    router.get('/', async function(req, res, next) {
        try{
            const movies = await Promise.resolve(moviesMock);

            res.status(200).json({
                data: movies,
                message: 'movies listed'
            });
        } catch(err) {
            next(err);
        }
    });
}

module.exports = {
    moviesApp
};