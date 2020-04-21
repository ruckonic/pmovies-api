const moviesMocks  = require('../utils/mocks/movies');

class MoviesService {
    async getMovies() {
        const movies = await Promise.resolve(moviesMocks);

        return movies || [];
    }

    async getMovie() {
        const movie = await Promise.resolve(moviesMocks[0]);

        return movie || {};
    }

    async createMovie() {
        const createMovieId = await Promise.resolve(moviesMocks[0]);
        return createMovieId;
    }

    async updateMovie() {
        const updateMovieId = await Promise.resolve(moviesMocks[0]);
        return updateMovieId;
    }

    async partialUpdateMovie() {
        const updateMovieId = await Promise.resolve(moviesMocks[0]);
        return updateMovieId;
    }

    async deteleMovie() {
        const deleteMovieId = await Promise.resolve(moviesMocks[0]);
        return deleteMovieId;
    }
}

module.exports = MoviesService;
