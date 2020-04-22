const MongoLib  = require('../libs/mongo');

class MoviesService {
    constructor() {
        this.collection = 'movies';
        this.mongoDB = new MongoLib();
    }

    async getMovies({ tags }) {
        const query = tags && {tags: {$in: tags}}
        const movies = await this.mongoDB.getAll(this.collection, query);

        return movies || [];
    }

    async getMovie({ movieId }) {
        const movie = await this.mongoDB.get(this.collection, movieId);

        return movie || {};
    }

    async createMovie({ movie }) {
        const createMovieId = await this.mongoDB.create(this.collection, movie);

        return createMovieId;
    }

    async updateMovie({movieId}, movie) {
        console.log('service', movieId)
        const updateMovieId = await this.mongoDB.update(this.collection, movieId, movie)
        return updateMovieId;
    }

    // async partialUpdateMovie() {
    //     const updateMovieId = await Promise.resolve(moviesMocks[0]);
    //     return updateMovieId;
    // }

    async deteleMovie({ movieId }) {
        const deleteMovieId = await this.mongoDB.delete(this.collection, movieId);
        return deleteMovieId;
    }
}

module.exports = MoviesService;
