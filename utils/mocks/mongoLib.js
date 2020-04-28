const sinon = require('sinon');

const { moviesMocks, filteredMoviesMocks } = require('../mocks/movies');

const getAllStub = sinon.stub();
getAllStub.withArgs('movies').resolves(moviesMocks);

const tagQuery = {
    tags: { $in: ['Drama'] }
};

getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMocks('Drama'));

const createStub = sinon.stub().resolves(moviesMocks[0].id);

class MongoLibMock {
    getAll(collection, query) {
        return getAllStub(collection, query)
    }

    create(collection, data) {
        return createStub(collection, data);
    }
}

module.exports = {
    getAllStub,
    createStub,
    MongoLibMock
};