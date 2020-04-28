const assert = require('assert');
const proxiquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');

const { moviesMocks } = require('../utils/mocks/movies');

describe('services - movies', function() {
    const MovieServices = proxiquire('../services/movies', {
        '../libs/mongo': MongoLibMock
    });

    const moviesService =  new MovieServices();

    describe('when getMovies Method is called', async function() {
        it('should call the getAll MongoLib method', async function() {
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        });

        it('shout return an array of movie', async function(){
            const result = await moviesService.getMovies({});
            const expected = moviesMocks;

            assert.deepEqual(result, expected);
        });
    });
});