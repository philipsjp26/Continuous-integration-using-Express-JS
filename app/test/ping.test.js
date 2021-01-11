let chai = require('chai');
let app = require('../app');
let chaiHTTP = require('chai-http');

chai.use(chaiHTTP);

describe('/ping', () => {
    it('get_ping', (done) => {
        chai.request(app).get('/ping');
        done();
    });
});