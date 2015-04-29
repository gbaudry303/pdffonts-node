var should = require('chai').should(),
    pdffonts = require('../index'),
    getFonts = pdffonts.process;

describe('process methods of module', function() {
  it('get fonts with valid properties', function(done) {
    getFonts('test/test.pdf', function(err, result) {
      console.log(result);
      result.should.be.a('array');
      result[0].should.have.property('name');
      result[0].should.have.property('type');
      result[0].should.have.property('encoding');
      result[0].should.have.property('embedded');
      result[0].should.have.property('subset');
      result[0].should.have.property('unicode');
      result[0].should.have.property('object');
      result[0].should.have.property('id');

      return done();
   });
  });
});