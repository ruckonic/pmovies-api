const assert = require('assert');
const proxyquire = require('proxyquire');
require('../services/movies')

const { moviesMocks, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('route - movies', function() {
    const route = proxyquire('../routes/movies.routes', {
        '../services/movies': MoviesServiceMock
    });

    const request = testServer(route);

    describe('GET /movies', function(){
        it('should respond with status 200', function(done) {
            request.get('/api/movies').expect(200, done);
        });

        it('shoult respond with list of movie', function(done) {
            request.get('/api/movies').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: moviesMocks,
                    message: 'movies listed'
                });
                done();
            });
        });
    });
});