let chai = require('chai');
let app = require('../app');
let chaiHTTP = require('chai-http');
const { expect } = require('chai');

chai.use(chaiHTTP);

describe('/ping', () => {
    it('get_ping', (done) => {
        chai.request(app)
        .get('/pings')
        .end((err, res) => {
            if(err) done(err);
            expect(res.status).to.equal(200);
            done();
        })
    });
});