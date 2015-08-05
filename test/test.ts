import * as chai from 'chai';
chai.should();

describe('example', () => {
  it('should pass', (done) => {
    true.should.be.true;
    done();
  });

  it('should also pass', (done) => {
    true.should.be.true;
    done();
  });
});
