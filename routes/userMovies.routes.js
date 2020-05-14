const express = require('express');

const UserMoviesServices = require('../services/userMovies');
const validationHandler = require('../utils/middleware/validationHandler');

const { movieIdSchema } = require('../utils/schemas/movies.schema');
const { userIdSchema } = require('../utils/schemas/users.schema');
const { createUserMovieSchema } = require('../utils/schemas/userMovies.schema');

function userMoviesApi(app) {
    const router = express.Router();
    app.use('/api/user-movies', router);

    const userMoviesServices = new UserMoviesServices();

    router.get('/', validationHandler({ userId: userIdSchema }, 'query'), async function (req, res, next) {
        const { userId } = req.query;
        
        try {
            const userMovies = await userMoviesServices.getUserMovies({ userId });

            res.status(200).json({
                data: userMovies,
                message: 'user movies listed'
            });
        } catch(error) {
            next(error);
        }
    });

    router.post('/', validationHandler(createUserMovieSchema), async function (req, res) {
        const { body: userMovie } = req;

        try {
            const createdUserMoviesId = await userMoviesService.create({
                userMovie
            });

            res.status(201).json({
                data: createdUserMoviesId,
                message: 'user movies created'
            });

        } catch (error) {
            next(error);
        }
    });
    
    router.delete('/:userMovieId', validationHandler({ userMoviesId: movieIdSchema }, 'params'), async function(req, res, next) {
        const { userId } = req;

        try {
            const deleteUserMovieId = await userMoviesService.delete({
                userId
            });

            res.status(200).json({
                data: deleteUserMovieId,
                message: 'user movie deleted'
            });
        } catch (error) {
            next(error);
        }
    })
}

module.exports = userMoviesApi;