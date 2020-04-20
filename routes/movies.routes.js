const express = require('express');
const moviesMock  = require('../utils/mocks/movies');

function moviesApp(app) {
    const router = express.Router();
    app.use('/api/movies', router);

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

    router.post('/', async function(req, res, next) {
        try{
            const movies = await Promise.resolve(moviesMock.movies[0]);

            res.status(201).json({
                data: movies,
                message: 'movie created'
            });
        } catch(err) {
            next(err);
        }
    });

    router.put('/:movieId', async function(req, res, next) {
        try{
            const movies = await Promise.resolve(moviesMock.movies[0].id);

            res.status(200).json({
                data: movies,
                message: 'movie update'
            });
        } catch(err) {
            next(err);
        }
    });

    router.delete('/:movieId', async function(req, res, next) {
        try{
            const deleteMovieId = await Promise.resolve(moviesMock.movies[0].id);

            res.status(200).json({
                data: deleteMovieId,
                message: 'movie deleted'
            });
        } catch(err) {
            next(err);
        }
    });
}

module.exports = moviesApp;