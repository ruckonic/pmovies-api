const express = require('express');
const MoviesServices = require('../services/movies');

function moviesApp(app) {
    const router = express.Router();
    app.use('/api/movies', router);
    const moviesServices = new MoviesServices();

    router.get('/', async function(req, res, next) {
        const { tags } = req.query;
        try{
            const movies = await moviesServices.getMovies({tags});

            res.status(200).json({
                data: movies,
                message: 'movies listed'
            });
        } catch(err) {
            next(err);
        }
    });

    router.get('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;
        try{
            const movies = await moviesServices.getMovie({ movieId });

            res.status(200).json({
                data: movies,
                message: 'movies listed'
            });
        } catch(err) {
            next(err);
        }
    });

    router.post('/', async function(req, res, next) {
        const { body: movie } = req;
        try{
            const createMovie = await moviesServices.createMovie({ movie });

            res.status(201).json({
                data: createMovie,
                message: 'movie created'
            });
        } catch(err) {
            next(err);
        }
    });

    // router.patch('/:movieId', async function(req, res, next) {
    //     const { body: movie, params: movieId} = req;
    //     try{
    //         const partialUpdateMovie = await moviesServices.partialUpdateMovie({ movieId, movie });

    //         res.status(200).json({
    //             data: partialUpdateMovie,
    //             message: 'movie partial update'
    //         });
    //     } catch(err) {
    //         next(err);
    //     }
    // });

    router.put('/:movieId', async function(req, res, next) {
        const { body: movie, params: movieId} = req;
        try{
            console.log('rootes: ', movie);
            const movies = await moviesServices.updateMovie(movieId, movie);

            res.status(200).json({
                data: movies,
                message: 'movie update'
            });
        } catch(err) {
            next(err);
        }
    });

    router.delete('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;
        try{
            const deleteMovieId = await moviesServices.deteleMovie({ movieId });

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